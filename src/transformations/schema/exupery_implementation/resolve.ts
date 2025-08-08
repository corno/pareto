import * as pd from 'exupery-core-data'
import * as pt from 'exupery-core-types'
import * as pa from 'exupery-core-alg'
import * as pdev from 'exupery-core-dev'

import * as _in from "../../../generated/interface/schemas/schema/data_types/resolved"
import * as _out from "exupery/dist/generated/interface/schemas/implementation/unresolved" //FIXME... should be 'unresolved'
import * as _out_interface from "exupery/dist/generated/interface/schemas/interface/unresolved" //FIXME... should be 'unresolved'

import { m, variable, i, s, temp_ordered_variable } from "exupery/dist/shorthands/implementation"
import { t, import_, sub as sub } from "exupery/dist/shorthands/interface"

import { pure } from "pareto-standard-operations"

const op = {
    // 'append element': pure.list['extend with element'],
    'append element': pure.list['append element'],
    'flatten dictionary': pure.dictionary.flatten,
    'filter list': pure.list.filter,
    'flatten list': pure.list.flatten,
    'pad dictionary identifiers': pure.dictionary['pad identifiers'],
}

export const Resolvers = (
    $: _in.Resolvers,
    $p: {
        'key': string,
        'imports': _in.Imports
    }
): _out.Module_Set.D<pd.Source_Location> => {
    return m.module(
        op['flatten dictionary'](
            pa.dictionary_literal({
                "": pa.dictionary_literal({
                    "generic": import_.ancestor(2, "generic", ["resolve"], {}),
                    "out": import_.ancestor(3, "interface", ["schemas", $p.key, "data types", "resolved"], {}),
                    "signatures": import_.ancestor(3, "interface", ["schemas", $p.key, "data types", "resolve"], {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["resolve"], {}))
            }),
            {
                'separator': "",
            }
        ),
        {},
        op['pad dictionary identifiers'](
            $.dictionary.map(($, key) => variable(
                t.component_imported("signatures", key, {
                    "Source": t.component_imported("generic", "Location Info", {}, []),
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
                                'temp subselection': pa.array_literal([])
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
        'tail': () => pt.Array<_out.Selection.tail.L<pd.Source_Location>>
    },
): _out.Selection<pd.Source_Location> => {
    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'parameter': return pa.ss($, ($) => s.from_variable(
                "params",
                op['flatten list'](pa.array_literal([
                    pa.array_literal(["values", $.key]),
                    $p.tail(),
                ])).__get_raw_copy(),
            ))
            case 'result': return pa.ss($, ($) => pa.cc($, ($) => {
                switch ($[0]) {
                    case 'state group': return pa.ss($, ($) => s.implement_me()) //quite some work
                    case 'optional value': return pa.ss($, ($) => s.implement_me()) //quite some work

                    default: return pa.au($[0])
                }
            }))

            default: return pa.au($[0])
        }
    })
}


export const Optional_Value_Initialization = (
    $: _in.Optional_Value_Initialization,
    $p: null,
): _out.Initialization<pd.Source_Location> => {
    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'not set': return pa.ss($, ($) => i.not_set())
            case 'selection': return pa.ss($, ($) => i.select(Possible_Value_Selection($, { 'tail': () => pa.array_literal([]) })))
            case 'set': return pa.ss($, ($) => i.set(i.select(Guaranteed_Value_Selection($, { 'tail': () => pa.array_literal([]) }))))
            default: return pa.au($[0])
        }
    })
}

export const Guaranteed_Value_Selection = (
    $: _in.Guaranteed_Value_Selection,
    $p: {
        'tail': () => pt.Array<_out.Selection.tail.L<pd.Source_Location>>
    },
): _out.Selection<pd.Source_Location> => {
    const tail = (): pt.Array<_out.Selection.tail.L<pd.Source_Location>> => {
        return op['flatten list'](pa.array_literal([
            op['flatten list']($.tail.path.map(($) => {
                return pa.cc($, ($) => {
                    switch ($[0]) {
                        case 'component': return pa.ss($, ($) => pa.array_literal([]))
                        case 'group': return pa.ss($, ($) => pa.array_literal([$.key]))
                        case 'reference': return pa.ss($, ($) => pa.cc($.definition.type, ($) => {
                            switch ($[0]) {
                                case 'derived': return pa.ss($, ($) => pa.array_literal([]))
                                case 'selected': return pa.ss($, ($) => pa.array_literal(["entry"]))
                                default: return pa.au($[0])
                            }
                        }))
                        default: return pa.au($[0])
                    }
                })
            })),
            $p.tail()
        ]))
    }
    return pa.cc($.start, ($) => {
        switch ($[0]) {
            case 'constraint': return pa.ss($, ($) => pa.cc($, ($) => {
                switch ($[0]) {

                    case 'component': return pa.ss($, ($) => s.implement_me()) //simple
                    case 'reference': return pa.ss($, ($) => s.implement_me()) //simple
                    default: return pa.au($[0])
                }
            }))
            case 'parameter': return pa.ss($, ($) => s.from_variable(
                "params",
                op['flatten list'](pa.array_literal([
                    pa.array_literal(["values", $.key]),
                    tail(),
                ])).__get_raw_copy(),
            ))
            case 'result': return pa.ss($, ($) => pa.cc($, ($) => {
                switch ($[0]) {
                    case 'state group': return pa.ss($, ($) => s.implement_me())  // quite some work
                    case 'optional value': return pa.ss($, ($) => s.implement_me()) // quite some work
                    case 'list': return pa.ss($, ($) => s.implement_me()) // quite some work

                    default: return pa.au($[0])
                }
            }))
            case 'list cursor': return pa.ss($, ($) => s.from_variable(
                "list cursor",
                tail().__get_raw_copy(),
            ))
            case 'linked entry': return pa.ss($, ($) => s.from_variable(
                "linked entry",
                tail().__get_raw_copy(),
            ))
            case 'option constraint': return pa.ss($, ($) => s.from_variable(
                `c ${$.key}`,//FIXME: do the upsteps
                tail().__get_raw_copy(),
            ))
            case 'sibling': return pa.ss($, ($) => s.from_variable(
                `p ${$.key}`,
                tail().__get_raw_copy(),
            ))
            case 'parent sibling': return pa.ss($, ($) => s.from_variable(
                `p ${$.key}`,//FIXME: do the upstep
                tail().__get_raw_copy(),
            ))
            default: return pa.au($[0])
        }
    })
}

export const Lookup_Selection = (
    $: _in.Lookup_Selection,
    $p: {

    },
): _out.Selection<pd.Source_Location> => {
    return pa.cc($.type, ($) => {
        switch ($[0]) {
            case 'dictionary': return pa.ss($, ($) => s.call(
                s.from_variable_import(" i generic", "dictionary to lookup", []),
                Guaranteed_Value_Selection($.selection, {
                    'tail': () => $['selected dictionary'].ordered
                        ? pa.array_literal(["dictionary"])
                        : pa.array_literal([]),
                }),
                {

                },
                []
            ))

            case 'not circular dependent siblings': return pa.ss($, ($) => s.from_parameter(
                "not circular dependent siblings",
                []
            ))
            case 'parameter': return pa.ss($, ($) => s.from_variable(
                "params",
                ["lookups", $.key],
            ))
            case 'possibly circular dependent siblings': return pa.ss($, ($) => s.from_parameter(
                "possibly circular dependent siblings",
                []
            ))
            default: return pa.au($[0])
        }
    })
}

export const Option_Constraints = (
    $: _in.Option_Constraints,
    $p: {
        sub: () => _out.Initialization<pd.Source_Location>
    },
): _out.Initialization<pd.Source_Location> => {
    return i.block(
        [],
        op['pad dictionary identifiers']($, { 'prefix': "c ", 'suffix': "" }).map(($) => variable(null, i.select(pa.cc($, ($) => {
            switch ($[0]) {
                case 'state': return pa.ss($, ($) => s.implement_me()) // medium work
                case 'assert is set': return pa.ss($, ($) => s.optional_transform(
                    Possible_Value_Selection($, { 'tail': () => pa.array_literal([]) }),
                    s.from_context([]),
                    s.abort(),
                    []
                ))
                default: return pa.au($[0])
            }
        })))),
        $p.sub(),
    )
}

export const Node_Resolver = (
    $: _in.Node_Resolver,
    $p: {
        'temp type': string
        'temp subselection': pt.Array<_out_interface.Type.SG.component.sub_selection.L<pd.Source_Location>> //can be removed when exupery has type inference
    },
): _out.Initialization<pd.Source_Location> => {
    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'number': return pa.ss($, ($) => i.select_from_context([]))
            case 'boolean': return pa.ss($, ($) => i.select_from_context([]))
            case 'nothing': return pa.ss($, ($) => i.null_())
            case 'reference': return pa.ss($, ($) => {
                return i.select(pa.cc($.type, ($): _out.Selection<pd.Source_Location> => {
                    switch ($[0]) {
                        case 'derived': return pa.ss($, ($) => Guaranteed_Value_Selection($.value, { 'tail': () => pa.array_literal([]) }))
                        case 'selected': return pa.ss($, ($) => {
                            const context = $
                            return pa.cc($.definition.dependency, ($) => {
                                switch ($[0]) {
                                    case 'acyclic': return pa.ss($, ($) => s.call(
                                        s.from_variable_import(" i generic", "get entry", []),
                                        Lookup_Selection(context.lookup, {}),
                                        {
                                            "reference": i.select_from_context([]),
                                            "location 2 string": i.select_from_variable("l2s", []),
                                        },
                                        []
                                    ))
                                    case 'cyclic': return pa.ss($, ($) => s.call(
                                        s.from_variable_import(" i generic", "get possibly circular dependent sibling entry", []),
                                        Lookup_Selection(context.lookup, {}),
                                        {
                                            "reference": i.select_from_context([]),
                                            "location 2 string": i.select_from_variable("l2s", []),
                                        },
                                        []
                                    ))
                                    case 'stack': return pa.ss($, ($) => s.call(
                                        s.from_variable_import(" i generic", "get entry from stack", []),
                                        Lookup_Selection(context.lookup, {}),
                                        {
                                            "reference": i.select_from_context([]),
                                            "location 2 string": i.select_from_variable("l2s", []),
                                        },
                                        []
                                    ))
                                    default: return pa.au($[0])
                                }
                            })
                        })
                        default: return pa.au($[0])
                    }
                }))
            })
            case 'text': return pa.ss($, ($) => i.select_from_context([]))
            case 'component': return pa.ss($, ($) => i.call(
                pa.cc($.location, ($) => {
                    switch ($[0]) {
                        case 'external': return pa.ss($, ($) => s.from_variable_import(` i r ${$.import.key}`, `r ${$.type.key}`, []))
                        case 'internal': return pa.ss($, ($) => s.from_variable(`r ${$.key}`, []))
                        default: return pa.au($[0])
                    }
                }),
                i.select_from_context([]),
                {
                    "location 2 string": i.select_from_variable("l2s", []),
                    "parameters": $.arguments.transform(
                        ($) => i.group({
                            "values": $.values.transform(
                                ($) => i.group($.map(($) => pa.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'optional': return pa.ss($, ($) => Optional_Value_Initialization($, null))
                                        case 'parameter': return pa.ss($, ($) => i.select_from_variable(
                                            "params",
                                            ["values", $.key],
                                        ))
                                        case 'required': return pa.ss($, ($) => i.select(Guaranteed_Value_Selection($, { 'tail': () => pa.array_literal([]) })))

                                        default: return pa.au($[0])
                                    }
                                }))),
                                () => i.select_from_variable("params", ["values"]),
                            ),
                            "lookups": $.lookups.transform(
                                ($) => i.group($.map(($) => pa.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'empty stack': return pa.ss($, ($) => i.array_literal([]))
                                        case 'not set': return pa.ss($, ($) => i.not_set())
                                        case 'selection': return pa.ss($, ($) => i.select(Lookup_Selection($, {})))
                                        case 'stack': return pa.ss($, ($) => i.implement_me()) // quite some work
                                        default: return pa.au($[0])
                                    }
                                }))),
                                () => i.select_from_variable("params", ["lookups"]),
                            ),
                        }),
                        () => i.select_from_variable("params", [])
                    )
                },
            ))
            case 'dictionary': return pa.ss($, ($) => i.block(
                [],
                $.benchmark.transform(
                    ($) => pa.dictionary_literal({
                        // "linked entry": e.call(
                        //     s.from_context([]), //Value_Selection($.selection, { 'tail': pa.array_literal([]) }),
                        //     e.string("FIXME", 'backtick'),
                        // ),
                        "benchmark": variable(null, i.select(Guaranteed_Value_Selection($.selection, { 'tail': () => pa.array_literal([]) }))),
                    }),
                    () => pa.dictionary_literal({})
                ),
                i.call(
                    s.from_variable_import(" i generic", $.definition.ordered ? "resolve ordered dictionary" : "resolve dictionary", []),
                    i.select_from_context([]),
                    {
                        //"denseness benchmark": e.not_set(),
                        "map": i.function_(true, i.block(
                            [],
                            $.benchmark.transform(
                                ($) => pa.dictionary_literal({
                                    // "linked entry": e.call(
                                    //     s.from_context([]), //Value_Selection($.selection, { 'tail': pa.array_literal([]) }),
                                    //     e.string("FIXME", 'backtick'),
                                    // ),
                                    "linked entry": variable(null, i.implement_me()), // quite some work; a call to __get_entry() from the selection (Guaranteed_Value_Selection), and then transform an optional value
                                }),
                                () => pa.dictionary_literal({})
                            ),
                            i.change_context(
                                s.from_context(["value"]),
                                Node_Resolver(
                                    $.resolver,
                                    {
                                        'temp type': $p['temp type'],
                                        'temp subselection': op['append element'](
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
            case 'identifier value pair': return pa.ss($, ($) => pdev.implement_me()) // quite simple
            case 'group': return pa.ss($, ($) => i.block(
                $['ordered list'].map(($) => temp_ordered_variable(
                    `p ${$.key}`,
                    t.component_imported(
                        "out",
                        $p['temp type'],
                        {},
                        op['append element']<_out_interface.Type.SG.component.sub_selection.L<pd.Source_Location>>(
                            $p['temp subselection'],
                            {
                                'element': sub.group($.key),
                            },
                        ).__get_raw_copy(),
                    ),
                    i.change_context(
                        s.from_context([$.key]),
                        Node_Resolver(
                            $.value.resolver,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': op['append element'](
                                    $p['temp subselection'],
                                    {
                                        'element': sub.group($.key),
                                    },
                                ),
                            }
                        )
                    )
                )).__get_raw_copy(),
                {},
                i.group($.dictionary.map(($, key) => i.select_from_variable(`p ${key}`, [])))
            ))
            case 'list': return pa.ss($, ($) => {
                return i.array_map(
                    s.from_context(["list"]),
                    i.change_context(
                        s.from_context(["element"]),
                        Node_Resolver(
                            $.resolver,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': op['append element'](
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
            case 'optional': return pa.ss($, ($) => i.optional_map(
                s.from_context([]),
                Option_Constraints(
                    $.constraints,
                    {
                        'sub': () => Node_Resolver(
                            $['resolver'],
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': op['append element'](
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
            case 'state group': return pa.ss($, ($) => i.switch_(
                s.from_context(['state group']),
                $.states.map(($, key) => i.case_(key, Option_Constraints(
                    $.constraints,
                    {
                        'sub': () => Node_Resolver(
                            $['resolver'],
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': op['append element'](
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
                    $p['temp subselection'].__get_raw_copy(),
                ),
            ))
            case 'type parameter': return pa.ss($, ($) => pdev.implement_me()) // a lot of work: the resolvers need to be passed to this resolve function
            default: return pa.au($[0])
        }
    })
}