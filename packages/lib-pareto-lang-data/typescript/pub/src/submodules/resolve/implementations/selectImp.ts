import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as tmp from 'pareto-core-internals'

function optional<T, R>(
    $: pt.RawOptionalValue<T>,
    set: ($: T) => R,
    notSet: () => R,
): R {
    return tmp.wrapRawOptionalValue($).map(set, notSet)
}

import * as Select from "./Select"

export const Type__Selection: Select.Type__Selection = ($) => {
    return optional(
        $.tail,
        ($) => Type__Selection__Tail($),
        () => $['global type'].referent.type
    )
}

// export const Variable: Select.Variable = ($) => {
//     switch ($[0]) {
//         case 'parent variable': return pl.ss($, ($) => Variable($.referent))
//         case 'parameter': return pl.ss($, ($) => $['resolved value'].referent())
//         // case '': return pl.ss($, ($) => pd.implementMe(`case`))
//         // case '': return pl.ss($, ($) => pd.implementMe(`case`))
//         default: return pl.au($[0])
//     }
// }

export const Global__Type__Selection: Select.Global_Type__Selection = ($) => {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'cyclic sibling': return pl.ss($, ($) => pl.panic("CYCLIC SIBLING SHOULD NOT BE SUPPORTED"))
            case 'import': return pl.ss($, ($) => $.type.referent.type)
            case 'resolved sibling': return pl.ss($, ($) => $.type.referent.type)
            default: return pl.au($[0])
        }
    })
}

export const Type__Selection__Tail: Select.Type__Selection__Tail = ($) => {
    return pl.cc($['step type'], ($) => {
        switch ($[0]) {
            case 'array': return pl.ss($, ($) => optional(
                $.tail,
                ($) => Type__Selection__Tail($),
                () => $.array.type)
            )
            case 'dictionary': return pl.ss($, ($) => optional(
                $.tail,
                ($) => Type__Selection__Tail($),
                () => $.dictionary.type)
            )
            case 'group': return pl.ss($, ($) => optional(
                $.tail,
                ($) => Type__Selection__Tail($),
                () => $.property.referent.type)
            )
            case 'optional': return pl.ss($, ($) => optional(
                $.tail,
                ($) => Type__Selection__Tail($),
                () => $.optional.type)
            )
            case 'state group': return pl.ss($, ($) => optional(
                $.tail,
                ($) => Type__Selection__Tail($),
                () => $['state'].referent.type)
            )
            default: return pl.au($[0])
        }
    })
}