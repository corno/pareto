import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"
import * as _out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, variable, i, s } from "exupery/dist/shorthands/implementation"
import { t, import_, sub } from "exupery/dist/shorthands/interface"


import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"


export const Schema = (
    $: _in.Schema,
    $p: {
        'path': _pi.List<string>,
        'imports': _in.Imports,
        'constrained': boolean
    }
): _out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return m.module(
        op_flatten_dictionary(
            _pt.dictionary_literal({
                "": _pt.dictionary_literal({
                    "generic": import_.ancestor(2, "generic", ["unmarshall"], {}),
                    "signatures": import_.ancestor(5, "interface", _pt.list_literal([
                        _pt.list_literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _pt.list_literal(["unmarshall"]),
                    ]).flatten(($) => $), {}),
                    "in": import_.ancestor(5, "interface", ["generated", "pareto", "core", "astn source"], {}),
                    "out": import_.ancestor(5, "interface", _pt.list_literal([
                        _pt.list_literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _pt.list_literal(["data types", "target"]),
                    ]).flatten(($) => $), $p.constrained ? { "Source": t.component_imported("in", "Range", {}, []) } : {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["unmarshall"], {}))
            }),
            {
                'separator': "",
            },
                        () => _pt.unreachable_code_path(),
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
                        'temp subselection': _pt.list_literal([]),
                        'constrained': $p.constrained
                    }
                ),
            ),

        )),
    )
}

export const Type_Node = (
    $: _in.Type_Node,
    $p: {
        'temp type': string
        'temp subselection': _pi.List<_out_interface.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location>> //can be removed when exupery has type inference
        'constrained': boolean
    },
): _out.Initialization<_pi.Deprecated_Source_Location> => {
    return _pt.cc($, ($) => {
        switch ($[0]) {
            case 'number': return _pt.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process number", []),
                i.select_from_context([]),
                _pt.dictionary_literal({
                    "deserializer": i.select_from_parameter("value deserializers", _pt.cc($, ($) => {
                        switch ($[0]) {
                            case 'global': return _pt.ss($, ($) => ["custom numbers", $.key])
                            case 'local': return _pt.ss($, ($) => ["default number"])
                            default: return _pt.au($[0])
                        }
                    })),
                })
            ))
            case 'boolean': return _pt.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process boolean", []),
                i.select_from_context([]),
                _pt.dictionary_literal({
                    "deserializer": i.select_from_parameter("value deserializers", ["boolean"]),
                })
            ))
            case 'nothing': return _pt.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process nothing", []),
                i.select_from_context([]),
                _pt.dictionary_literal({
                })
            ))
            case 'reference': return _pt.ss($, ($) => _pt.cc($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _pt.ss($, ($) => i.call(
                        s.from_variable_import(" i generic", "process derived reference", []),
                        i.select_from_context([]),
                        _pt.dictionary_literal({
                        })
                    ))
                    case 'selected': return _pt.ss($, ($) => i.call(
                        s.from_variable_import(" i generic", _pt.cc($.dependency, ($) => {
                            switch ($[0]) {
                                case 'acyclic': return "process selected reference"
                                case 'cyclic': return "process selected reference"
                                case 'stack': return "process stack reference"
                                default: return _pt.au($[0])
                            }
                        }), []),
                        i.select_from_context([]),
                        _pt.dictionary_literal({
                        })
                    ))
                    default: return _pt.au($[0])
                }
            }))
            case 'text': return _pt.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process text", []),
                i.select_from_context([]),
                _pt.dictionary_literal({
                })
            ))
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
                _pt.dictionary_literal({
                    "value deserializers": i.select_from_parameter("value deserializers", []),
                }),
            ))
            case 'dictionary': return _pt.ss($, ($) => i.call(
                s.from_variable_import(" i generic", $p.constrained ? "process unresolved dictionary" : "process unconstrained dictionary", []),
                i.select_from_context([]),
                _pt.dictionary_literal({
                    "value": i.function_(
                        false,
                        Type_Node(
                            $.node,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': $p['temp subselection'].append_element(sub.dictionary()),
                                'constrained': $p.constrained
                            }
                        ),
                    ),
                })
            ))
            case 'group': return _pt.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process group", []),
                i.select_from_context([]),
                _pt.dictionary_literal({
                    "properties": i.function_(
                        false,
                        i.group($.dictionary.map(($, key) => i.change_context(
                            s.call(
                                s.from_variable_import(" i generic", "get entry", []),
                                s.from_context([]),
                                _pt.dictionary_literal({
                                    "key": i.string(key, 'quote'),
                                }),
                                [],
                            ),
                            Type_Node(
                                $.node,
                                {
                                    'temp type': $p['temp type'],
                                    'temp subselection': $p['temp subselection'].append_element(sub.group(key)),
                                    'constrained': $p.constrained
                                }
                            )
                        )))
                    ),
                })
            ))
            case 'list': return _pt.ss($, ($) => i.call(
                s.from_variable_import(" i generic", $p.constrained ? "process unresolved list" : "process unconstrained list", []),
                i.select_from_context([]),
                _pt.dictionary_literal({
                    "value": i.function_(
                        false,
                        Type_Node(
                            $.node,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': $p['temp subselection'].append_element(sub.list()),
                                'constrained': $p.constrained
                            }
                        ),
                    ),
                })
            ))
            case 'optional': return _pt.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process optional", []),
                i.select_from_context([]),
                _pt.dictionary_literal({
                    "value": i.function_(
                        false,
                        Type_Node(
                            $,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': $p['temp subselection'].append_element(sub.optional()),
                                'constrained': $p.constrained
                            }
                        ),
                    ),
                })
            ))
            case 'state group': return _pt.ss($, ($) => i.call(
                s.from_variable_import(" i generic", $p.constrained ? "process unresolved state group" : "process unconstrained state group", []),
                i.select_from_context([]),
                _pt.dictionary_literal({
                    "states": i.dictionary_literal($.map(($, key) => i.function_(
                        false,
                        i.case_(
                            key,
                            Type_Node(
                                $.node,
                                {
                                    'temp type': $p['temp type'],
                                    'temp subselection': $p['temp subselection'].append_element(sub.state_group(key)),
                                    'constrained': $p.constrained
                                }
                            )
                        ),
                        t.component_imported("out", $p['temp type'], {}, $p['temp subselection'].append_element(sub.group("SG")))
                    )))
                })
            ))
            // case 'type parameter': return _pt.ss($, ($) => i.call(
            //     s.from_variable_import(" i generic", "process type parameter", []),
            //     i.select_from_context([]),
            //     _pt.dictionary_literal({
            //     })
            // ))
            default: return _pt.au($[0])
        }
    })
}
