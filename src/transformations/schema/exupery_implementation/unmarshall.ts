import * as _edata from 'exupery-core-data'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import * as _edev from 'exupery-core-dev'

import * as _in from "../../../generated/interface/schemas/schema/data_types/source"
import * as _out from "exupery/dist/generated/interface/schemas/implementation/data_types/target"
import * as _out_interface from "exupery/dist/generated/interface/schemas/interface/data_types/target"

import { m, variable, i, s } from "exupery/dist/shorthands/implementation"
import { t, import_, sub } from "exupery/dist/shorthands/interface"


import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/pure/dictionary/flatten"
import { $$ as op_flatten_list } from "pareto-standard-operations/dist/pure/list/flatten"
import { $$ as op_append_element } from "pareto-standard-operations/dist/pure/list/append_element"

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
                    "generic": import_.ancestor(2, "generic", ["unmarshall"], {}),
                    "signatures": import_.ancestor(3, "interface", op_flatten_list(_ea.array_literal([
                        _ea.array_literal(["schemas"]),
                        $p.path,
                        _ea.array_literal(["unmarshall"]),
                    ])), {}),
                    "in": import_.ancestor(3, "interface", ["core", "astn source"], {}),
                    "out": import_.ancestor(3, "interface", op_flatten_list(_ea.array_literal([
                        _ea.array_literal(["schemas"]),
                        $p.path,
                        _ea.array_literal(["data types", "target"]),
                    ])), $p.constrained ? { "Source": t.component_imported("in", "Range", {}, []) } : {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["unmarshall"], {}))
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
                        'temp type': key,
                        'temp subselection': _ea.array_literal([]),
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
        'temp subselection': _et.Array<_out_interface.Type.SG.component.sub_selection.L<_edata.Source_Location>> //can be removed when exupery has type inference
        'constrained': boolean
    },
): _out.Initialization<_edata.Source_Location> => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'number': return _ea.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process number", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
                    "deserializer": i.select_from_parameter("value deserializers", _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'global': return _ea.ss($, ($) => ["custom numbers", $.key])
                            case 'local': return _ea.ss($, ($) => ["default number"])
                            default: return _ea.au($[0])
                        }
                    })),
                })
            ))
            case 'boolean': return _ea.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process boolean", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
                    "deserializer": i.select_from_parameter("value deserializers", ["boolean"]),
                })
            ))
            case 'nothing': return _ea.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process nothing", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
                })
            ))
            case 'reference': return _ea.ss($, ($) => _ea.cc($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _ea.ss($, ($) => i.call(
                        s.from_variable_import(" i generic", "process derived reference", []),
                        i.select_from_context([]),
                        _ea.dictionary_literal({
                        })
                    ))
                    case 'selected': return _ea.ss($, ($) => i.call(
                        s.from_variable_import(" i generic", _ea.cc($.dependency, ($) => {
                            switch ($[0]) {
                                case 'acyclic': return "process selected reference"
                                case 'cyclic': return "process selected reference"
                                case 'stack': return "process stack reference"
                                default: return _ea.au($[0])
                            }
                        }), []),
                        i.select_from_context([]),
                        _ea.dictionary_literal({
                        })
                    ))
                    default: return _ea.au($[0])
                }
            }))
            case 'text': return _ea.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process text", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
                })
            ))
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
                    "value deserializers": i.select_from_parameter("value deserializers", []),
                }),
            ))
            case 'dictionary': return _ea.ss($, ($) => i.call(
                s.from_variable_import(" i generic", $p.constrained ? "process unresolved dictionary" : "process unconstrained dictionary", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
                    "value": i.function_(
                        false,
                        Type_Node(
                            $.node,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': op_append_element(
                                    $p['temp subselection'],
                                    {
                                        'element': sub.dictionary(),
                                    },
                                ),
                                'constrained': $p.constrained
                            }
                        ),
                    ),
                })
            ))
            case 'identifier value pair': return _ea.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process identifier value pair", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
                })
            ))
            case 'group': return _ea.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process group", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
                    "properties": i.function_(
                        false,
                        i.group($.map(($, key) => i.change_context(
                            s.call(
                                s.from_variable_import(" i generic", "get entry", []),
                                s.from_context([]),
                                _ea.dictionary_literal({
                                    "key": i.string(key, 'quote'),
                                }),
                                [],
                            ),
                            Type_Node(
                                $,
                                {
                                    'temp type': $p['temp type'],
                                    'temp subselection': op_append_element(
                                        $p['temp subselection'],
                                        {
                                            'element': sub.group(key),
                                        },
                                    ),
                                    'constrained': $p.constrained
                                }
                            )
                        )))
                    ),
                })
            ))
            case 'list': return _ea.ss($, ($) => i.call(
                s.from_variable_import(" i generic", $p.constrained ? "process unresolved list" : "process unconstrained list", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
                    "value": i.function_(
                        false,
                        Type_Node(
                            $.node,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': op_append_element(
                                    $p['temp subselection'],
                                    {
                                        'element': sub.list(),
                                    },
                                ),
                                'constrained': $p.constrained
                            }
                        ),
                    ),
                })
            ))
            case 'optional': return _ea.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process optional", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
                    "value": i.function_(
                        false,
                        Type_Node(
                            $,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': op_append_element(
                                    $p['temp subselection'],
                                    {
                                        'element': sub.optional(),
                                    },
                                ),
                                'constrained': $p.constrained
                            }
                        ),
                    ),
                })
            ))
            case 'state group': return _ea.ss($, ($) => i.call(
                s.from_variable_import(" i generic", $p.constrained ? "process unresolved state group" : "process unconstrained state group", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
                    "states": i.dictionary_literal($.map(($, key) => i.function_(
                        false,
                        i.case_(
                            key,
                            Type_Node(
                                $,
                                {
                                    'temp type': $p['temp type'],
                                    'temp subselection': op_append_element(
                                        $p['temp subselection'],
                                        {
                                            'element': sub.state_group(key),
                                        },
                                    ),
                                    'constrained': $p.constrained
                                }
                            )
                        ),
                        t.component_imported("out", $p['temp type'], {}, op_append_element($p['temp subselection'], { 'element': sub.group("SG") }))
                    )))
                })
            ))
            case 'type parameter': return _ea.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process type parameter", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
                })
            ))
            default: return _ea.au($[0])
        }
    })
}
