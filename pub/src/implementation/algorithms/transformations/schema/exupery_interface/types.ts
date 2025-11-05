import * as _edata from 'exupery-core-data'
import * as _edev from 'exupery-core-dev'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import * as sh from "exupery/dist/shorthands/interface"

import { $$ as op_flatten } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/dictionary/flatten"
import { $$ as op_append_element } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/list/append_element"
import { Signature } from "../../../../../interface/algorithms/transformations/schema/exupery_interface/types"


export const Schema = (
    $: _in.Schema,
    $p: {
        'imports': _in.Imports
        'what to generate':
        | ['target', boolean] //annotated?
        | ['source', null]
    }
): _out.Module_Set.D<_edata.Source_Location> => {
    return sh.m.module(
        op_flatten(
            _ea.dictionary_literal({
                "core": _ea.dictionary_literal({
                    "": sh.import_.ancestor(
                        3,
                        "core",
                        [
                            _ea.cc($p['what to generate'], ($) => {
                                switch ($[0]) {
                                    case 'source': return _ea.ss($, ($) => "resolved")
                                    case 'target': return _ea.ss($, ($) => $ ? "unresolved" : "unconstrained")
                                    default: return _ea.au($[0])
                                }
                            }),
                        ],
                        {
                            "Source": _ea.cc($p['what to generate'], ($) => {
                                switch ($[0]) {
                                    case 'source': return _ea.ss($, ($) => sh.t.null_())
                                    case 'target': return _ea.ss($, ($) => $ ? sh.t.parameter_module("Source") : sh.t.null_())
                                    default: return _ea.au($[0])
                                }
                            }),
                        },
                    )
                }),
                "imports ": _ea.block(() => {
                    const types = $p['what to generate']
                    return $p.imports.map(($) => sh.import_.ancestor(
                        2 + $['schema set child']['up steps'],
                        $['schema set child'].key,
                        [
                            "data types",
                            _ea.cc(types, ($) => {
                                switch ($[0]) {
                                    case 'target': return _ea.ss($, ($) => "target")
                                    case 'source': return _ea.ss($, ($) => "source")
                                    default: return _ea.au($[0])
                                }
                            })
                        ],
                        _ea.cc(types, ($) => {
                            switch ($[0]) {

                                case 'source': return _ea.ss($, ($) => _ea.dictionary_literal({}))
                                case 'target': return _ea.ss($, ($) => $ ? _ea.dictionary_literal({
                                    "Source": sh.t.parameter_module("Source"),
                                }) : _ea.dictionary_literal({}))
                                default: return _ea.au($[0])
                            }
                        }),
                    ))
                }),
            }),
            {
                'separator': "",
            }
        ),
        _ea.cc($p['what to generate'], ($) => {
            switch ($[0]) {
                case 'source': return _ea.ss($, ($) => ({}))
                case 'target': return _ea.ss($, ($) => $ ? ({ "Source": null }) : ({}))
                default: return _ea.au($[0])
            }
        }),
        $.types.dictionary.map(($) => sh.type({}, Type_Node($.node))),
    )
}


export const r_Type_Reference = (
    $: _in.Type_Node_Reference,
    $p: {
        'add dictionary tail': boolean
    }

): _out.Type<_edata.Source_Location> => {
    const referent = $
    const Component_Sub_Selection = (
        $: _in.Type_Node_Reference,
        $p: {
            'add dictionary tail': boolean
        }

    ): _et.Array<_out.Type.SG.component.sub_selection.L<_edata.Source_Location>> => {
        const tail: _et.Array<_out.Type.SG.component.sub_selection.L<_edata.Source_Location>> = $.tail.map(($) => _ea.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _ea.ss($, ($) => sh.sub.dictionary())
                case 'group': return _ea.ss($, ($) => sh.sub.group($.key))
                case 'list': return _ea.ss($, ($) => sh.sub.list())
                case 'optional': return _ea.ss($, ($) => sh.sub.optional())
                case 'state group': return _ea.ss($, ($) => sh.sub.state_group($.key))
                default: return _ea.au($[0])
            }
        }))
        return $p['add dictionary tail']
            ? op_append_element(
                tail,
                {
                    'element': sh.sub.dictionary(),
                }
            )
            : tail
    }

    return _ea.cc($['type location'].location, ($) => {
        switch ($[0]) {
            case 'external': return _ea.ss($, ($) => sh.t.component_imported(
                `imports ${$.import.key}`,
                $.type.key,
                {},
                Component_Sub_Selection(referent, { 'add dictionary tail': $p['add dictionary tail'] }),

            ))
            case 'internal': return _ea.ss($, ($) => sh.t.component_sibling(
                $.key,
                {},
                Component_Sub_Selection(referent, { 'add dictionary tail': $p['add dictionary tail'] }),
            ))
            default: return _ea.au($[0])
        }
    })
}

