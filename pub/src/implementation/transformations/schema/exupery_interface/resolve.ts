import * as _edata from 'exupery-core-data'
import * as _edev from 'exupery-core-dev'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, t, import_, type, sub } from "exupery/dist/shorthands/interface"

import * as _migration_boilerplate_interface from "./migrate_boilerplate"
import * as _types from "./types"

import { $$ as op_append_element } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/list/append_element"
import { Signature } from "../../../../../interface/algorithms/transformations/schema/exupery_interface/resolve"


export const Signatures = (
    $: _in.Signatures,
): _out.Module_Set.D<_edata.Source_Location> => {
    return m.module(
        {
            "resolve": import_.ancestor(3, "core", ["resolve"], {}),
            "resolved": import_.sibling("source", [], {}),
            "unresolved": import_.sibling("target", [], {}),
        },
        {},
        $.dictionary.map(($, key) => type({}, t.function_(
            { "Source": null },
            t.component_imported("unresolved", key, {
                "Source": t.parameter_function("Source"),
            }, []),
            {
                "parameters": r_Signature_Parameters($['resolved parameters']),
                "location 2 string": t.component_imported("resolve", "Location 2 String", {
                    "Source": t.parameter_function("Source"),
                }, []),
            },
            t.component_imported("resolved", key, {}, []),
        ))),
    )
}

export const r_Type_Reference = (
    $: _in.Type_Reference,
    $p: {
        'component sub part': _et.List<_out.Type.SG.component.sub_selection.L<_edata.Source_Location>>
    }
): _out.Type<_edata.Source_Location> => {

    return _ea.cc($.location, ($) => {
        switch ($[0]) {
            case 'external': return _ea.ss($, ($) => t.component_imported(
                `imports ${$.import.key}`,
                $.type.key,
                {},
                $p['component sub part'],

            ))
            case 'internal': return _ea.ss($, ($) => t.component_imported(
                "resolved",
                $.key,
                {},
                $p['component sub part'],
            ))
            default: return _ea.au($[0])
        }
    })
}

export const r_Type_Part_Reference = (
    $: _in.Type_Node_Reference,
    $p: {
        'add dictionary tail': boolean
    }

): _out.Type<_edata.Source_Location> => {
    const Component_Sub_Selection = (
        $: _in.Type_Node_Reference.tail,

    ): _et.List<_out.Type.SG.component.sub_selection.L<_edata.Source_Location>> => {
        const tail: _et.List<_out.Type.SG.component.sub_selection.L<_edata.Source_Location>> = $.map(($) => _ea.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _ea.ss($, ($) => sub.dictionary())
                case 'group': return _ea.ss($, ($) => sub.group($.key))
                case 'list': return _ea.ss($, ($) => sub.list())
                case 'optional': return _ea.ss($, ($) => sub.optional())
                case 'state group': return _ea.ss($, ($) => sub.state_group($.key))
                default: return _ea.au($[0])
            }
        }))
        return $p['add dictionary tail']
            ? op_append_element(
                tail,
                {
                    'element': sub.dictionary(),
                }
            )
            : tail
    }

    return r_Type_Reference(
        $['type location'],
        {
            'component sub part': Component_Sub_Selection($.tail),
        }
    )
}

export const r_Signature_Parameters = (
    $: _in.Signature_Parameters,
): _out.Type<_edata.Source_Location> => {
    return t.group({
        "values": t.group($.values.map(($): _out.Type<_edata.Source_Location> => {
            const temp_2 = r_Type_Reference($['data type'], { 'component sub part': _ea.list_literal([]) })

            return _ea.cc($.presence, ($) => {
                switch ($[0]) {
                    case 'optional': return t.optional(temp_2)
                    case 'required': return temp_2
                    default: return _ea.au($[0])
                }
            })
        })),
        "lookups": t.group($.lookups.map(($): _out.Type<_edata.Source_Location> => {
            const x = $.referent
            return _ea.cc($.type, ($) => {
                switch ($[0]) {
                    case 'acyclic': return _ea.ss($, ($) => t.component_imported("resolve", "Acyclic Lookup", {
                        "T": r_Type_Reference(x, { 'component sub part': _ea.list_literal([sub.dictionary()]) }),
                    }, []))
                    case 'cyclic': return _ea.ss($, ($) => t.component_imported("resolve", "Cyclic Lookup", {
                        "T": r_Type_Reference(x, { 'component sub part': _ea.list_literal([sub.dictionary()]) }),

                    }, []))
                    case 'stack': return _ea.ss($, ($) => t.component_imported("resolve", "Lookup Stack", {
                        "T": r_Type_Reference(x, { 'component sub part': _ea.list_literal([sub.dictionary()]) }),

                    }, []))
                    default: return _ea.au($[0])
                }
            })
        }))
    })
}