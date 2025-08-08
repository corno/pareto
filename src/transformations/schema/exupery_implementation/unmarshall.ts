import * as pd from 'exupery-core-data'
import * as pt from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import * as pdev from 'exupery-core-dev'

import * as _in from "../../../generated/interface/schemas/schema/data_types/resolved"
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

export const Schema = (
    $: _in.Schema,
    $p: {
        'key': string,
        'imports': _in.Imports,
        'constrained': boolean
    }
): _out.Module_Set.D<pd.Source_Location> => {
    return m.module(
        op['flatten dictionary'](
            _ea.dictionary_literal({
                "": _ea.dictionary_literal({
                    "generic": import_.ancestor(2, "generic", ["unmarshall"], {}),
                    "signatures": import_.ancestor(3, "interface", ["schemas", $p.key, "unmarshall"], {}),
                    "out": import_.ancestor(3, "interface", ["schemas", $p.key, "data types", $p.constrained ? "unresolved" : "unconstrained"], $p.constrained ? { "Source": t.null_() } : {}),
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
                false,
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
        'temp subselection': pt.Array<_out_interface.Type.SG.component.sub_selection.L<pd.Source_Location>> //can be removed when exupery has type inference
        'constrained': boolean
    },
): _out.Initialization<pd.Source_Location> => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'number': return _ea.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process number", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
                })
            ))
            case 'boolean': return _ea.ss($, ($) => i.call(
                s.from_variable_import(" i generic", "process boolean", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
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
                _ea.dictionary_literal({}),
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
                                'temp subselection': op['append element'](
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
                                    'temp subselection': op['append element'](
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
                                'temp subselection': op['append element'](
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
                                'temp subselection': op['append element'](
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
                s.from_variable_import(" i generic", "process state group", []),
                i.select_from_context([]),
                _ea.dictionary_literal({
                    "states": i.dictionary_literal($.map(($, key) => i.function_(
                        false,
                        i.call(
                            s.from_variable_import(" i generic", $p.constrained ? "wrap unresolved state group" : "wrap unconstrained state group", []),
                            i.case_(
                                key,
                                Type_Node(
                                    $,
                                    {
                                        'temp type': $p['temp type'],
                                        'temp subselection': op['append element'](
                                            $p['temp subselection'],
                                            {
                                                'element': sub.state_group(key),
                                            },
                                        ),
                                        'constrained': $p.constrained
                                    }
                                )
                            ),
                            _ea.dictionary_literal({
                            })
                        ),
                        t.component_imported("out", $p['temp type'], {}, $p['temp subselection'].__get_raw_copy())
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
