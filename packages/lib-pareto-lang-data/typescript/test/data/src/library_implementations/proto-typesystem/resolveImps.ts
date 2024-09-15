// import * as pl from 'pareto-core-lib'
// import * as pt from 'pareto-core-types'
// import * as pm from 'pareto-core-map'

// import * as select from "./selectImp"

// import * as g_resolve from "res-pareto-resolve"

// import * as xx from "./Resolve"


// import * as g_this from "../../typesystem"

// import Out = g_this.proto__typesystem.Resolved.T
// import Resolve = g_this.proto__typesystem.Resolve

// type Reference<T> = {
//     'referent': T,
//     'key': string
// }

// function mapOptional<T, RT>(
//     $: pt.OptionalValue<T>,
//     a: ($: T) => RT,
// ): pt.OptionalValue<RT> {
//     return pl.optional(
//         $,
//         ($): pt.OptionalValue<RT> => {
//             return [true, a($)]
//         },
//         () => [false]
//     )
// }


// export type Error = {
//     //readonly 'annotation': GAnnotation
//     readonly 'message':
//     | ['no such entry', {
//         readonly 'key': string
//     }]
//     | ['not the right state', {
//         readonly 'expected': string
//         readonly 'found': string
//     }]
// }


// type MergeParameters<TType> = {
//     readonly 'primary': pt.Dictionary<TType>;
//     readonly 'secondary': pt.Dictionary<TType>;
// };

// export function resolved(
//     $d: {
//         readonly resolveDictionary: g_resolve.SYNC.A.F.SafeResolveDictionary;
//         readonly mergeAndIgnore: <TType>($: MergeParameters<TType>) => pt.Dictionary<TType>
//     },
//     $se: {
//         readonly 'onError': ($: Error) => void
//     }
// ): xx.Res {

//     function getEntry<T, Annotation>($: pt.Lookup<T>, key: string, annotation: Annotation): T {
//         return $.__getEntry(
//             key,
//             ($) => $,
//             () => {
//                 // let keys = ""
//                 // $.__forEach(() => false, ($, key) => {
//                 //     keys += `${key}, `
//                 // })
//                 //pl.panic(`No Such Entry%% ${key} (${keys})`)
//                 $se.onError({
//                     //'annotation': annotation,
//                     'message': ['no such entry', {
//                         'key': key
//                     }]
//                 })
//                 return pl.panic(`No Such EntryXX: ${key}`)
//             }
//         )
//     }

//     function getAnnotatedEntry<T, Annotation>($: pt.Lookup<T>, key: {
//         'referent': Annotation,
//         'key': string
//     }): Reference<T> {
//         return {
//             'key': key.key,
//             'referent': getEntry($, key.key, key.referent)
//         }
//     }

//     ///////////////////////////////////////////////////////////////
//     const Function__Declaration: Resolve.Function__Declaration = ($, $p) => {
//         const $tp = Type__Parameters(
//             $['type parameters'],
//             {
//                 'parent type parameters': [true, $p['type parameters']]
//             }
//         )
//         return {
//             'type parameters': $tp,
//             'context': Type(
//                 $.context,
//                 {
//                     'resolved namespaces': $p['resolved namespaces'],
//                     'cyclic sibling types': $p['cyclic sibling types'],
//                     'resolved sibling types': $p['resolved sibling types'],
//                     'type parameters': $tp.aggregated
//                 },
//             ),
//             'parameters': $.parameters.map(($) => Type(
//                 $,
//                 {
//                     'resolved namespaces': $p['resolved namespaces'],
//                     'cyclic sibling types': $p['cyclic sibling types'],
//                     'resolved sibling types': $p['resolved sibling types'],
//                     'type parameters': $tp.aggregated
//                 },
//             ))
//         }
//     }

