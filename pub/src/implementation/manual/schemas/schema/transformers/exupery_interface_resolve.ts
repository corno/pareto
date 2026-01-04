import * as _pdev from 'pareto-core-dev'
import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, t, import_, type, sub } from "exupery/dist/shorthands/interface"

import * as t_migration_boilerplate_interface from "./exupery_interface_migrate_boilerplate"
import * as t_types from "./exupery_interface_types"


export const Signatures = (
    $: d_in.Signatures,
): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
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
    $: d_in.Type_Reference,
    $p: {
        'component sub part': _pi.List<d_out.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location>>
    }
): d_out.Type<_pi.Deprecated_Source_Location> => {

    return _p.cc($.location, ($) => {
        switch ($[0]) {
            case 'external': return _p.ss($, ($) => t.component_imported(
                `imports ${$.import.key}`,
                $.type.key,
                {},
                $p['component sub part'],

            ))
            case 'internal': return _p.ss($, ($) => t.component_imported(
                "resolved",
                $.key,
                {},
                $p['component sub part'],
            ))
            default: return _p.au($[0])
        }
    })
}

export const r_Type_Part_Reference = (
    $: d_in.Type_Node_Reference,
    $p: {
        'add dictionary tail': boolean
    }

): d_out.Type<_pi.Deprecated_Source_Location> => {
    const Component_Sub_Selection = (
        $: d_in.Type_Node_Reference.tail,

    ): _pi.List<d_out.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location>> => {
        const tail: _pi.List<d_out.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location>> = $.map(($) => _p.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _p.ss($, ($) => sub.dictionary())
                case 'group': return _p.ss($, ($) => sub.group($.key))
                case 'list': return _p.ss($, ($) => sub.list())
                case 'optional': return _p.ss($, ($) => sub.optional())
                case 'state group': return _p.ss($, ($) => sub.state_group($.key))
                default: return _p.au($[0])
            }
        }))
        return $p['add dictionary tail']
            ? tail.append_element(sub.dictionary())
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
    $: d_in.Signature_Parameters,
): d_out.Type<_pi.Deprecated_Source_Location> => t.group({
    "values": t.group($.values.map(($): d_out.Type<_pi.Deprecated_Source_Location> => {
        const temp_2 = r_Type_Reference($['data type'], { 'component sub part': _p.list.literal([]) })

        return _p.cc($.presence, ($) => {
            switch ($[0]) {
                case 'optional': return t.optional(temp_2)
                case 'required': return temp_2
                default: return _p.au($[0])
            }
        })
    })),
    "lookups": t.group($.lookups.map(($): d_out.Type<_pi.Deprecated_Source_Location> => {
        const x = $.referent
        return _p.cc($.type, ($) => {
            switch ($[0]) {
                case 'acyclic': return _p.ss($, ($) => t.component_imported("resolve", "Acyclic Lookup", {
                    "T": r_Type_Reference(x, { 'component sub part': _p.list.literal([sub.dictionary()]) }),
                }, []))
                case 'cyclic': return _p.ss($, ($) => t.component_imported("resolve", "Cyclic Lookup", {
                    "T": r_Type_Reference(x, { 'component sub part': _p.list.literal([sub.dictionary()]) }),

                }, []))
                case 'stack': return _p.ss($, ($) => t.component_imported("resolve", "Lookup Stack", {
                    "T": r_Type_Reference(x, { 'component sub part': _p.list.literal([sub.dictionary()]) }),

                }, []))
                default: return _p.au($[0])
            }
        })
    }))
})