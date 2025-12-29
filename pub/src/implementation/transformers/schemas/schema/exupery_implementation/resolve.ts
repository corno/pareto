import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"
import * as _out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, variable, i, s, temp_ordered_variable } from "exupery/dist/shorthands/implementation"
import { t, import_, sub as sub } from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"

import { $$ as op_pad_dictionary_identifiers } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/pad_identifiers"


export const Resolvers = (
    $: _in.Resolvers,
    $p: {
        'path': _pi.List<string>,
        'imports': _in.Imports
    }
): _out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return m.module(
        op_flatten_dictionary(
            _pt.dictionary_literal({
                "": _pt.dictionary_literal({
                    "generic": import_.ancestor(2, "generic", ["resolve"], {}),
                    "out": import_.ancestor(5, "interface", _pt.list_literal([
                        _pt.list_literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _pt.list_literal(["data types", "source"]),
                    ]).flatten(($) => $), {}),
                    "signatures": import_.ancestor(5, "interface", _pt.list_literal([
                        _pt.list_literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _pt.list_literal(["data types", "resolve"]),
                    ]).flatten(($) => $), {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["resolve"], {}))
            }),
            {
                'separator': "",
            },
                        () => _pt.unreachable_code_path(),
        ),
        {},
        op_pad_dictionary_identifiers(
            $.dictionary.map(($, key) => variable(
                t.component_imported("signatures", key, {
                    // "Source": t.component_imported("generic", "Location Info", {}, []),
                }, []),
                i.function_(
                    true,
                    i.block(
                        [],
                        {
                            "l2s": variable(
                                null,
                                i.select_from_parameter("location 2 string", [])
                            ),
                            "params": variable(
                                null,
                                i.select_from_parameter("parameters", [])
                            )
                        },
                        Node_Resolver(
                            $['type resolver'],
                            {
                                'temp type': key,
                                'temp subselection': _pt.list_literal([])
                            }
                        )
                    ),
                ),

            )),
            {
                'prefix': "r ",
                'suffix': "",
            }
        )
    )
}



export const Possible_Value_Selection = (
    $: _in.Possible_Value_Selection,
    $p: {
        'tail': () => _pi.List<_out.Selection.tail.L<_pi.Deprecated_Source_Location>>
    },
): _out.Selection<_pi.Deprecated_Source_Location> => {
    return _pt.cc($, ($) => {
        switch ($[0]) {
            case 'parameter': return _pt.ss($, ($) => s.from_variable(
                "params",
                _pt.list_literal([
                    _pt.list_literal(["values", $.key]),
                    $p.tail(),
                ]).flatten(($) => $),
            ))
            case 'result': return _pt.ss($, ($) => _pt.cc($, ($) => {
                switch ($[0]) {
                    case 'state group': return _pt.ss($, ($) => s.implement_me()) //quite some work
                    case 'optional value': return _pt.ss($, ($) => s.implement_me()) //quite some work

                    default: return _pt.au($[0])
                }
            }))

            default: return _pt.au($[0])
        }
    })
}


export const Optional_Value_Initialization = (
    $: _in.Optional_Value_Initialization,
    $p: null,
): _out.Initialization<_pi.Deprecated_Source_Location> => {
    return _pt.cc($, ($) => {
        switch ($[0]) {
            case 'not set': return _pt.ss($, ($) => i.not_set())
            case 'selection': return _pt.ss($, ($) => i.select(Possible_Value_Selection($, { 'tail': () => _pt.list_literal([]) })))
            case 'set': return _pt.ss($, ($) => i.set(i.select(Guaranteed_Value_Selection($, { 'tail': () => _pt.list_literal([]) }))))
            default: return _pt.au($[0])
        }
    })
}

export const Guaranteed_Value_Selection = (
    $: _in.Guaranteed_Value_Selection,
    $p: {
        'tail': () => _pi.List<_out.Selection.tail.L<_pi.Deprecated_Source_Location>>
    },
): _out.Selection<_pi.Deprecated_Source_Location> => {
    const tail = (): _pi.List<_out.Selection.tail.L<_pi.Deprecated_Source_Location>> => {
        return _pt.list_literal([
            $.tail.path.map(($) => {
                return _pt.cc($, ($): _pi.List<_out.Selection.tail.L<_pi.Deprecated_Source_Location>> => {
                    switch ($[0]) {
                        case 'component': return _pt.ss($, ($) => _pt.list_literal([]))
                        case 'group': return _pt.ss($, ($) => _pt.list_literal([$.key]))
                        case 'reference': return _pt.ss($, ($) => _pt.cc($.definition.type, ($) => {
                            switch ($[0]) {
                                case 'derived': return _pt.ss($, ($) => _pt.list_literal([]))
                                case 'selected': return _pt.ss($, ($) => _pt.list_literal(["entry"]))
                                default: return _pt.au($[0])
                            }
                        }))
                        default: return _pt.au($[0])
                    }
                })
            }).flatten(($) => $),
            $p.tail()
        ]).flatten(($) => $)
    }
    return _pt.cc($.start, ($) => {
        switch ($[0]) {
            case 'constraint': return _pt.ss($, ($) => _pt.cc($, ($) => {
                switch ($[0]) {

                    case 'component': return _pt.ss($, ($) => s.implement_me()) //simple
                    case 'reference': return _pt.ss($, ($) => s.implement_me()) //simple
                    default: return _pt.au($[0])
                }
            }))
            case 'parameter': return _pt.ss($, ($) => s.from_variable(
                "params",
                _pt.list_literal([
                    _pt.list_literal(["values", $.key]),
                    tail(),
                ]).flatten(($) => $),
            ))
            case 'result': return _pt.ss($, ($) => _pt.cc($, ($) => {
                switch ($[0]) {
                    case 'state group': return _pt.ss($, ($) => s.implement_me())  // quite some work
                    case 'optional value': return _pt.ss($, ($) => s.implement_me()) // quite some work
                    case 'list': return _pt.ss($, ($) => s.implement_me()) // quite some work

                    default: return _pt.au($[0])
                }
            }))
            case 'list cursor': return _pt.ss($, ($) => s.from_variable(
                "list cursor",
                tail(),
            ))
            case 'linked entry': return _pt.ss($, ($) => s.from_variable(
                "linked entry",
                tail(),
            ))
            case 'option constraint': return _pt.ss($, ($) => s.from_variable(
                `c ${$.key}`,//FIXME: do the upsteps
                tail(),
            ))
            case 'sibling': return _pt.ss($, ($) => s.from_variable(
                `p ${$.key}`,
                tail(),
            ))
            case 'parent sibling': return _pt.ss($, ($) => s.from_variable(
                `p ${$.key}`,//FIXME: do the upstep
                tail(),
            ))
            default: return _pt.au($[0])
        }
    })
}

export const Lookup_Selection = (
    $: _in.Lookup_Selection,
    $p: {

    },
): _out.Selection<_pi.Deprecated_Source_Location> => {
    return _pt.cc($.type, ($) => {
        switch ($[0]) {
            case 'dictionary': return _pt.ss($, ($) => s.call(
                s.from_variable_import(" i generic", "dictionary to lookup", []),
                Guaranteed_Value_Selection($.selection, {
                    'tail': () => $['selected dictionary'].ordered
                        ? _pt.list_literal(["dictionary"])
                        : _pt.list_literal([]),
                }),
                {

                },
                []
            ))

            case 'not circular dependent siblings': return _pt.ss($, ($) => s.from_parameter(
                "not circular dependent siblings",
                []
            ))
            case 'parameter': return _pt.ss($, ($) => s.from_variable(
                "params",
                ["lookups", $.key],
            ))
            case 'possibly circular dependent siblings': return _pt.ss($, ($) => s.from_parameter(
                "possibly circular dependent siblings",
                []
            ))
            default: return _pt.au($[0])
        }
    })
}

export const Option_Constraints = (
    $: _in.Option_Constraints,
    $p: {
        sub: () => _out.Initialization<_pi.Deprecated_Source_Location>
    },
): _out.Initialization<_pi.Deprecated_Source_Location> => {
    return i.block(
        [],
        op_pad_dictionary_identifiers($, { 'prefix': "c ", 'suffix': "" }).map(($) => variable(null, i.select(_pt.cc($, ($) => {
            switch ($[0]) {
                case 'state': return _pt.ss($, ($) => s.implement_me()) // medium work
                case 'assert is set': return _pt.ss($, ($) => s.optional_transform(
                    Possible_Value_Selection($, { 'tail': () => _pt.list_literal([]) }),
                    s.from_context([]),
                    s.abort(),
                    []
                ))
                default: return _pt.au($[0])
            }
        })))),
        $p.sub(),
    )
}

export const Node_Resolver = (
    $: _in.Node_Resolver,
    $p: {
        'temp type': string
        'temp subselection': _pi.List<_out_interface.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location>> //can be removed when exupery has type inference
    },
): _out.Initialization<_pi.Deprecated_Source_Location> => {
    return _pt.cc($, ($) => {
        switch ($[0]) {
            case 'number': return _pt.ss($, ($) => i.select_from_context([]))
            case 'boolean': return _pt.ss($, ($) => i.select_from_context([]))
            case 'nothing': return _pt.ss($, ($) => i.null_())
            case 'reference': return _pt.ss($, ($) => {
                return i.select(_pt.cc($.type, ($): _out.Selection<_pi.Deprecated_Source_Location> => {
                    switch ($[0]) {
                        case 'derived': return _pt.ss($, ($) => Guaranteed_Value_Selection($.value, { 'tail': () => _pt.list_literal([]) }))
                        case 'selected': return _pt.ss($, ($) => {
                            const context = $
                            return _pt.cc($.definition.dependency, ($) => {
                                switch ($[0]) {
                                    case 'acyclic': return _pt.ss($, ($) => s.call(
                                        s.from_variable_import(" i generic", "get entry", []),
                                        Lookup_Selection(context.lookup, {}),
                                        {
                                            "reference": i.select_from_context([]),
                                            "location 2 string": i.select_from_variable("l2s", []),
                                        },
                                        []
                                    ))
                                    case 'cyclic': return _pt.ss($, ($) => s.call(
                                        s.from_variable_import(" i generic", "get possibly circular dependent sibling entry", []),
                                        Lookup_Selection(context.lookup, {}),
                                        {
                                            "reference": i.select_from_context([]),
                                            "location 2 string": i.select_from_variable("l2s", []),
                                        },
                                        []
                                    ))
                                    case 'stack': return _pt.ss($, ($) => s.call(
                                        s.from_variable_import(" i generic", "get entry from stack", []),
                                        Lookup_Selection(context.lookup, {}),
                                        {
                                            "reference": i.select_from_context([]),
                                            "location 2 string": i.select_from_variable("l2s", []),
                                        },
                                        []
                                    ))
                                    default: return _pt.au($[0])
                                }
                            })
                        })
                        default: return _pt.au($[0])
                    }
                }))
            })
            case 'text': return _pt.ss($, ($) => i.select_from_context([]))
            case 'component': return _pt.ss($, ($) => i.call(
                _pt.cc($.location, ($) => {
                    switch ($[0]) {
                        case 'external': return _pt.ss($, ($) => s.from_variable_import(` i r ${$.import.key}`, `r ${$.type.key}`, []))
                        case 'internal': return _pt.ss($, ($) => s.from_variable(`r ${$.key}`, []))
                        default: return _pt.au($[0])
                    }
                }),
                i.select_from_context([]),
                {
                    "location 2 string": i.select_from_variable("l2s", []),
                    "parameters": $.arguments.transform(
                        ($) => i.group({
                            "values": $.values.transform(
                                ($) => i.group($.map(($) => _pt.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'optional': return _pt.ss($, ($) => Optional_Value_Initialization($, null))
                                        case 'parameter': return _pt.ss($, ($) => i.select_from_variable(
                                            "params",
                                            ["values", $.key],
                                        ))
                                        case 'required': return _pt.ss($, ($) => i.select(Guaranteed_Value_Selection($, { 'tail': () => _pt.list_literal([]) })))

                                        default: return _pt.au($[0])
                                    }
                                }))),
                                () => i.select_from_variable("params", ["values"]),
                            ),
                            "lookups": $.lookups.transform(
                                ($) => i.group($.map(($) => _pt.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'empty stack': return _pt.ss($, ($) => i.list_literal([]))
                                        case 'not set': return _pt.ss($, ($) => i.not_set())
                                        case 'selection': return _pt.ss($, ($) => i.select(Lookup_Selection($, {})))
                                        case 'stack': return _pt.ss($, ($) => i.implement_me()) // quite some work
                                        default: return _pt.au($[0])
                                    }
                                }))),
                                () => i.select_from_variable("params", ["lookups"]),
                            ),
                        }),
                        () => i.select_from_variable("params", [])
                    )
                },
            ))
            case 'dictionary': return _pt.ss($, ($) => i.block(
                [],
                $.benchmark.transform(
                    ($) => _pt.dictionary_literal({
                        // "linked entry": e.call(
                        //     s.from_context([]), //Value_Selection($.selection, { 'tail': pa.list_literal([]) }),
                        //     e.string("FIXME", 'backtick'),
                        // ),
                        "benchmark": variable(null, i.select(Guaranteed_Value_Selection($.selection, { 'tail': () => _pt.list_literal([]) }))),
                    }),
                    () => _pt.dictionary_literal({})
                ),
                i.call(
                    s.from_variable_import(" i generic", $.definition.ordered ? "resolve ordered dictionary" : "resolve dictionary", []),
                    i.select_from_context([]),
                    {
                        //"denseness benchmark": e.not_set(),
                        "map": i.function_(true, i.block(
                            [],
                            $.benchmark.transform(
                                ($) => _pt.dictionary_literal({
                                    // "linked entry": e.call(
                                    //     s.from_context([]), //Value_Selection($.selection, { 'tail': pa.list_literal([]) }),
                                    //     e.string("FIXME", 'backtick'),
                                    // ),
                                    "linked entry": variable(null, i.implement_me()), // quite some work; a call to get_entry() from the selection (Guaranteed_Value_Selection), and then transform an optional value
                                }),
                                () => _pt.dictionary_literal({})
                            ),
                            i.change_context(
                                s.from_context(["value"]),
                                Node_Resolver(
                                    $.resolver,
                                    {
                                        'temp type': $p['temp type'],
                                        'temp subselection': $p['temp subselection'].append_element(sub.dictionary()),
                                    }
                                )
                            )
                        )




                        ),
                        "location 2 string": i.select_from_variable("l2s", []),

                    }
                )
            ))
            case 'group': return _pt.ss($, ($) => i.block(
                $['ordered list'].map(($) => temp_ordered_variable(
                    `p ${$.key}`,
                    t.component_imported(
                        "out",
                        $p['temp type'],
                        {},
                        $p['temp subselection'].append_element(sub.group($.key)),
                    ),
                    i.change_context(
                        s.from_context([$.key]),
                        Node_Resolver(
                            $.value.resolver,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': $p['temp subselection'].append_element(sub.group($.key)),
                            }
                        )
                    )
                )),
                {},
                i.group($.dictionary.map(($, key) => i.select_from_variable(`p ${key}`, [])))
            ))
            case 'list': return _pt.ss($, ($) => {
                return i.array_map(
                    s.from_context(["list"]),
                    i.change_context(
                        s.from_context(["element"]),
                        Node_Resolver(
                            $.resolver,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': $p['temp subselection'].append_element(sub.list()),
                            }
                        )
                    )
                )
            })
            case 'optional': return _pt.ss($, ($) => i.optional_map(
                s.from_context([]),
                Option_Constraints(
                    $.constraints,
                    {
                        'sub': () => Node_Resolver(
                            $['resolver'],
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': $p['temp subselection'].append_element(sub.optional()),
                            }
                        )
                    }
                )
            ))
            case 'state group': return _pt.ss($, ($) => i.switch_(
                s.from_context(['state group']),
                $.states.map(($, key) => i.case_(key, Option_Constraints(
                    $.constraints,
                    {
                        'sub': () => Node_Resolver(
                            $['resolver'],
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': $p['temp subselection'].append_element(sub.state_group(key)),
                            }
                        )
                    }
                ))),
                t.component_imported(
                    "out",
                    $p['temp type'],
                    {},
                    $p['temp subselection'],
                ),
            ))
            // case 'type parameter': return _pt.ss($, ($) => _pdev.implement_me()) // a lot of work: the resolvers need to be passed to this resolve function
            default: return _pt.au($[0])
        }
    })
}