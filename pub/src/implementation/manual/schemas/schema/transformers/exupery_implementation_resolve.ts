import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"
import * as d_out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, variable, i, s, temp_ordered_variable } from "exupery/dist/shorthands/implementation"
import { t, import_, sub as sub } from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"

const op_pad_dictionary_identifiers = <T>(
    $: _pi.Dictionary<T>,
    $p: {
        'prefix': string,
        'suffix': string
    }
): _pi.Dictionary<T> => _p.dictionary.from_list(
    _p.list.from_dictionary($, ($, key) => ({ 'key': key, value: $ })),
    ($) => $p.prefix + $.key + $p.suffix,
    ($) => $.value,
    () => _p.unreachable_code_path() // no possibility of duplicate keys
)

export const Resolvers = (
    $: d_in.Resolvers,
    $p: {
        'path': _pi.List<string>,
        'imports': d_in.Imports
    }
): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return m.module(
        'refiner',
        op_flatten_dictionary(
            _p.dictionary.literal({
                "": _p.dictionary.literal({
                    "generic": import_.external("pareto-core-internals", ["dist", "algorithm types", "refiner", "resolve"], {}),
                    "out": import_.ancestor(5, "interface", _p.list.nested_literal([
                        _p.list.literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _p.list.literal(["data types", "source"]),
                    ]), {}),
                    "signatures": import_.ancestor(5, "interface", _p.list.nested_literal([
                        _p.list.literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _p.list.literal(["data types", "resolve"]),
                    ]), {}),
                }),
                "r ": $p.imports.__d_map(($, key) => import_.ancestor(1, $['schema set child'].key, ["resolve"], {}))
            }),
            {
                'separator': "",
            },
            () => _p.unreachable_code_path(),
        ),
        {},
        op_pad_dictionary_identifiers(
            $.dictionary.__d_map(($, key) => variable(
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
                                'temp subselection': _p.list.literal([])
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
    $: d_in.Possible_Value_Selection,
    $p: {
        'tail': () => _pi.List<d_out.Selection.tail.L<_pi.Deprecated_Source_Location>>
    },
): d_out.Selection<_pi.Deprecated_Source_Location> => {
    return _p.sg($, ($) => {
        switch ($[0]) {
            case 'parameter': return _p.ss($, ($) => s.from_variable(
                "params",
                _p.list.nested_literal([
                    [
                        "values",
                        $.key
                    ],
                    $p.tail(),
                ]),
            ))
            case 'result': return _p.ss($, ($) => _p.sg($, ($) => {
                switch ($[0]) {
                    case 'state group': return _p.ss($, ($) => s.implement_me()) //quite some work
                    case 'optional value': return _p.ss($, ($) => s.implement_me()) //quite some work

                    default: return _p.au($[0])
                }
            }))

            default: return _p.au($[0])
        }
    })
}


export const Optional_Value_Initialization = (
    $: d_in.Optional_Value_Initialization,
    $p: null,
): d_out.Initialization<_pi.Deprecated_Source_Location> => _p.sg($, ($) => {
    switch ($[0]) {
        case 'not set': return _p.ss($, ($) => i.not_set())
        case 'selection': return _p.ss($, ($) => i.select(Possible_Value_Selection($, { 'tail': () => _p.list.literal([]) })))
        case 'set': return _p.ss($, ($) => i.set(i.select(Guaranteed_Value_Selection($, { 'tail': () => _p.list.literal([]) }))))
        default: return _p.au($[0])
    }
})

export const Guaranteed_Value_Selection = (
    $: d_in.Guaranteed_Value_Selection,
    $p: {
        'tail': () => _pi.List<d_out.Selection.tail.L<_pi.Deprecated_Source_Location>>
    },
): d_out.Selection<_pi.Deprecated_Source_Location> => {
    const tail = (): _pi.List<d_out.Selection.tail.L<_pi.Deprecated_Source_Location>> => _p.list.nested_literal([
        _p.list.flatten(
            $.tail.path,
            ($) => _p.sg($, ($): _pi.List<d_out.Selection.tail.L<_pi.Deprecated_Source_Location>> => {
                switch ($[0]) {
                    case 'component': return _p.ss($, ($) => _p.list.literal([]))
                    case 'group': return _p.ss($, ($) => _p.list.literal([$.key]))
                    case 'reference': return _p.ss($, ($) => _p.sg($.definition.type, ($) => {
                        switch ($[0]) {
                            case 'derived': return _p.ss($, ($) => _p.list.literal([]))
                            case 'selected': return _p.ss($, ($) => _p.list.literal(["entry"]))
                            default: return _p.au($[0])
                        }
                    }))
                    default: return _p.au($[0])
                }
            })
        ),
        $p.tail()
    ])
    return _p.sg($.start, ($) => {
        switch ($[0]) {
            case 'constraint': return _p.ss($, ($) => _p.sg($, ($) => {
                switch ($[0]) {

                    case 'component': return _p.ss($, ($) => s.implement_me()) //simple
                    case 'reference': return _p.ss($, ($) => s.implement_me()) //simple
                    default: return _p.au($[0])
                }
            }))
            case 'parameter': return _p.ss($, ($) => s.from_variable(
                "params",
                _p.list.nested_literal([
                    [
                        "values",
                        $.key
                    ],
                    tail(),
                ]),
            ))
            case 'result': return _p.ss($, ($) => _p.sg($, ($) => {
                switch ($[0]) {
                    case 'state group': return _p.ss($, ($) => s.implement_me())  // quite some work
                    case 'optional value': return _p.ss($, ($) => s.implement_me()) // quite some work
                    case 'list': return _p.ss($, ($) => s.implement_me()) // quite some work

                    default: return _p.au($[0])
                }
            }))
            case 'list cursor': return _p.ss($, ($) => s.from_variable(
                "list cursor",
                tail(),
            ))
            case 'linked entry': return _p.ss($, ($) => s.from_variable(
                "linked entry",
                tail(),
            ))
            case 'option constraint': return _p.ss($, ($) => s.from_variable(
                `c ${$.key}`,//FIXME: do the upsteps
                tail(),
            ))
            case 'sibling': return _p.ss($, ($) => s.from_variable(
                `p ${$.key}`,
                tail(),
            ))
            case 'parent sibling': return _p.ss($, ($) => s.from_variable(
                `p ${$.key}`,//FIXME: do the upstep
                tail(),
            ))
            default: return _p.au($[0])
        }
    })
}

export const Lookup_Selection = (
    $: d_in.Lookup_Selection,
    $p: {

    },
): d_out.Selection<_pi.Deprecated_Source_Location> => _p.sg($.type, ($) => {
    switch ($[0]) {
        case 'dictionary': return _p.ss($, ($) => s.call(
            s.from_variable_import(" i generic", "dictionary to lookup", []),
            Guaranteed_Value_Selection($.selection, {
                'tail': () => $['selected dictionary'].ordered
                    ? _p.list.literal(["dictionary"])
                    : _p.list.literal([]),
            }),
            {

            },
            []
        ))
        case 'not circular dependent siblings': return _p.ss($, ($) => s.from_parameter(
            "not circular dependent siblings",
            []
        ))
        case 'parameter': return _p.ss($, ($) => s.from_variable(
            "params",
            ["lookups", $.key],
        ))
        case 'possibly circular dependent siblings': return _p.ss($, ($) => s.from_parameter(
            "possibly circular dependent siblings",
            []
        ))
        default: return _p.au($[0])
    }
})

export const Option_Constraints = (
    $: d_in.Option_Constraints,
    $p: {
        sub: () => d_out.Initialization<_pi.Deprecated_Source_Location>
    },
): d_out.Initialization<_pi.Deprecated_Source_Location> => i.block(
    [],
    op_pad_dictionary_identifiers($, { 'prefix': "c ", 'suffix': "" }).__d_map(($) => variable(null, i.select(_p.sg($, ($) => {
        switch ($[0]) {
            case 'state': return _p.ss($, ($) => s.implement_me()) // medium work
            case 'assert is set': return _p.ss($, ($) => s.optional_transform(
                Possible_Value_Selection($, { 'tail': () => _p.list.literal([]) }),
                s.from_context([]),
                s.abort(),
                []
            ))
            default: return _p.au($[0])
        }
    })))),
    $p.sub(),
)

export const Node_Resolver = (
    $: d_in.Node_Resolver,
    $p: {
        'temp type': string
        'temp subselection': _pi.List<d_out_interface.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location>> //can be removed when exupery has type inference
    },
): d_out.Initialization<_pi.Deprecated_Source_Location> => _p.sg($, ($) => {
    switch ($[0]) {
        case 'number': return _p.ss($, ($) => i.select_from_context([]))
        case 'boolean': return _p.ss($, ($) => i.select_from_context([]))
        case 'nothing': return _p.ss($, ($) => i.null_())
        case 'reference': return _p.ss($, ($) => i.select(_p.sg($.type, ($): d_out.Selection<_pi.Deprecated_Source_Location> => {
            switch ($[0]) {
                case 'derived': return _p.ss($, ($) => Guaranteed_Value_Selection($.value, { 'tail': () => _p.list.literal([]) }))
                case 'selected': return _p.ss($, ($) => {
                    const context = $
                    return _p.sg($.definition.dependency, ($) => {
                        switch ($[0]) {
                            case 'acyclic': return _p.ss($, ($) => s.call(
                                s.from_variable_import(" i generic", "get entry", []),
                                Lookup_Selection(context.lookup, {}),
                                {
                                    "reference": i.select_from_context([]),
                                    "location 2 string": i.select_from_variable("l2s", []),
                                },
                                []
                            ))
                            case 'cyclic': return _p.ss($, ($) => s.call(
                                s.from_variable_import(" i generic", "get possibly circular dependent sibling entry", []),
                                Lookup_Selection(context.lookup, {}),
                                {
                                    "reference": i.select_from_context([]),
                                    "location 2 string": i.select_from_variable("l2s", []),
                                },
                                []
                            ))
                            case 'stack': return _p.ss($, ($) => s.call(
                                s.from_variable_import(" i generic", "get entry from stack", []),
                                Lookup_Selection(context.lookup, {}),
                                {
                                    "reference": i.select_from_context([]),
                                    "location 2 string": i.select_from_variable("l2s", []),
                                },
                                []
                            ))
                            default: return _p.au($[0])
                        }
                    })
                })
                default: return _p.au($[0])
            }
        })))
        case 'text': return _p.ss($, ($) => i.select_from_context([]))
        case 'component': return _p.ss($, ($) => i.call(
            _p.sg($.location, ($) => {
                switch ($[0]) {
                    case 'external': return _p.ss($, ($) => s.from_variable_import(` i r ${$.import.key}`, `r ${$.type.key}`, []))
                    case 'internal': return _p.ss($, ($) => s.from_variable(`r ${$.key}`, []))
                    default: return _p.au($[0])
                }
            }),
            i.select_from_context([]),
            {
                "location 2 string": i.select_from_variable("l2s", []),
                "parameters": $.arguments.__decide(
                    ($) => i.group({
                        "values": $.values.__decide(
                            ($) => i.group($.__d_map(($) => _p.sg($, ($) => {
                                switch ($[0]) {
                                    case 'optional': return _p.ss($, ($) => Optional_Value_Initialization($, null))
                                    case 'parameter': return _p.ss($, ($) => i.select_from_variable(
                                        "params",
                                        ["values", $.key],
                                    ))
                                    case 'required': return _p.ss($, ($) => i.select(Guaranteed_Value_Selection($, { 'tail': () => _p.list.literal([]) })))

                                    default: return _p.au($[0])
                                }
                            }))),
                            () => i.select_from_variable("params", ["values"]),
                        ),
                        "lookups": $.lookups.__decide(
                            ($) => i.group($.__d_map(($) => _p.sg($, ($) => {
                                switch ($[0]) {
                                    case 'empty stack': return _p.ss($, ($) => i.list_literal([]))
                                    case 'not set': return _p.ss($, ($) => i.not_set())
                                    case 'selection': return _p.ss($, ($) => i.select(Lookup_Selection($, {})))
                                    case 'stack': return _p.ss($, ($) => i.implement_me()) // quite some work
                                    default: return _p.au($[0])
                                }
                            }))),
                            () => i.select_from_variable("params", ["lookups"]),
                        ),
                    }),
                    () => i.select_from_variable("params", [])
                )
            },
        ))
        case 'dictionary': return _p.ss($, ($) => i.block(
            [],
            $.benchmark.__decide(
                ($) => _p.dictionary.literal({
                    // "linked entry": e.call(
                    //     s.from_context([]), //Value_Selection($.selection, { 'tail': pa.list.literal([]) }),
                    //     e.string("FIXME", 'backtick'),
                    // ),
                    "benchmark": variable(null, i.select(Guaranteed_Value_Selection($.selection, { 'tail': () => _p.list.literal([]) }))),
                }),
                () => _p.dictionary.literal({})
            ),
            i.call(
                s.from_variable_import(" i generic", $.definition.ordered ? "resolve ordered dictionary" : "resolve dictionary", []),
                i.select_from_context([]),
                {
                    //"denseness benchmark": e.not_set(),
                    "map": i.function_(true, i.block(
                        [],
                        $.benchmark.__decide(
                            ($) => _p.dictionary.literal({
                                // "linked entry": e.call(
                                //     s.from_context([]), //Value_Selection($.selection, { 'tail': pa.list.literal([]) }),
                                //     e.string("FIXME", 'backtick'),
                                // ),
                                "linked entry": variable(null, i.implement_me()), // quite some work; a call to get_entry() from the selection (Guaranteed_Value_Selection), and then transform an optional value
                            }),
                            () => _p.dictionary.literal({})
                        ),
                        i.change_context(
                            s.from_context(["value"]),
                            Node_Resolver(
                                $.resolver,
                                {
                                    'temp type': $p['temp type'],
                                    'temp subselection': _p.list.nested_literal([
                                        $p['temp subselection'],
                                        [
                                            sub.dictionary()
                                        ]
                                    ]),
                                }
                            )
                        )
                    )




                    ),
                    "location 2 string": i.select_from_variable("l2s", []),

                }
            )
        ))
        case 'group': return _p.ss($, ($) => i.block(
            $['ordered list'].__l_map(($) => temp_ordered_variable(
                `p ${$.key}`,
                t.component_imported(
                    "out",
                    $p['temp type'],
                    {},
                    _p.list.nested_literal([
                        $p['temp subselection'],
                        [
                            sub.group($.key)
                        ]
                    ]),
                ),
                i.change_context(
                    s.from_context([$.key]),
                    Node_Resolver(
                        $.value.resolver,
                        {
                            'temp type': $p['temp type'],
                            'temp subselection': _p.list.nested_literal([
                                $p['temp subselection'],
                                [
                                    sub.group($.key)
                                ]
                            ]),
                        }
                    )
                )
            )),
            {},
            i.group($.dictionary.__d_map(($, key) => i.select_from_variable(`p ${key}`, [])))
        ))
        case 'list': return _p.ss($, ($) => i.array_map(
            s.from_context(["list"]),
            i.change_context(
                s.from_context(["element"]),
                Node_Resolver(
                    $.resolver,
                    {
                        'temp type': $p['temp type'],
                        'temp subselection': _p.list.nested_literal([
                            $p['temp subselection'],
                            [
                                sub.list()
                            ]
                        ]),
                    }
                )
            )
        ))
        case 'optional': return _p.ss($, ($) => i.optional_map(
            s.from_context([]),
            Option_Constraints(
                $.constraints,
                {
                    'sub': () => Node_Resolver(
                        $['resolver'],
                        {
                            'temp type': $p['temp type'],
                            'temp subselection': _p.list.nested_literal([
                                $p['temp subselection'],
                                [
                                    sub.optional()
                                ]
                            ]),
                        }
                    )
                }
            )
        ))
        case 'state group': return _p.ss($, ($) => i.switch_(
            s.from_context(['state group']),
            $.states.__d_map(($, key) => i.case_(key, Option_Constraints(
                $.constraints,
                {
                    'sub': () => Node_Resolver(
                        $['resolver'],
                        {
                            'temp type': $p['temp type'],
                            'temp subselection': _p.list.nested_literal([
                                $p['temp subselection'],
                                [
                                    sub.state_group(key)
                                ]
                            ]),
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
        // case 'type parameter': return _p.ss($, ($) => _pdev.implement_me()) // a lot of work: the resolvers need to be passed to this resolve function
        default: return _p.au($[0])
    }
})