import * as p_di from 'pareto-core/schema'
import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../schema.js"


export namespace sr {

    // export const child = (
    //     module: string,
    //     schema: string,
    // ): s_out.Schema_Reference => ['child', {
    //     'module': module,
    //     'schema': schema,
    // }]

    export const sibling = (
        schema: string,
    ): s_out.Schema_Reference => ['sibling', schema]

    export const external = (
        pkg: string,
        module: string, 
        schema: string,
    ): s_out.Schema_Reference => ['external', {
        'package': pkg,
        'module': module,
        'schema': schema,
    }]

}


export const type_reference = (
    type: string,
): s_out.Type_Reference => ({
    'type': type,
})

export const value_reference = (
    type: string,
    sub_selection: p_.Normal_List<s_out.Value_Reference.subselection.L>,
): s_out.Value_Reference => ({
    'type': type,
    'subselection': p_.list(sub_selection),
})

export namespace vsp {

    export const dictionary = (): s_out.Value_Reference.subselection.L => ['dictionary', null]

    export const group = (
        property: string,
    ): s_out.Value_Reference.subselection.L => ['group', {
        'property': property,
    }]

    export const list = (): s_out.Value_Reference.subselection.L => ['list', null]

    export const optional = (): s_out.Value_Reference.subselection.L => ['optional', null]

    export const state = (
        option: string,
    ): s_out.Value_Reference.subselection.L => ['state', {
        'option': option,
    }]

}
