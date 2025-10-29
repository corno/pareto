import * as _edata from 'exupery-core-data'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import * as _edev from 'exupery-core-dev'

import * as _in from "../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"
import * as _out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, variable, i, s, temp_ordered_variable } from "exupery/dist/shorthands/implementation"
import { t, import_, sub as sub } from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_list } from "pareto-standard-operations/dist/implementation/operations/pure/list/flatten"
import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"

import { $$ as op_pad_dictionary_identifiers } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/pad_identifiers"
import { $$ as op_append_element } from "pareto-standard-operations/dist/implementation/operations/pure/list/append_element"
import { Signature } from "../../../../interface/algorithms/transformations/schema/exupery_implementation/resolve"


export const Resolvers = (
    $: _in.Resolvers,
    $p: {
        'path': _et.Array<string>,
        'imports': _in.Imports
    }
): _out.Module_Set.D<_edata.Source_Location> => {
    return m.module(
        op_flatten_dictionary(
            _ea.dictionary_literal({
                "": _ea.dictionary_literal({
                    "generic": import_.ancestor(2, "generic", ["resolve"], {}),
                    "out": import_.ancestor(5, "interface", op_flatten_list(_ea.array_literal([
                        _ea.array_literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _ea.array_literal(["data types", "source"]),
                    ])), {}),
                    "signatures": import_.ancestor(5, "interface", op_flatten_list(_ea.array_literal([
                        _ea.array_literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _ea.array_literal(["data types", "resolve"]),
                    ])), {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["resolve"], {}))
            }),
            {
                'separator': "",
            }
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
                                'temp subselection': _ea.array_literal([])
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
        'tail': () => _et.Array<_out.Selection.tail.L<_edata.Source_Location>>
    },
): _out.Selection<_edata.Source_Location> => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'parameter': return _ea.ss($, ($) => s.from_variable(
                "params",
                op_flatten_list(_ea.array_literal([
                    _ea.array_literal(["values", $.key]),
                    $p.tail(),
                ])),
            ))
            case 'result': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'state group': return _ea.ss($, ($) => s.implement_me()) //quite some work
                    case 'optional value': return _ea.ss($, ($) => s.implement_me()) //quite some work

                    default: return _ea.au($[0])
                }
            }))

            default: return _ea.au($[0])
        }
    })
}


export const Optional_Value_Initialization = (
    $: _in.Optional_Value_Initialization,
    $p: null,
): _out.Initialization<_edata.Source_Location> => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'not set': return _ea.ss($, ($) => i.not_set())
            case 'selection': return _ea.ss($, ($) => i.select(Possible_Value_Selection($, { 'tail': () => _ea.array_literal([]) })))
            case 'set': return _ea.ss($, ($) => i.set(i.select(Guaranteed_Value_Selection($, { 'tail': () => _ea.array_literal([]) }))))
            default: return _ea.au($[0])
        }
    })
}

