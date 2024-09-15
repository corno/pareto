import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'

import { createResolveContext } from "./resolveImps"

import * as g_this from "../glossary"
import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"

import { A, D } from "../api.generated"

// function mapResultOptional<T, RT, Result>(
//     $: pt.OptionalValue<T>,
//     res: Result,
//     a: ($: ReturningType<T, Result>) => ReturningType<RT, Result>,
// ): ReturningType<pt.OptionalValue<RT>, Result> {
//     return pl.optional(
//         $,
//         ($): ReturningType<pt.OptionalValue<RT>, Result> => {
//             const out = a({
//                 'content': $,
//                 'result': res,
//             })
//             return {
//                 'content': [true, out.content],
//                 'result': out.result
//             }
//         },
//         () => ({
//             'result': res,
//             'content': [false]
//         })
//     )
// }


// type ReturningType<T, RT> = {
//     'content': T,
//     'result': RT,
// }



export const $$: A.resolve = <Annotation>($d: D.resolve<Annotation>, $se: {
    readonly 'onError': g_this.SYNC.I.OnError<Annotation>
}) => {
    return ($: g_this.T.Resolve__Parameters<Annotation>) => {
        return createResolveContext($d, {}).Root($.root)
    }
}