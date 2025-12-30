import * as _pdev from 'pareto-core-dev'
import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-internals'

import * as d_in from "../../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import * as sh from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'imports': d_in.Imports
        'what to generate':
        | ['target', boolean] //annotated?
        | ['source', null]
    }
): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return sh.m.module(
        op_flatten_dictionary(
            _pt.dictionary_literal({
                "core": _pt.dictionary_literal({
                    "": sh.import_.ancestor(
                        3,
                        "core",
                        [
                            _pt.cc($p['what to generate'], ($) => {
                                switch ($[0]) {
                                    case 'source': return _pt.ss($, ($) => "resolved")
                                    case 'target': return _pt.ss($, ($) => $ ? "unresolved" : "unconstrained")
                                    default: return _pt.au($[0])
                                }
                            }),
                        ],
                        {
                            "Source": _pt.cc($p['what to generate'], ($) => {
                                switch ($[0]) {
                                    case 'source': return _pt.ss($, ($) => sh.t.null_())
                                    case 'target': return _pt.ss($, ($) => $ ? sh.t.parameter_module("Source") : sh.t.null_())
                                    default: return _pt.au($[0])
                                }
                            }),
                        },
                    )
                }),
                "imports ": _pinternals.block(() => {
                    const types = $p['what to generate']
                    return $p.imports.map(($) => sh.import_.ancestor(
                        2 + $['schema set child']['up steps'],
                        $['schema set child'].key,
                        [
                            "data types",
                            _pt.cc(types, ($) => {
                                switch ($[0]) {
                                    case 'target': return _pt.ss($, ($) => "target")
                                    case 'source': return _pt.ss($, ($) => "source")
                                    default: return _pt.au($[0])
                                }
                            })
                        ],
                        _pt.cc(types, ($) => {
                            switch ($[0]) {

                                case 'source': return _pt.ss($, ($) => _pt.dictionary_literal({}))
                                case 'target': return _pt.ss($, ($) => $ ? _pt.dictionary_literal({
                                    "Source": sh.t.parameter_module("Source"),
                                }) : _pt.dictionary_literal({}))
                                default: return _pt.au($[0])
                            }
                        }),
                    ))
                }),
            }),
            {
                'separator': "",
            },
                        () => _pt.unreachable_code_path(),
        ),
        _pt.cc($p['what to generate'], ($) => {
            switch ($[0]) {
                case 'source': return _pt.ss($, ($) => ({}))
                case 'target': return _pt.ss($, ($) => $ ? ({ "Source": null }) : ({}))
                default: return _pt.au($[0])
            }
        }),
        $.types.dictionary.map(($) => sh.type({}, Type_Node($.node))),
    )
}


export const r_Type_Reference = (
    $: d_in.Type_Node_Reference,
    $p: {
        'add dictionary tail': boolean
    }

): d_out.Type<_pi.Deprecated_Source_Location> => {
    const referent = $
    const Component_Sub_Selection = (
        $: d_in.Type_Node_Reference,
        $p: {
            'add dictionary tail': boolean
        }

    ): _pi.List<d_out.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location>> => {
        const tail: _pi.List<d_out.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location>> = $.tail.map(($) => _pt.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _pt.ss($, ($) => sh.sub.dictionary())
                case 'group': return _pt.ss($, ($) => sh.sub.group($.key))
                case 'list': return _pt.ss($, ($) => sh.sub.list())
                case 'optional': return _pt.ss($, ($) => sh.sub.optional())
                case 'state group': return _pt.ss($, ($) => sh.sub.state_group($.key))
                default: return _pt.au($[0])
            }
        }))
        return $p['add dictionary tail']
            ? tail.append_element(sh.sub.dictionary())
            : tail
    }

    return _pt.cc($['type location'].location, ($) => {
        switch ($[0]) {
            case 'external': return _pt.ss($, ($) => sh.t.component_imported(
                `imports ${$.import.key}`,
                $.type.key,
                {},
                Component_Sub_Selection(referent, { 'add dictionary tail': $p['add dictionary tail'] }),

            ))
            case 'internal': return _pt.ss($, ($) => sh.t.component_sibling(
                $.key,
                {},
                Component_Sub_Selection(referent, { 'add dictionary tail': $p['add dictionary tail'] }),
            ))
            default: return _pt.au($[0])
        }
    })
}