export const Guaranteed_Value_Selection = (
    $: _in.Guaranteed_Value_Selection,
    $p: {
        'tail': () => _et.Array<_out.Selection.tail.L<_edata.Source_Location>>
    },
): _out.Selection<_edata.Source_Location> => {
    const tail = (): _et.Array<_out.Selection.tail.L<_edata.Source_Location>> => {
        return op_flatten_list(_ea.array_literal([
            op_flatten_list($.tail.path.map(($) => {
                return _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'component': return _ea.ss($, ($) => _ea.array_literal([]))
                        case 'group': return _ea.ss($, ($) => _ea.array_literal([$.key]))
                        case 'reference': return _ea.ss($, ($) => _ea.cc($.definition.type, ($) => {
                            switch ($[0]) {
                                case 'derived': return _ea.ss($, ($) => _ea.array_literal([]))
                                case 'selected': return _ea.ss($, ($) => _ea.array_literal(["entry"]))
                                default: return _ea.au($[0])
                            }
                        }))
                        default: return _ea.au($[0])
                    }
                })
            })),
            $p.tail()
        ]))
    }
    return _ea.cc($.start, ($) => {
        switch ($[0]) {
            case 'constraint': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {

                    case 'component': return _ea.ss($, ($) => s.implement_me()) //simple
                    case 'reference': return _ea.ss($, ($) => s.implement_me()) //simple
                    default: return _ea.au($[0])
                }
            }))
            case 'parameter': return _ea.ss($, ($) => s.from_variable(
                "params",
                op_flatten_list(_ea.array_literal([
                    _ea.array_literal(["values", $.key]),
                    tail(),
                ])),
            ))
            case 'result': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'state group': return _ea.ss($, ($) => s.implement_me())  // quite some work
                    case 'optional value': return _ea.ss($, ($) => s.implement_me()) // quite some work
                    case 'list': return _ea.ss($, ($) => s.implement_me()) // quite some work

                    default: return _ea.au($[0])
                }
            }))
            case 'list cursor': return _ea.ss($, ($) => s.from_variable(
                "list cursor",
                tail(),
            ))
            case 'linked entry': return _ea.ss($, ($) => s.from_variable(
                "linked entry",
                tail(),
            ))
            case 'option constraint': return _ea.ss($, ($) => s.from_variable(
                `c ${$.key}`,//FIXME: do the upsteps
                tail(),
            ))
            case 'sibling': return _ea.ss($, ($) => s.from_variable(
                `p ${$.key}`,
                tail(),
            ))
            case 'parent sibling': return _ea.ss($, ($) => s.from_variable(
                `p ${$.key}`,//FIXME: do the upstep
                tail(),
            ))
            default: return _ea.au($[0])
        }
    })
}

export const Lookup_Selection = (
    $: _in.Lookup_Selection,
    $p: {

    },
): _out.Selection<_edata.Source_Location> => {
    return _ea.cc($.type, ($) => {
        switch ($[0]) {
            case 'dictionary': return _ea.ss($, ($) => s.call(
                s.from_variable_import(" i generic", "dictionary to lookup", []),
                Guaranteed_Value_Selection($.selection, {
                    'tail': () => $['selected dictionary'].ordered
                        ? _ea.array_literal(["dictionary"])
                        : _ea.array_literal([]),
                }),
                {

                },
                []
            ))

            case 'not circular dependent siblings': return _ea.ss($, ($) => s.from_parameter(
                "not circular dependent siblings",
                []
            ))
            case 'parameter': return _ea.ss($, ($) => s.from_variable(
                "params",
                ["lookups", $.key],
            ))
            case 'possibly circular dependent siblings': return _ea.ss($, ($) => s.from_parameter(
                "possibly circular dependent siblings",
                []
            ))
            default: return _ea.au($[0])
        }
    })
}

export const Option_Constraints = (
    $: _in.Option_Constraints,
    $p: {
        sub: () => _out.Initialization<_edata.Source_Location>
    },
): _out.Initialization<_edata.Source_Location> => {
    return i.block(
        [],
        op_pad_dictionary_identifiers($, { 'prefix': "c ", 'suffix': "" }).map(($) => variable(null, i.select(_ea.cc($, ($) => {
            switch ($[0]) {
                case 'state': return _ea.ss($, ($) => s.implement_me()) // medium work
                case 'assert is set': return _ea.ss($, ($) => s.optional_transform(
                    Possible_Value_Selection($, { 'tail': () => _ea.array_literal([]) }),
                    s.from_context([]),
                    s.abort(),
                    []
                ))
                default: return _ea.au($[0])
            }
        })))),
        $p.sub(),
    )
}

