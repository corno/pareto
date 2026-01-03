import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"
import * as d_out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, variable, i, s } from "exupery/dist/shorthands/implementation"
import { t, import_, sub } from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'path': _pi.List<string>,
        'imports': d_in.Imports,
        'constrained': boolean
    }
): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return m.module(
        op_flatten_dictionary(
            _p.dictionary.literal({
                "": _p.dictionary.literal({
                    "signatures": import_.ancestor(5, "interface", _p.list.literal([
                        _p.list.literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _p.list.literal(["marshall"])
                    ]).flatten(($) => $), {}),
                    "out": import_.ancestor(5, "interface", ["generated", "pareto", "core", "astn target"], {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["marshall"], {}))
            }),
            {
                'separator': "",
            },
                        () => _p.unreachable_code_path(),
        ),
        {},
        $.types.dictionary.map(($, key) => variable(
            t.component_imported("signatures", key, {}, []),
            i.function_(
                true,
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
): d_out.Initialization<_pi.Deprecated_Source_Location> => {

    const string = (value: d_out.Initialization<_pi.Deprecated_Source_Location>, delimiter: 'quote' | 'backtick' | 'none'): d_out.Initialization<_pi.Deprecated_Source_Location> => {
        return i.tagged_union(
            "text",
            i.group({
                "delimiter": i.tagged_union(delimiter, i.null_()),
                "value": value,
            })
        )
    }

    return _p.cc($, ($) => {
        switch ($[0]) {
            case 'number': return _p.ss($, ($) => string(i.call(
                s.from_parameter("value serializers", _p.cc($, ($) => {
                    switch ($[0]) {
                        case 'global': return _p.ss($, ($) => ["custom numbers", $.key])
                        case 'local': return _p.ss($, ($) => ["default number"])
                        default: return _p.au($[0])
                    }
                })),
                i.select_from_context([]),
                _p.dictionary.literal({}),
            ), 'backtick')) //FIXME should be 'none'
            case 'boolean': return _p.ss($, ($) => string(i.call(
                s.from_parameter("value serializers", ["boolean"]),
                i.select_from_context([]),
                _p.dictionary.literal({}),
            ), 'backtick')) //FIXME should be 'none'
            case 'nothing': return _p.ss($, ($) => i.tagged_union("nothing", i.null_()))
            case 'reference': return _p.ss($, ($) => _p.cc($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _p.ss($, ($) => i.tagged_union("nothing", i.null_()))
                    case 'selected': return _p.ss($, ($) => string(i.select_from_context(["key"]), 'backtick'))
                    default: return _p.au($[0])
                }
            }))
            case 'text': return _p.ss($, ($) => string(i.select_from_context([]), 'quote'))
            case 'component': return _p.ss($, ($) => i.call(
                _p.cc($, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => s.from_variable_import(` i r ${$.import.key}`, $.type.key, []))
                        case 'internal': return _p.ss($, ($) => s.from_variable($.key, []))
                        case 'internal cyclic': return _p.ss($, ($) => s.from_variable($.key, []))
                        default: return _p.au($[0])
                    }
                }),
                i.select_from_context([]),
                _p.dictionary.literal({
                    "value serializers": i.select_from_parameter("value serializers", []),
                }),
            ))
            case 'dictionary': return _p.ss($, ($) => i.tagged_union(
                "dictionary",
                i.dictionary_map(
                    $.ordered ? s.from_context(["dictionary"]) : s.from_context([]),
                    Type_Node(
                        $.node,
                        {
                            'type': $p.type,
                            'subselection': $p.subselection.append_element(sub.dictionary()),
                        }
                    )
                )
            ))
            // case 'group': return pa.ss($, ($) => i.group($.map(($, key) => i.change_context(
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
            case 'group': return _p.ss($, ($) => i.tagged_union(
                "verbose group",
                i.dictionary_literal($.dictionary.map(($, key) => i.change_context(
                    s.from_context([key]),
                    Type_Node(
                        $.node,
                        {
                            'type': $p.type,
                            'subselection': $p.subselection.append_element(sub.group(key)),
                        }
                    )
                )))
            ))
            case 'list': return _p.ss($, ($) => i.tagged_union(
                "list",
                i.array_map(
                    s.from_context([]),
                    Type_Node(
                        $.node,
                        {
                            'type': $p.type,
                            'subselection': $p.subselection.append_element(sub.list()),
                        }
                    )
                )))
            case 'optional': return _p.ss($, ($) => i.tagged_union(
                "optional",
                i.optional_transform(
                    s.from_context([]),
                    i.tagged_union(
                        "set",
                        Type_Node(
                            $,
                            {
                                'type': $p.type,
                                'subselection': $p.subselection.append_element(sub.optional()),
                            }
                        ),
                    ),
                    i.tagged_union(
                        "not set",
                        i.null_()
                    ),
                    t.component_imported(
                        "out",
                        "Value",
                        {},
                        [sub.state_group("optional")]
                    ),
                )))
            case 'state group': return _p.ss($, ($) => i.tagged_union(
                "state",
                i.switch_(
                    s.from_context([]),
                    $.map(($, key) => i.group({
                        "state": i.string(key, 'quote'),
                        "value": Type_Node(
                            $.node,
                            {
                                'type': $p.type,
                                'subselection': $p.subselection.append_element(sub.state_group(key)),
                            }
                        )
                    })),
                    t.component_imported(
                        "out",
                        "Value",
                        {},
                        [sub.state_group("state")]
                    ),
                )
            ))
            // case 'type parameter': return _p.ss($, ($) => _pdev.implement_me("xx"))
            default: return _p.au($[0])
        }
    })
}