//     const Local__Namespace: Resolve.Local__Namespace = ($, $p) => {
//         const $v_parameters = Type__Parameters(
//             $.parameters,
//             {
//                 'parent type parameters': $p['parent type parameters'],
//             }
//         )
//         const v_namespaces: Out.Local__Namespace.namespaces.$ = $d.resolveDictionary($.namespaces, {
//             'map': ($, $l): Out.Local__Namespace.namespaces.D.$ => {
//                 return pl.cc($.value, ($) => {

//                     switch ($[0]) {
//                         case 'local': return pl.ss($, ($): Out.Local__Namespace.namespaces.D.$ => ['local', Local__Namespace(
//                             $,
//                             {
//                                 'resolved sibling namespaces': [true, $l['non circular siblings']],
//                                 'parent type parameters': [true, $v_parameters.aggregated],
//                             }
//                         )])
//                         case 'parent sibling': return pl.ss($, ($): Out.Local__Namespace.namespaces.D.$ => ['parent sibling', pl.cc($, ($): Out.Namespace__2.parent__sibling.$ => {
//                             const x = $.namespace

//                             function mapOptional2NonOptional<T, RT>(
//                                 $: pt.OptionalValue<T>,
//                                 a: ($: T) => RT,
//                             ): RT {
//                                 return pl.optional($, ($): RT => a($), () => pl.panic("SFSDSFDF"))
//                             }
//                             return {
//                                 'namespace': mapOptional2NonOptional(
//                                     $p['resolved sibling namespaces'],
//                                     ($) => getAnnotatedEntry($, x),
//                                 )
//                             }

//                         })])
//                         default: return pl.au($[0])
//                     }
//                 })
//             }
//         })
//         return {
//             'parameters': $v_parameters,
//             'namespaces': v_namespaces,
//             'types': $d.resolveDictionary($.types, {
//                 'map': (($, $l) => Type($.value, {
//                     'resolved namespaces': v_namespaces,
//                     'cyclic sibling types': $l['all siblings'],
//                     'resolved sibling types': $l['non circular siblings'],
//                     'type parameters': $v_parameters.aggregated,
//                 }))
//             })
//         }
//     }

//     const Type: Resolve.Type = ($, $p) => {
//         switch ($[0]) {
//             case 'address function': return pl.ss($, ($) => {
//                 const $v_fd = Function__Declaration(
//                     $.declaration,
//                     $p,
//                 )
//                 return ['address function', {
//                     'declaration': $v_fd,
//                     'return type': Type($['return type'], {
//                         'cyclic sibling types': $p['cyclic sibling types'],
//                         'resolved namespaces': $p['resolved namespaces'],
//                         'resolved sibling types': $p['resolved sibling types'],
//                         'type parameters': $v_fd['type parameters'].aggregated
//                     })
//                 }]
//             })
//             case 'array': return pl.ss($, ($) => ['array', Type($, $p)])
//             case 'boolean': return pl.ss($, ($) => ['boolean', null])
//             case 'computed': return pl.ss($, ($) => ['computed', Type($, $p)])
//             case 'dictionary': return pl.ss($, ($) => ['dictionary', Type($, $p)])
//             case 'group': return pl.ss($, ($) => ['group', $.map(($) => ({
//                 'type': Type($.type, $p),
//                 'mutable': $.mutable,
//             }))])
//             //case 'lookup': return pl.ss($, ($) => ['lookup', Type($, $p)])