export const Node_Resolver = (
    $: _in.Node_Resolver,
    $p: {
        'temp type': string
        'temp subselection': _et.Array<_out_interface.Type.SG.component.sub_selection.L<_edata.Source_Location>> //can be removed when exupery has type inference
    },
): _out.Initialization<_edata.Source_Location> => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'number': return _ea.ss($, ($) => i.select_from_context([]))
            case 'boolean': return _ea.ss($, ($) => i.select_from_context([]))
            case 'nothing': return _ea.ss($, ($) => i.null_())
            case 'reference': return _ea.ss($, ($) => {
                return i.select(_ea.cc($.type, ($): _out.Selection<_edata.Source_Location> => {
                    switch ($[0]) {
                        case 'derived': return _ea.ss($, ($) => Guaranteed_Value_Selection($.value, { 'tail': () => _ea.array_literal([]) }))
                        case 'selected': return _ea.ss($, ($) => {
                            const context = $
                            return _ea.cc($.definition.dependency, ($) => {
                                switch ($[0]) {
                                    case 'acyclic': return _ea.ss($, ($) => s.call(
                                        s.from_variable_import(" i generic", "get entry", []),
                                        Lookup_Selection(context.lookup, {}),
                                        {
                                            "reference": i.select_from_context([]),
                                            "location 2 string": i.select_from_variable("l2s", []),
                                        },
                                        []
                                    ))
                                    case 'cyclic': return _ea.ss($, ($) => s.call(
                                        s.from_variable_import(" i generic", "get possibly circular dependent sibling entry", []),
                                        Lookup_Selection(context.lookup, {}),
                                        {
                                            "reference": i.select_from_context([]),
                                            "location 2 string": i.select_from_variable("l2s", []),
                                        },
                                        []
                                    ))
                                    case 'stack': return _ea.ss($, ($) => s.call(
                                        s.from_variable_import(" i generic", "get entry from stack", []),
                                        Lookup_Selection(context.lookup, {}),
                                        {
                                            "reference": i.select_from_context([]),
                                            "location 2 string": i.select_from_variable("l2s", []),
                                        },
                                        []
                                    ))
                                    default: return _ea.au($[0])
                                }
                            })
                        })
                        default: return _ea.au($[0])
                    }
                }))
            })
            case 'text': return _ea.ss($, ($) => i.select_from_context([]))
            case 'component': return _ea.ss($, ($) => i.call(
                _ea.cc($.location, ($) => {
                    switch ($[0]) {
                        case 'external': return _ea.ss($, ($) => s.from_variable_import(` i r ${$.import.key}`, `r ${$.type.key}`, []))
                        case 'internal': return _ea.ss($, ($) => s.from_variable(`r ${$.key}`, []))
                        default: return _ea.au($[0])
                    }
                }),
                i.select_from_context([]),
                {
                    "location 2 string": i.select_from_variable("l2s", []),
                    "parameters": $.arguments.transform(
                        ($) => i.group({
                            "values": $.values.transform(
                                ($) => i.group($.map(($) => _ea.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'optional': return _ea.ss($, ($) => Optional_Value_Initialization($, null))
                                        case 'parameter': return _ea.ss($, ($) => i.select_from_variable(
                                            "params",
                                            ["values", $.key],
                                        ))
                                        case 'required': return _ea.ss($, ($) => i.select(Guaranteed_Value_Selection($, { 'tail': () => _ea.array_literal([]) })))

                                        default: return _ea.au($[0])
                                    }
                                }))),
                                () => i.select_from_variable("params", ["values"]),
                            ),
                            "lookups": $.lookups.transform(
                                ($) => i.group($.map(($) => _ea.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'empty stack': return _ea.ss($, ($) => i.array_literal([]))
                                        case 'not set': return _ea.ss($, ($) => i.not_set())
                                        case 'selection': return _ea.ss($, ($) => i.select(Lookup_Selection($, {})))
                                        case 'stack': return _ea.ss($, ($) => i.implement_me()) // quite some work
                                        default: return _ea.au($[0])
                                    }
                                }))),
                                () => i.select_from_variable("params", ["lookups"]),
                            ),
                        }),
                        () => i.select_from_variable("params", [])
                    )
                },
            ))
            case 'dictionary': return _ea.ss($, ($) => i.block(
                [],
                $.benchmark.transform(
                    ($) => _ea.dictionary_literal({
                        // "linked entry": e.call(
                        //     s.from_context([]), //Value_Selection($.selection, { 'tail': pa.array_literal([]) }),
                        //     e.string("FIXME", 'backtick'),
                        // ),
                        "benchmark": variable(null, i.select(Guaranteed_Value_Selection($.selection, { 'tail': () => _ea.array_literal([]) }))),
                    }),
                    () => _ea.dictionary_literal({})
                ),
                i.call(
                    s.from_variable_import(" i generic", $.definition.ordered ? "resolve ordered dictionary" : "resolve dictionary", []),
                    i.select_from_context([]),
                    {
                        //"denseness benchmark": e.not_set(),
                        "map": i.function_(true, i.block(
                            [],
                            $.benchmark.transform(
                                ($) => _ea.dictionary_literal({
                                    // "linked entry": e.call(
                                    //     s.from_context([]), //Value_Selection($.selection, { 'tail': pa.array_literal([]) }),
                                    //     e.string("FIXME", 'backtick'),
                                    // ),
                                    "linked entry": variable(null, i.implement_me()), // quite some work; a call to __get_entry() from the selection (Guaranteed_Value_Selection), and then transform an optional value
                                }),
                                () => _ea.dictionary_literal({})
                            ),
                            i.change_context(
                                s.from_context(["value"]),
                                Node_Resolver(
                                    $.resolver,
                                    {
                                        'temp type': $p['temp type'],
                                        'temp subselection': op_append_element(
                                            $p['temp subselection'],
                                            {
                                                'element': sub.dictionary(),
                                            },
                                        ),
                                    }
                                )
                            )
                        )




                        ),
                        "location 2 string": i.select_from_variable("l2s", []),

                    }
                )
            ))
            case 'group': return _ea.ss($, ($) => i.block(
                $['ordered list'].map(($) => temp_ordered_variable(
                    `p ${$.key}`,
                    t.component_imported(
                        "out",
                        $p['temp type'],
                        {},
                        op_append_element<_out_interface.Type.SG.component.sub_selection.L<_edata.Source_Location>>(
                            $p['temp subselection'],
                            {
                                'element': sub.group($.key),
                            },
                        ),
                    ),
                    i.change_context(
                        s.from_context([$.key]),
                        Node_Resolver(
                            $.value.resolver,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': op_append_element(
                                    $p['temp subselection'],
                                    {
                                        'element': sub.group($.key),
                                    },
                                ),
                            }
                        )
                    )
                )),
                {},
                i.group($.dictionary.map(($, key) => i.select_from_variable(`p ${key}`, [])))
            ))
            case 'list': return _ea.ss($, ($) => {
                return i.array_map(
                    s.from_context(["list"]),
                    i.change_context(
                        s.from_context(["element"]),
                        Node_Resolver(
                            $.resolver,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': op_append_element(
                                    $p['temp subselection'],
                                    {
                                        'element': sub.list(),
                                    },
                                ),
                            }
                        )
                    )
                )
            })
            case 'optional': return _ea.ss($, ($) => i.optional_map(
                s.from_context([]),
                Option_Constraints(
                    $.constraints,
                    {
                        'sub': () => Node_Resolver(
                            $['resolver'],
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': op_append_element(
                                    $p['temp subselection'],
                                    {
                                        'element': sub.optional(),
                                    },
                                ),
                            }
                        )
                    }
                )
            ))
            case 'state group': return _ea.ss($, ($) => i.switch_(
                s.from_context(['state group']),
                $.states.map(($, key) => i.case_(key, Option_Constraints(
                    $.constraints,
                    {
                        'sub': () => Node_Resolver(
                            $['resolver'],
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': op_append_element(
                                    $p['temp subselection'],
                                    {
                                        'element': sub.state_group(key),
                                    },
                                ),
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
            // case 'type parameter': return _ea.ss($, ($) => _edev.implement_me()) // a lot of work: the resolvers need to be passed to this resolve function
            default: return _ea.au($[0])
        }
    })
}