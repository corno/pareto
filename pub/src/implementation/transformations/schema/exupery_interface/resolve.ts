import * as pd from 'exupery-core-data'
import * as _edev from 'exupery-core-dev'
import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'

import * as _in from "../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, t, import_, type, sub } from "exupery/dist/shorthands/interface"

import * as _migration_boilerplate_interface from "./migrate_boilerplate"
import * as _types from "./types"

import { $$ as op_append_element } from "pareto-standard-operations/dist/implementation/operations/pure/list/append_element"
import { Signature } from "../../../../interface/algorithms/transformations/schema/exupery_interface/resolve"


export const Signatures = (
    $: _in.Signatures,
): _out.Module_Set.D<pd.Source_Location> => {
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
        'component sub part': pt.Array<_out.Type.SG.component.sub_selection.L<pd.Source_Location>>
    }
): _out.Type<pd.Source_Location> => {

    return pa.cc($.location, ($) => {
        switch ($[0]) {
            case 'external': return pa.ss($, ($) => t.component_imported(
                `imports ${$.import.key}`,
                $.type.key,
                {},
                $p['component sub part'],

            ))
            case 'internal': return pa.ss($, ($) => t.component_imported(
                "resolved",
                $.key,
                {},
                $p['component sub part'],
            ))
            default: return pa.au($[0])
        }
    })
}

export const r_Type_Part_Reference = (
    $: _in.Type_Node_Reference,
    $p: {
        'add dictionary tail': boolean
    }

): _out.Type<pd.Source_Location> => {
    const Component_Sub_Selection = (
        $: _in.Type_Node_Reference.tail,

    ): pt.Array<_out.Type.SG.component.sub_selection.L<pd.Source_Location>> => {
        const tail: pt.Array<_out.Type.SG.component.sub_selection.L<pd.Source_Location>> = $.map(($) => pa.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return pa.ss($, ($) => sub.dictionary())
                case 'group': return pa.ss($, ($) => sub.group($.key))
                case 'list': return pa.ss($, ($) => sub.list())
                case 'optional': return pa.ss($, ($) => sub.optional())
                case 'state group': return pa.ss($, ($) => sub.state_group($.key))
                default: return pa.au($[0])
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
): _out.Type<pd.Source_Location> => {
    return t.group({
        "values": t.group($.values.map(($): _out.Type<pd.Source_Location> => {
            const temp_2 = r_Type_Reference($['data type'], { 'component sub part': pa.array_literal([]) })

            return pa.cc($.presence, ($) => {
                switch ($[0]) {
                    case 'optional': return t.optional(temp_2)
                    case 'required': return temp_2
                    default: return pa.au($[0])
                }
            })
        })),
        "lookups": t.group($.lookups.map(($): _out.Type<pd.Source_Location> => {
            const x = $.referent
            return pa.cc($.type, ($) => {
                switch ($[0]) {
                    case 'acyclic': return pa.ss($, ($) => t.component_imported("resolve", "Acyclic Lookup", {
                        "T": r_Type_Reference(x, { 'component sub part': pa.array_literal([sub.dictionary()]) }),
                    }, []))
                    case 'cyclic': return pa.ss($, ($) => t.component_imported("resolve", "Cyclic Lookup", {
                        "T": r_Type_Reference(x, { 'component sub part': pa.array_literal([sub.dictionary()]) }),

                    }, []))
                    case 'stack': return pa.ss($, ($) => t.component_imported("resolve", "Lookup Stack", {
                        "T": r_Type_Reference(x, { 'component sub part': pa.array_literal([sub.dictionary()]) }),

                    }, []))
                    default: return pa.au($[0])
                }
            })
        }))
    })
}