import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../../submodules/pareto_new/interface/schemas/value_reference.js"
import type * as s_tr from "../../submodules/pareto_new/interface/schemas/type_reference.js"

export const value_reference = (
    type: s_tr.Type_Reference,
    sub_selection: p_.Normal_List<s_out.Value_Reference.sub_selectionL>,
): s_out.Value_Reference => ({
    'type': type,
    'sub selection': p_.list(sub_selection),
})

export namespace sub {

    export const dictionary = (): s_out.Value_Reference.sub_selectionL => ['dictionary', null]

    export const group = (
        property: string,
    ): s_out.Value_Reference.sub_selectionL => ['group', {
        'property': property,
    }]

    export const list = (): s_out.Value_Reference.sub_selectionL => ['list', null]

    export const optional = (): s_out.Value_Reference.sub_selectionL => ['optional', null]

    export const state = (
        option: string,
    ): s_out.Value_Reference.sub_selectionL => ['state', {
        'option': option,
    }]

}
