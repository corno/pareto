import * as _edata from 'exupery-core-data'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import * as _edev from 'exupery-core-dev'

import * as _in from "../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"
import * as _out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, variable, i, s } from "exupery/dist/shorthands/implementation"
import { t, import_, sub } from "exupery/dist/shorthands/interface"

import {$$ as op_append_element} from "pareto-standard-operations/dist/implementation/operations/pure/list/append_element"
import {$$ as op_flatten_dictionary} from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"
import {$$ as op_flatten_list} from "pareto-standard-operations/dist/implementation/operations/pure/list/flatten"
import { Signature } from "../../../../interface/algorithms/transformations/schema/exupery_implementation/marshall"


export const Schema = (
    $: _in.Schema,
    $p: {
        'path': _et.Array<string>,
        'imports': _in.Imports,
        'constrained': boolean
    }
): _out.Module_Set.D<_edata.Source_Location> => {
    return m.module(
        op_flatten_dictionary(
            _ea.dictionary_literal({
                "": _ea.dictionary_literal({
                    "signatures": import_.ancestor(5, "interface", op_flatten_list(_ea.array_literal([
                        _ea.array_literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _ea.array_literal(["marshall"])
                    ])), {}),
                    "out": import_.ancestor(5, "interface", ["generated", "pareto", "core", "astn target"], {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["marshall"], {}))
            }),
            {
                'separator': "",
            }
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
                        'subselection': _ea.array_literal([])
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
        'subselection': _et.Array<_out_interface.Type.SG.component.sub_selection.L<_edata.Source_Location>>
    },
): _out.Initialization<_edata.Source_Location> => {

    const string = (value: _out.Initialization<_edata.Source_Location>, delimiter: 'quote' | 'backtick' | 'none'): _out.Initialization<_edata.Source_Location> => {
        return i.tagged_union(
            "text",
            i.group({
                "delimiter": i.tagged_union(delimiter, i.null_()),
                "value": value,
            })
        )
    }

    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'number': return _ea.ss($, ($) => string(i.call(
                s.from_parameter("value serializers", _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'global': return _ea.ss($, ($) => ["custom numbers", $.key])
                        case 'local': return _ea.ss($, ($) => ["default number"])
                        default: return _ea.au($[0])
                    }
                })),
                i.select_from_context([]),
                _ea.dictionary_literal({}),
            ), 'backtick')) //FIXME should be 'none'
            case 'boolean': return _ea.ss($, ($) => string(i.call(
                s.from_parameter("value serializers", ["boolean"]),
                i.select_from_context([]),
                _ea.dictionary_literal({}),
            ), 'backtick')) //FIXME should be 'none'
            case 'nothing': return _ea.ss($, ($) => i.tagged_union("nothing", i.null_()))
            case 'reference': return _ea.ss($, ($) => _ea.cc($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _ea.ss($, ($) => i.tagged_union("nothing", i.null_()))
                    case 'selected': return _ea.ss($, ($) => string(i.select_from_context(["key"]), 'backtick'))
                    default: return _ea.au($[0])
                }
            }))
            case 'text': return _ea.ss($, ($) => string(i.select_from_context([]), 'quote'))
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
                _ea.dictionary_literal({
                    "value serializers": i.select_from_parameter("value serializers", []),
                }),
            ))
            case 'dictionary': return _ea.ss($, ($) => i.tagged_union(
                "dictionary",
                i.dictionary_map(
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
            case 'group': return _ea.ss($, ($) => i.tagged_union(
                "verbose group",
                i.dictionary_literal($.dictionary.map(($, key) => i.change_context(
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
                )))
            ))
            case 'list': return _ea.ss($, ($) => i.tagged_union(
                "list",
                i.array_map(
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
                )))
            case 'optional': return _ea.ss($, ($) => i.tagged_union(
                "optional",
                i.optional_transform(
                    s.from_context([]),
                    i.tagged_union(
                        "set",
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
            case 'state group': return _ea.ss($, ($) => i.tagged_union(
                "state",
                i.switch_(
                    s.from_context([]),
                    $.map(($, key) => i.group({
                        "state": i.string(key, 'quote'),
                        "value": Type_Node(
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
            // case 'type parameter': return _ea.ss($, ($) => _edev.implement_me())
            default: return _ea.au($[0])
        }
    })
}
