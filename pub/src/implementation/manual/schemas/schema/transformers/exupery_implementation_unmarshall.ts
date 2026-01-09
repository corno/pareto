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
        'refiner',
        op_flatten_dictionary(
            _p.dictionary.literal({
                "": _p.dictionary.literal({
                    "generic": import_.ancestor(2, "generic", ["unmarshall"], {}),
                    "signatures": import_.ancestor(5, "interface", _p.list.nested_literal([
                        _p.list.literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _p.list.literal(["unmarshall"]),
                    ]), {}),
                    "in": import_.ancestor(5, "interface", ["generated", "pareto", "core", "astn source"], {}),
                    "out": import_.ancestor(5, "interface", _p.list.nested_literal([
                        _p.list.literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _p.list.literal(["data types", "target"]),
                    ]), $p.constrained ? { "Source": t.component_imported("in", "Range", {}, []) } : {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["unmarshall"], {}))
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
                        'temp type': key,
                        'temp subselection': _p.list.literal([]),
                        'constrained': $p.constrained
                    }
                ),
            ),

        )),
    )
}

export const Type_Node = (
    $: d_in.Type_Node,
    $p: {
        'temp type': string
        'temp subselection': _pi.List<d_out_interface.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location>> //can be removed when exupery has type inference
        'constrained': boolean
    },
): d_out.Initialization<_pi.Deprecated_Source_Location> => {
    return _p.sg($, ($) => {
        switch ($[0]) {
            case 'number': return _p.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process number", []),
                i.select_from_context([]),
                _p.dictionary.literal({
                    "deserializer": i.select_from_parameter("value deserializers", _p.sg($, ($) => {
                        switch ($[0]) {
                            case 'global': return _p.ss($, ($) => ["custom numbers", $.key])
                            case 'local': return _p.ss($, ($) => ["default number"])
                            default: return _p.au($[0])
                        }
                    })),
                })
            ))
            case 'boolean': return _p.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process boolean", []),
                i.select_from_context([]),
                _p.dictionary.literal({
                    "deserializer": i.select_from_parameter("value deserializers", ["boolean"]),
                })
            ))
            case 'nothing': return _p.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process nothing", []),
                i.select_from_context([]),
                _p.dictionary.literal({
                })
            ))
            case 'reference': return _p.ss($, ($) => _p.sg($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _p.ss($, ($) => i.call(
                        s.from_variable_import(" i generic", "process derived reference", []),
                        i.select_from_context([]),
                        _p.dictionary.literal({
                        })
                    ))
                    case 'selected': return _p.ss($, ($) => i.call(
                        s.from_variable_import(" i generic", _p.sg($.dependency, ($) => {
                            switch ($[0]) {
                                case 'acyclic': return "process selected reference"
                                case 'cyclic': return "process selected reference"
                                case 'stack': return "process stack reference"
                                default: return _p.au($[0])
                            }
                        }), []),
                        i.select_from_context([]),
                        _p.dictionary.literal({
                        })
                    ))
                    default: return _p.au($[0])
                }
            }))
            case 'text': return _p.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process text", []),
                i.select_from_context([]),
                _p.dictionary.literal({
                })
            ))
            case 'component': return _p.ss($, ($) => i.call(
                _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => s.from_variable_import(` i r ${$.import.key}`, $.type.key, []))
                        case 'internal': return _p.ss($, ($) => s.from_variable($.key, []))
                        case 'internal cyclic': return _p.ss($, ($) => s.from_variable($.key, []))
                        default: return _p.au($[0])
                    }
                }),
                i.select_from_context([]),
                _p.dictionary.literal({
                    "value deserializers": i.select_from_parameter("value deserializers", []),
                }),
            ))
            case 'dictionary': return _p.ss($, ($) => i.call(
                s.from_variable_import(" i generic", $p.constrained ? "process unresolved dictionary" : "process unconstrained dictionary", []),
                i.select_from_context([]),
                _p.dictionary.literal({
                    "value": i.function_(
                        false,
                        Type_Node(
                            $.node,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': _p.list.nested_literal([
                                    $p['temp subselection'],
                                    [
                                        sub.dictionary(),
                                    ]
                                ]),
                                'constrained': $p.constrained
                            }
                        ),
                    ),
                })
            ))
            case 'group': return _p.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process group", []),
                i.select_from_context([]),
                _p.dictionary.literal({
                    "properties": i.function_(
                        false,
                        i.group($.dictionary.map(($, key) => i.change_context(
                            s.call(
                                s.from_variable_import(" i generic", "get entry", []),
                                s.from_context([]),
                                _p.dictionary.literal({
                                    "key": i.string(key, 'quote'),
                                }),
                                [],
                            ),
                            Type_Node(
                                $.node,
                                {
                                    'temp type': $p['temp type'],
                                    'temp subselection': _p.list.nested_literal([
                                        $p['temp subselection'],
                                        [
                                            sub.group(key),
                                        ]
                                    ]),
                                    'constrained': $p.constrained
                                }
                            )
                        )))
                    ),
                })
            ))
            case 'list': return _p.ss($, ($) => i.call(
                s.from_variable_import(" i generic", $p.constrained ? "process unresolved list" : "process unconstrained list", []),
                i.select_from_context([]),
                _p.dictionary.literal({
                    "value": i.function_(
                        false,
                        Type_Node(
                            $.node,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': _p.list.nested_literal([   
                                    $p['temp subselection'],
                                    [
                                        sub.list(),
                                    ]
                                ]),
                                'constrained': $p.constrained
                            }
                        ),
                    ),
                })
            ))
            case 'optional': return _p.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process optional", []),
                i.select_from_context([]),
                _p.dictionary.literal({
                    "value": i.function_(
                        false,
                        Type_Node(
                            $,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': _p.list.nested_literal([
                                    $p['temp subselection'],
                                    [
                                        sub.optional(),
                                    ]
                                ]),
                                'constrained': $p.constrained
                            }
                        ),
                    ),
                })
            ))
            case 'state group': return _p.ss($, ($) => i.call(
                s.from_variable_import(" i generic", $p.constrained ? "process unresolved state group" : "process unconstrained state group", []),
                i.select_from_context([]),
                _p.dictionary.literal({
                    "states": i.dictionary_literal($.map(($, key) => i.function_(
                        false,
                        i.case_(
                            key,
                            Type_Node(
                                $.node,
                                {
                                    'temp type': $p['temp type'],
                                    'temp subselection': _p.list.nested_literal([
                                        $p['temp subselection'],
                                        [
                                            sub.state_group(key),
                                        ]
                                    ]),
                                    'constrained': $p.constrained
                                }
                            )
                        ),
                        t.component_imported("out", $p['temp type'], {}, _p.list.nested_literal([
                            $p['temp subselection'],
                            [
                                sub.group("SG"),
                            ]
                        ]))
                    )))
                })
            ))
            // case 'type parameter': return _p.ss($, ($) => i.call(
            //     s.from_variable_import(" i generic", "process type parameter", []),
            //     i.select_from_context([]),
            //     _p.dictionary.literal({
            //     })
            // ))
            default: return _p.au($[0])
        }
    })
}
