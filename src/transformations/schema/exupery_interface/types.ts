import * as pd from 'exupery-core-data'
import * as pdev from 'exupery-core-dev'
import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'

import * as _in from "../../../generated/interface/schemas/schema/data_types/source"
import * as _out from "exupery/dist/generated/interface/schemas/interface/data_types/target"

import * as sh from "exupery/dist/shorthands/interface"

import { pure } from "pareto-standard-operations"

const op = {
    'flatten list': pure.list.flatten,
    'flatten dictionary': pure.dictionary.flatten,
    'append element': pure.list['append element'],
}

export const Schema = (
    $: _in.Schema,
    $p: {
        'imports': _in.Imports
        'what to generate':
        | ['target', boolean] //annotated?
        | ['source', null]
    }
): _out.Module_Set.D<pd.Source_Location> => {
    return sh.m.module(
        op['flatten dictionary'](
            pa.dictionary_literal({
                "core": pa.dictionary_literal({
                    "": sh.import_.ancestor(
                        3,
                        "core",
                        [
                            pa.cc($p['what to generate'], ($) => {
                                switch ($[0]) {
                                    case 'source': return pa.ss($, ($) => "resolved")
                                    case 'target': return pa.ss($, ($) => $ ? "unresolved" : "unconstrained")
                                    default: return pa.au($[0])
                                }
                            }),
                        ],
                        {
                            "Source": pa.cc($p['what to generate'], ($) => {
                                switch ($[0]) {
                                    case 'source': return pa.ss($, ($) => sh.t.null_())
                                    case 'target': return pa.ss($, ($) => $ ? sh.t.parameter_module("Source") : sh.t.null_())
                                    default: return pa.au($[0])
                                }
                            }),
                        },
                    )
                }),
                "imports ": pa.block(() => {
                    const types = $p['what to generate']
                    return $p.imports.map(($) => sh.import_.ancestor(
                        2 + $['schema set child']['up steps'],
                        $['schema set child'].key,
                        [
                            "data types",
                            pa.cc(types, ($) => {
                                switch ($[0]) {
                                    case 'target': return pa.ss($, ($) => "target")
                                    case 'source': return pa.ss($, ($) => "source")
                                    default: return pa.au($[0])
                                }
                            })
                        ],
                        pa.cc(types, ($) => {
                            switch ($[0]) {

                                case 'source': return pa.ss($, ($) => pa.dictionary_literal({}))
                                case 'target': return pa.ss($, ($) => $ ? pa.dictionary_literal({
                                    "Source": sh.t.parameter_module("Source"),
                                }) : pa.dictionary_literal({}))
                                default: return pa.au($[0])
                            }
                        }),
                    ))
                }),
            }),
            {
                'separator': "",
            }
        ),
        pa.cc($p['what to generate'], ($) => {
            switch ($[0]) {
                case 'source': return pa.ss($, ($) => ({}))
                case 'target': return pa.ss($, ($) => $ ? ({ "Source": null }) : ({}))
                default: return pa.au($[0])
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

): _out.Type<pd.Source_Location> => {
    const referent = $
    const Component_Sub_Selection = (
        $: _in.Type_Node_Reference,
        $p: {
            'add dictionary tail': boolean
        }

    ): pt.Array<_out.Type.SG.component.sub_selection.L<pd.Source_Location>> => {
        const tail: pt.Array<_out.Type.SG.component.sub_selection.L<pd.Source_Location>> = $.tail.map(($) => pa.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return pa.ss($, ($) => sh.sub.dictionary())
                case 'group': return pa.ss($, ($) => sh.sub.group($.key))
                case 'identifier value pair': return pa.ss($, ($) => pdev.implement_me())
                case 'list': return pa.ss($, ($) => sh.sub.list())
                case 'optional': return pa.ss($, ($) => sh.sub.optional())
                case 'state group': return pa.ss($, ($) => sh.sub.state_group($.key))
                default: return pa.au($[0])
            }
        }))
        return $p['add dictionary tail']
            ? op['append element'](
                tail,
                {
                    'element': sh.sub.dictionary(),
                }
            )
            : tail
    }

    return pa.cc($['type location'].location, ($) => {
        switch ($[0]) {
            case 'external': return pa.ss($, ($) => sh.t.component_imported(
                `imports ${$.import.key}`,
                $.type.key,
                {},
                Component_Sub_Selection(referent, { 'add dictionary tail': $p['add dictionary tail'] }).__get_raw_copy(),

            ))
            case 'internal': return pa.ss($, ($) => sh.t.component_sibling(
                $.key,
                {},
                Component_Sub_Selection(referent, { 'add dictionary tail': $p['add dictionary tail'] }).__get_raw_copy(),
            ))
            default: return pa.au($[0])
        }
    })
}

export const Number_Type = (
    $: _in.Number_Type

): _out.Type<pd.Source_Location> => {
    return pa.cc($.precision, ($) => {
        switch ($[0]) {
            case 'approximation': return pa.ss($, ($) => sh.t.float())
            case 'exact': return pa.ss($, ($) => pa.cc($.type, ($) => {
                switch ($[0]) {
                    case 'integer': return pa.ss($, ($) => sh.t.integer('signed'))
                    case 'natural': return pa.ss($, ($) => sh.t.integer('unsigned'))
                    case 'positive natural': return pa.ss($, ($) => sh.t.integer('unsigned'))
                    default: return pa.au($[0])
                }
            }))
            default: return pa.au($[0])
        }
    })
}

export const Type_Node = (
    $: _in.Type_Node

): _out.Type<pd.Source_Location> => {
    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'boolean': return pa.ss($, ($) => sh.t.boolean())
            case 'number': return pa.ss($, ($) => pa.cc($, ($) => {
                switch ($[0]) {
                    case 'global': return pa.ss($, ($) => Number_Type($.entry))
                    case 'local': return pa.ss($, ($) => Number_Type($))
                    default: return pa.au($[0])
                }
            }))
            case 'text': return pa.ss($, ($) => sh.t.string())
            case 'component': return pa.ss($, ($) => pa.cc($, ($) => {
                switch ($[0]) {
                    case 'external': return pa.ss($, ($) => sh.t.component_imported(
                        `imports ${$.import.key}`,
                        $.type.key,
                        {},
                        []
                    ))
                    case 'internal': return pa.ss($, ($) => sh.t.component_sibling(
                        $.key,
                        {},
                        []
                    ))
                    case 'internal cyclic': return pa.ss($, ($) => sh.t.component_sibling( //FIXME: is this correct?
                        $.key,
                        {},
                        []
                    ))
                    default: return pa.au($[0])
                }
            }))
            case 'dictionary': return pa.ss($, ($) => sh.t.component_imported(
                "core",
                $.ordered ? "Ordered Dictionary" : "Dictionary",
                {
                    "D": Type_Node($.node)
                },
                []
            ))
            case 'group': return pa.ss($, ($) => sh.t.group($.map(($, key) => Type_Node($))))
            case 'list': return pa.ss($, ($) => {
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
            case 'identifier value pair': return pa.ss($, ($) => sh.t.key_value_pair(Type_Node($)))
            case 'nothing': return pa.ss($, ($) => sh.t.null_())
            case 'optional': return pa.ss($, ($) => sh.t.optional(Type_Node($)))
            case 'reference': return pa.ss($, ($) => {
                const referent = $.referent
                return pa.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'derived': return pa.ss($, ($) => sh.t.component_imported(
                            "core",
                            "Derived Reference",
                            {
                                "Type": r_Type_Reference(referent, { 'add dictionary tail': false }),
                            },
                            []
                        ))
                        case 'selected': return pa.ss($, ($) => sh.t.component_imported(
                            "core",
                            pa.cc($.dependency, ($) => {
                                switch ($[0]) {
                                    case 'cyclic': return pa.ss($, ($) => "Reference To Circular Dependent Sibling")
                                    case 'acyclic': return pa.ss($, ($) => "Reference To Normal Dictionary Entry")
                                    case 'stack': return pa.ss($, ($) => "Reference To Stacked Dictionary Entry")
                                    default: return pa.au($[0])
                                }
                            }),
                            {
                                "Dictionary Entry": r_Type_Reference(referent, { 'add dictionary tail': true }),
                            },
                            []
                        ))
                        default: return pa.au($[0])
                    }
                })
            })

            case 'state group': return pa.ss($, ($) => sh.t.component_imported(
                "core",
                "State Group",
                {
                    "SG": sh.t.tagged_union($.map(($, key) => Type_Node($)))
                },
                []
            ))
            case 'type parameter': return pa.ss($, ($) => sh.t.parameter_type($.key))
            default: return pa.au($[0])
        }
    })
}
