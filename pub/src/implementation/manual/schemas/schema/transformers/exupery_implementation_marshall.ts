import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/source"
import * as d_out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/source"

import * as sh from "exupery/dist/shorthands/implementation"
import * as sh_i from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'path': _pi.List<string>,
        'imports': d_in.Imports,
        'constrained': boolean
    }
): d_out.Module_Set.D => sh.m.module(
    'transformer',
    op_flatten_dictionary(
        _p.dictionary.literal({
            "": _p.dictionary.literal({
                "signatures": sh_i.import_.ancestor(5, "interface", _p.list.nested_literal([
                    _p.list.literal(["generated", "pareto", "schemas"]),
                    $p.path,
                    _p.list.literal(["marshall"])
                ])),
                "out": sh_i.import_.ancestor(5, "interface", ["generated", "pareto", "core", "astn target"]),
            }),
            "r ": $p.imports.__d_map(($, key) => sh_i.import_.ancestor(1, $['schema set child'].key, ["marshall"]))
        }),
        {
            'separator': "",
        },
        () => _p.unreachable_code_path(),
    ),
    {},
    $.types.dictionary.__d_map(($, key) => sh.algorithm(
        sh.type_reference("signatures", key),
        true,
        Type_Node(
            $.node,
            {
                'type': key,
                'subselection': _p.list.literal([])
            }
        ),
    )),
)

export const Type_Node = (
    $: d_in.Type_Node,
    $p: {
        'type': string
        'subselection': _pi.List<d_out_interface.Type.reference.sub_selection.L>
    },
): d_out.Expression => {

    const string = (value: d_out.Expression, delimiter: 'quote' | 'backtick' | 'none'): d_out.Expression => {
        return sh.e.tagged_union(
            "text",
            sh.e.group({
                "delimiter": sh.e.tagged_union(delimiter, sh.e.null_()),
                "value": value,
            })
        )
    }

    return _p.sg($, ($) => {
        switch ($[0]) {
            case 'number': return _p.ss($, ($) => string(sh.e.call(
                sh.s.from_parameter("value serializers", _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'global': return _p.ss($, ($) => ["custom numbers", $.key])
                        case 'local': return _p.ss($, ($) => ["default number"])
                        default: return _p.au($[0])
                    }
                })),
                sh.e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({}),
            ), 'backtick')) //FIXME should be 'none'
            case 'boolean': return _p.ss($, ($) => string(sh.e.call(
                sh.s.from_parameter("value serializers", ["boolean"]),
                sh.e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({}),
            ), 'backtick')) //FIXME should be 'none'
            case 'nothing': return _p.ss($, ($) => sh.e.tagged_union("nothing", sh.e.null_()))
            case 'reference': return _p.ss($, ($) => _p.sg($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _p.ss($, ($) => sh.e.tagged_union("nothing", sh.e.null_()))
                    case 'selected': return _p.ss($, ($) => string(sh.e.select_from_context_deprecated(["key"]), 'backtick'))
                    default: return _p.au($[0])
                }
            }))
            case 'text': return _p.ss($, ($) => string(sh.e.select_from_context_deprecated([]), 'quote'))
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
                _p.dictionary.literal({
                    "value serializers": sh.e.select_from_parameter_deprecated("value serializers", []),
                }),
            ))
            case 'dictionary': return _p.ss($, ($) => sh.e.tagged_union(
                "dictionary",
                sh.e.dictionary_map(
                    $.ordered ? sh.s.from_context(["dictionary"]) : sh.s.from_context([]),
                    Type_Node(
                        $.node,
                        {
                            'type': $p.type,
                            'subselection': _p.list.nested_literal([
                                $p.subselection,
                                [
                                    sh_i.sub.dictionary(),
                                ]
                            ]),
                        }
                    )
                )
            ))
            // case 'group': return pa.ss($, ($) => i.group($.__d_map(($, key) => i.change_context(
            //     s.from_context([key]),
            //     Type_Node(
            //         $,
            //         {
            //             'type': $p.type,
            //             'subselection': op['append element'](
            //                 $p.subselection,
            //                 {
            //                     'element': sub.group(key),
            //                 },
            //             ),
            //         }
            //     )
            // ))))
            case 'group': return _p.ss($, ($) => sh.e.tagged_union(
                "verbose group",
                sh.e.dictionary_literal($.dictionary.__d_map(($, key) => sh.e.change_context(
                    sh.s.from_context([key]),
                    Type_Node(
                        $.node,
                        {
                            'type': $p.type,
                            'subselection': _p.list.nested_literal([
                                $p.subselection,
                                [
                                    sh_i.sub.group(key),
                                ]
                            ]),
                        }
                    )
                )))
            ))
            case 'list': return _p.ss($, ($) => sh.e.tagged_union(
                "list",
                sh.e.list_map(
                    sh.s.from_context([]),
                    Type_Node(
                        $.node,
                        {
                            'type': $p.type,
                            'subselection': _p.list.nested_literal([
                                $p.subselection,
                                [
                                    sh_i.sub.list(),
                                ]
                            ]),
                        }
                    )
                )))
            case 'optional': return _p.ss($, ($) => sh.e.tagged_union(
                "optional",
                sh.e.decide_optional(
                    sh.s.from_context([]),
                    sh.e.tagged_union(
                        "set",
                        Type_Node(
                            $,
                            {
                                'type': $p.type,
                                'subselection': _p.list.nested_literal([
                                    $p.subselection,
                                    [
                                        sh_i.sub.optional(),
                                    ]
                                ]),
                            }
                        ),
                    ),
                    sh.e.tagged_union(
                        "not set",
                        sh.e.null_()
                    ),
                    sh.type_node_reference(
                        "out",
                        "Value",
                        [sh_i.sub.state_group("optional")]
                    ),
                )))
            case 'state group': return _p.ss($, ($) => sh.e.tagged_union(
                "state",
                sh.e.decide_state_group(
                    sh.s.from_context([]),
                    $.__d_map(($, key) => sh.e.group({
                        "state": sh.e.string(key, 'quote'),
                        "value": Type_Node(
                            $.node,
                            {
                                'type': $p.type,
                                'subselection': _p.list.nested_literal([
                                    $p.subselection,
                                    [
                                        sh_i.sub.state_group(key),
                                    ]
                                ]),
                            }
                        )
                    })),
                    sh.type_node_reference(
                        "out",
                        "Value",
                        [sh_i.sub.state_group("state")]
                    ),
                )
            ))
            // case 'type parameter': return _p.ss($, ($) => _pdev.implement_me("xx"))
            default: return _p.au($[0])
        }
    })
}