export const Number_Type = (
    $: _in.Number_Type

): _out.Type<_edata.Source_Location> => {
    return _ea.cc($.precision, ($) => {
        switch ($[0]) {
            case 'approximation': return _ea.ss($, ($) => sh.t.float())
            case 'exact': return _ea.ss($, ($) => _ea.cc($.type, ($) => {
                switch ($[0]) {
                    case 'integer': return _ea.ss($, ($) => sh.t.integer('signed'))
                    case 'natural': return _ea.ss($, ($) => sh.t.integer('unsigned'))
                    case 'positive natural': return _ea.ss($, ($) => sh.t.integer('unsigned'))
                    default: return _ea.au($[0])
                }
            }))
            default: return _ea.au($[0])
        }
    })
}

export const Type_Node = (
    $: _in.Type_Node

): _out.Type<_edata.Source_Location> => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'boolean': return _ea.ss($, ($) => sh.t.boolean())
            case 'number': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'global': return _ea.ss($, ($) => Number_Type($.entry))
                    case 'local': return _ea.ss($, ($) => Number_Type($))
                    default: return _ea.au($[0])
                }
            }))
            case 'text': return _ea.ss($, ($) => sh.t.string())
            case 'component': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'external': return _ea.ss($, ($) => sh.t.component_imported(
                        `imports ${$.import.key}`,
                        $.type.key,
                        {},
                        []
                    ))
                    case 'internal': return _ea.ss($, ($) => sh.t.component_sibling(
                        $.key,
                        {},
                        []
                    ))
                    case 'internal cyclic': return _ea.ss($, ($) => sh.t.component_sibling( //FIXME: is this correct?
                        $.key,
                        {},
                        []
                    ))
                    default: return _ea.au($[0])
                }
            }))
            case 'dictionary': return _ea.ss($, ($) => sh.t.component_imported(
                "core",
                $.ordered ? "Ordered Dictionary" : "Dictionary",
                {
                    "D": Type_Node($.node)
                },
                []
            ))
            case 'group': return _ea.ss($, ($) => sh.t.group($.dictionary.map(($, key) => Type_Node($.node))))
            case 'list': return _ea.ss($, ($) => {
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
            case 'nothing': return _ea.ss($, ($) => sh.t.null_())
            case 'optional': return _ea.ss($, ($) => sh.t.optional(Type_Node($)))
            case 'reference': return _ea.ss($, ($) => {
                const referent = $.referent
                return _ea.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'derived': return _ea.ss($, ($) => sh.t.component_imported(
                            "core",
                            "Derived Reference",
                            {
                                "Type": r_Type_Reference(referent, { 'add dictionary tail': false }),
                            },
                            []
                        ))
                        case 'selected': return _ea.ss($, ($) => sh.t.component_imported(
                            "core",
                            _ea.cc($.dependency, ($) => {
                                switch ($[0]) {
                                    case 'cyclic': return _ea.ss($, ($) => "Reference To Circular Dependent Sibling")
                                    case 'acyclic': return _ea.ss($, ($) => "Reference To Normal Dictionary Entry")
                                    case 'stack': return _ea.ss($, ($) => "Reference To Stacked Dictionary Entry")
                                    default: return _ea.au($[0])
                                }
                            }),
                            {
                                "Dictionary Entry": r_Type_Reference(referent, { 'add dictionary tail': true }),
                            },
                            []
                        ))
                        default: return _ea.au($[0])
                    }
                })
            })

            case 'state group': return _ea.ss($, ($) => sh.t.component_imported(
                "core",
                "State Group",
                {
                    "SG": sh.t.tagged_union($.map(($, key) => Type_Node($.node)))
                },
                []
            ))
            // case 'type parameter': return pa.ss($, ($) => sh.t.parameter_type($.key))
            default: return _ea.au($[0])
        }
    })
}