export const Number_Type = (
    $: d_in.Number_Type

): d_out.Type<_pi.Deprecated_Source_Location> => {
    return _pt.cc($.precision, ($) => {
        switch ($[0]) {
            case 'approximation': return _pt.ss($, ($) => sh.t.float())
            case 'exact': return _pt.ss($, ($) => _pt.cc($.type, ($) => {
                switch ($[0]) {
                    case 'integer': return _pt.ss($, ($) => sh.t.integer('signed'))
                    case 'natural': return _pt.ss($, ($) => sh.t.integer('unsigned'))
                    case 'positive natural': return _pt.ss($, ($) => sh.t.integer('unsigned'))
                    default: return _pt.au($[0])
                }
            }))
            default: return _pt.au($[0])
        }
    })
}

export const Type_Node = (
    $: d_in.Type_Node

): d_out.Type<_pi.Deprecated_Source_Location> => {
    return _pt.cc($, ($) => {
        switch ($[0]) {
            case 'boolean': return _pt.ss($, ($) => sh.t.boolean())
            case 'number': return _pt.ss($, ($) => _pt.cc($, ($) => {
                switch ($[0]) {
                    case 'global': return _pt.ss($, ($) => Number_Type($.entry))
                    case 'local': return _pt.ss($, ($) => Number_Type($))
                    default: return _pt.au($[0])
                }
            }))
            case 'text': return _pt.ss($, ($) => sh.t.string())
            case 'component': return _pt.ss($, ($) => _pt.cc($, ($) => {
                switch ($[0]) {
                    case 'external': return _pt.ss($, ($) => sh.t.component_imported(
                        `imports ${$.import.key}`,
                        $.type.key,
                        {},
                        []
                    ))
                    case 'internal': return _pt.ss($, ($) => sh.t.component_sibling(
                        $.key,
                        {},
                        []
                    ))
                    case 'internal cyclic': return _pt.ss($, ($) => sh.t.component_sibling( //FIXME: is this correct?
                        $.key,
                        {},
                        []
                    ))
                    default: return _pt.au($[0])
                }
            }))
            case 'dictionary': return _pt.ss($, ($) => sh.t.component_imported(
                "core",
                $.ordered ? "Ordered Dictionary" : "Dictionary",
                {
                    "D": Type_Node($.node)
                },
                []
            ))
            case 'group': return _pt.ss($, ($) => sh.t.group($.dictionary.map(($, key) => Type_Node($.node))))
            case 'list': return _pt.ss($, ($) => {
                const type = $.node
                return sh.t.component_imported(
                    "core",
                    "List",
                    {
                        "L": Type_Node($.node)
                    },
                    []
                )
            })
            case 'nothing': return _pt.ss($, ($) => sh.t.null_())
            case 'optional': return _pt.ss($, ($) => sh.t.optional(Type_Node($)))
            case 'reference': return _pt.ss($, ($) => {
                const referent = $.referent
                return _pt.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'derived': return _pt.ss($, ($) => sh.t.component_imported(
                            "core",
                            "Derived Reference",
                            {
                                "Type": r_Type_Reference(referent, { 'add dictionary tail': false }),
                            },
                            []
                        ))
                        case 'selected': return _pt.ss($, ($) => sh.t.component_imported(
                            "core",
                            _pt.cc($.dependency, ($) => {
                                switch ($[0]) {
                                    case 'cyclic': return _pt.ss($, ($) => "Reference To Circular Dependent Sibling")
                                    case 'acyclic': return _pt.ss($, ($) => "Reference To Normal Dictionary Entry")
                                    case 'stack': return _pt.ss($, ($) => "Reference To Stacked Dictionary Entry")
                                    default: return _pt.au($[0])
                                }
                            }),
                            {
                                "Dictionary Entry": r_Type_Reference(referent, { 'add dictionary tail': true }),
                            },
                            []
                        ))
                        default: return _pt.au($[0])
                    }
                })
            })

            case 'state group': return _pt.ss($, ($) => sh.t.component_imported(
                "core",
                "State Group",
                {
                    "SG": sh.t.tagged_union($.map(($, key) => Type_Node($.node)))
                },
                []
            ))
            // case 'type parameter': return pa.ss($, ($) => sh.t.parameter_type($.key))
            default: return _pt.au($[0])
        }
    })
}