//             case 'null': return pl.ss($, ($) => ['null', null])
//             case 'number': return pl.ss($, ($) => ['number', null])
//             case 'optional': return pl.ss($, ($) => ['optional', Type($, $p)])
//             case 'procedure': return pl.ss($, ($) => ['procedure', {
//                 'declaration': Function__Declaration(
//                     $.declaration,
//                     $p,
//                 )
//             }])
//             case 'string': return pl.ss($, ($) => ['string', null])
//             case 'tagged union': return pl.ss($, ($) => ['tagged union', $.map(($) => Type($, $p))])
//             case 'type parameter': return pl.ss($, ($) => ['type parameter', getAnnotatedEntry($p['type parameters'], $)])
//             case 'type reference': return pl.ss($, ($) => ['type reference', pl.cc($, ($): Out.TType.type__reference.$ => {
//                 switch ($[0]) {
//                     case 'cyclic sibling': return pl.ss($, ($) => ['cyclic sibling', getAnnotatedEntry($p['cyclic sibling types'], $)])
//                     case 'external': return pl.ss($, ($) => {
//                         const v_namespaces = Namespace__Selection(
//                             $.namespaces,
//                             {
//                                 'resolved namespaces': $p['resolved namespaces'],
//                                 'cyclic sibling types': $p['cyclic sibling types'],
//                                 'resolved sibling types': $p['resolved sibling types'],
//                                 'type parameters': $p['type parameters'],
//                             }
//                         )
//                         return ['external', {
//                             'namespaces': v_namespaces,

//                             'type': getAnnotatedEntry(
//                                 select.selectLocalNSFromNS2(select.Namespace__Selection(v_namespaces)).types,
//                                 $.type,
//                             ),
//                         }]
//                     })
//                     case 'sibling': return pl.ss($, ($) => ['sibling', getAnnotatedEntry($p['resolved sibling types'], $)])
//                     default: return pl.au($[0])
//                 }
//             })
//             ])
//             case 'value function': return pl.ss($, ($) => {
//                 const $v_fd = Function__Declaration(
//                     $.declaration,
//                     $p,
//                 )
//                 return ['value function', {
//                     'declaration': $v_fd,
//                     'return type': Type($['return type'], {
//                         'cyclic sibling types': $p['cyclic sibling types'],
//                         'resolved namespaces': $p['resolved namespaces'],
//                         'resolved sibling types': $p['resolved sibling types'],
//                         'type parameters': $v_fd['type parameters'].aggregated
//                     })
//                 }]
//             })
//             default: return pl.au($[0])
//         }
//     }

//     const Type__Parameters: Resolve.Type__Parameters = ($, $p) => {
//         return {
//             'local': $.local.map(($) => null),
//             'aggregated': $d.mergeAndIgnore({
//                 'primary': $.local,
//                 'secondary': pl.optional(
//                     $p['parent type parameters'],
//                     ($) => $,
//                     () => pm.wrapRawDictionary({}),
//                 )
//             }).map(($) => null)
//         }
//     }


//     const Namespace__Selection: Resolve.Namespace__Selection = ($, $p) => {
//         const v_namespace = getAnnotatedEntry($p['resolved namespaces'], $.namespace)

//         const v_tail = mapOptional(
//             $.tail,
//             //getLocalNamespace(v_namespace.referent),
//             ($) => Namespace__Selection($, {
//                 'resolved namespaces': select.selectLocalNSFromNS2(v_namespace.referent).namespaces,
//                 'cyclic sibling types': $p['cyclic sibling types'],
//                 'resolved sibling types': $p['resolved sibling types'],
//                 'type parameters': $p['type parameters'],
//             }),
//         )
//         return {
//             'namespace': v_namespace,
//             'arguments': $.arguments.__mapWithKey<Out.TType__Arguments.D.$>(($, key) => {
//                 return {
//                     'type': Type(
//                         $.type,
//                         {
//                             'resolved namespaces': $p['resolved namespaces'],
//                             'cyclic sibling types': $p['cyclic sibling types'],
//                             'resolved sibling types': $p['resolved sibling types'],
//                             'type parameters': $p['type parameters'],
//                         }
//                     ),
//                     // 'constraints': {
//                     //     'parameter': getEntry(
//                     //         select.selectLocalNSFromNS2(v_namespace.referent).parameters.local,
//                     //         key,
//                     //         $.annotation,
//                     //     )
//                     // },
//                     // 'content': {
//                     // }
//                 }
//             }),
//             'tail': v_tail
//         }
//     }
//     return {
//         Function__Declaration: Function__Declaration,
//         Local__Namespace: Local__Namespace,
//     }
// }