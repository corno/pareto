import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

//import * as Select from "./Select"


import * as g_this from "../../typesystem"

import Out = g_this.proto__typesystem.Resolved.T
import Select = g_this.proto__typesystem.Resolve.selectors

export const selectLocalNSFromNS2: Select.Nested__Namespace = ($) => {
    return $.namespace
}

export const Namespace__Selection: Select.Namespace__Selection = ($) =>{
    return pl.cc($.start, ($) => {
        switch ($[0]) {
            case 'import': return pl.ss($, ($) => pd.implementMe("SDFSDF"))
            case 'local': return pl.ss($, ($) => pd.implementMe(`case`))
            default: return pl.au($[0])
        }
    })
    // return pl.optional(
    //     $.tail,
    //     ($) => Namespace__Selection($),
    //     () => $.namespace.referent
    // )
} 