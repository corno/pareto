import * as pd from 'exupery-core-data'
import * as pt from 'exupery-core-types'
import * as pa from 'exupery-core-alg'
import * as pdev from 'exupery-core-dev'

import * as _in from "../../../generated/interface/schemas/schema/resolved"
import * as _out from "exupery/dist/generated/interface/schemas/implementation/unresolved" //FIXME... should be 'unresolved'
import * as _out_interface from "exupery/dist/generated/interface/schemas/interface/unresolved" //FIXME... should be 'unresolved'

import { m, variable, i, s } from "exupery/dist/shorthands/implementation"
import { t, import_, sub } from "exupery/dist/shorthands/interface"

import { pure } from "pareto-standard-operations"

const op = {
    'append element': pure.list['append element'],
    'flatten dictionary': pure.dictionary.flatten,
    'filter list': pure.list.filter,
    'flatten list': pure.list.flatten,
    'pad dictionary identifiers': pure.dictionary['pad identifiers'],
}

export const Types = (
    $: _in.Types,
    $p: {
        'key': string,
        'imports': _in.Imports,
        'constrained': boolean
    }
): _out.Module_Set.D<pd.Source_Location> => {
    return m.module(
        op['flatten dictionary'](
            pa.dictionary_literal({
                "": pa.dictionary_literal({
                    "signatures": import_.ancestor(3, "interface", ["schemas", $p.key, "serializer"], {}),
                    "out": import_.ancestor(3, "interface", ["schemas", $p.key, $p.constrained ? "unresolved" : "unconstrained"], $p.constrained ? { "Source": t.null_() } : {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["serializer"], {}))
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

    const string = (value: string): _out.Initialization<pd.Source_Location> => {
        return i.tagged_union(
            "text",
            i.group({
                "delimiter": i.tagged_union("quote", i.null_()),
                "value": i.string(value, 'quote'),
            })
        )
    }

    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'number': return pa.ss($, ($) => string("FIXME NUMBER"))
            case 'boolean': return pa.ss($, ($) => string("FIXME BOOLEAN"))
            case 'nothing': return pa.ss($, ($) => string("FIXME NOTHING"))
            case 'reference': return pa.ss($, ($) => pa.cc($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return pa.ss($, ($) => i.implement_me())
                    case 'selected': return pa.ss($, ($) => i.implement_me())
                    default: return pa.au($[0])
                }
            }))
            case 'text': return pa.ss($, ($) => string("FIXME TEXT"))
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
            case 'dictionary': return pa.ss($, ($) => i.tagged_union(
                "dictionary",
                i.dictionary_map(
                    $.ordered ? s.from_context(["dictionary"]) : s.from_context([]),
                    Type_Node(
                        $.node,
                        {
                            'type': $p.type,
                            'subselection': op['append element'](
                                $p.subselection,
                                {
                                    'element': sub.dictionary(),
                                },
                            ),
                        }
                    )
                )
            ))
            case 'identifier value pair': return pa.ss($, ($) => pdev.implement_me())
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
            case 'group': return pa.ss($, ($) => i.tagged_union(
                "verbose group",
                i.group($.map(($, key) => i.change_context(
                    s.from_context([key]),
                    Type_Node(
                        $,
                        {
                            'type': $p.type,
                            'subselection': op['append element'](
                                $p.subselection,
                                {
                                    'element': sub.group(key),
                                },
                            ),
                        }
                    )
                )))
            ))
            case 'list': return pa.ss($, ($) => i.tagged_union(
                "list",
                i.array_map(
                    s.from_context([]),
                    Type_Node(
                        $.node,
                        {
                            'type': $p.type,
                            'subselection': op['append element'](
                                $p.subselection,
                                {
                                    'element': sub.list(),
                                },
                            ),
                        }
                    )
                )))
            case 'optional': return pa.ss($, ($) => i.tagged_union(
                "optional",
                i.optional_transform(
                    s.from_context([]),
                    i.tagged_union(
                        "set",
                        Type_Node(
                            $,
                            {
                                'type': $p.type,
                                'subselection': op['append element'](
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
                )))
            case 'state group': return pa.ss($, ($) => i.tagged_union(
                "state",
                i.switch_(
                    s.from_context([]),
                    $.map(($, key) => i.case_(key, i.group({
                        "state": string(key),
                        "value": Type_Node(
                            $,
                            {
                                'type': $p.type,
                                'subselection': op['append element'](
                                    $p.subselection,
                                    {
                                        'element': sub.state_group(key),
                                    },
                                ),
                            }
                        )
                    }))),
                    t.component_imported(
                        "out",
                        $p.type,
                        {},
                        $p.subselection.__get_raw_copy(),
                    ),
                )
            ))
            case 'type parameter': return pa.ss($, ($) => pdev.implement_me())
            default: return pa.au($[0])
        }
    })
}
