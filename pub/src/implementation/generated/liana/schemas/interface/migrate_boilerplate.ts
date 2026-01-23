
// import * as _p from "pareto-core/dist/transformer"

// import * as t_signatures from "../../../../../interface/generated/liana/schemas/interface/migrate_boilerplate"

// import * as t_out from "../../../../../interface/generated/liana/schemas/interface/data/unresolved"
// export const Imports: t_signatures.Imports = ($) => $.__d_map(($) => ({
//     'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Imports.D.type_ => {
//         switch ($[0]) {
//             case 'external': return _p.ss($, ($) => ['external', $])
//             case 'ancestor': return _p.ss($, ($) => ['ancestor', ({
//                 'number of steps': _p.deprecated_cc($['number of steps'], ($) => $),
//                 'dependency': _p.deprecated_cc($['dependency'], ($) => $),
//             })])
//             case 'sibling': return _p.ss($, ($) => ['sibling', $])
//             default: return _p.au($[0])
//         }
//     })),
//     'tail': _p.deprecated_cc($['tail'], ($) => $.__l_map(($) => $)),
// }))
// export const Module: t_signatures.Module = ($) => ({
//     'imports': _p.deprecated_cc($['imports'], ($) => Imports(
//         $
//     )),
//     'types': _p.deprecated_cc($['types'], ($) => $.__d_map(($) => _p.deprecated_cc($, ($): t_out.Module.types.D => {
//         switch ($[0]) {
//             case 'data': return _p.ss($, ($) => ['data', Type(
//                 $
//             )])
//             case 'algorithm': return _p.ss($, ($) => ['algorithm', ({
//                 'result': _p.deprecated_cc($['result'], ($) => Type(
//                     $
//                 )),
//                 'context': _p.deprecated_cc($['context'], ($) => Type(
//                     $
//                 )),
//                 'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Module.types.D.algorithm.type_ => {
//                     switch ($[0]) {
//                         case 'transformer': return _p.ss($, ($) => ['transformer', null])
//                         case 'refiner': return _p.ss($, ($) => ['refiner', ({
//                             'error': _p.deprecated_cc($['error'], ($) => $.__o_map(($) => Type(
//                                 $
//                             ))),
//                             'lookups': _p.deprecated_cc($['lookups'], ($) => $.__o_map(($) => $.__d_map(($) => _p.deprecated_cc($, ($): t_out.Module.types.D.algorithm.type_.refiner.lookups.O.D => {
//                                 switch ($[0]) {
//                                     case 'acyclic': return _p.ss($, ($) => ['acyclic', Type(
//                                         $
//                                     )])
//                                     case 'cyclic': return _p.ss($, ($) => ['cyclic', Type(
//                                         $
//                                     )])
//                                     case 'stack': return _p.ss($, ($) => ['stack', Type(
//                                         $
//                                     )])
//                                     default: return _p.au($[0])
//                                 }
//                             })))),
//                         })])
//                         default: return _p.au($[0])
//                     }
//                 })),
//                 'parameters': _p.deprecated_cc($['parameters'], ($) => $.__o_map(($) => $.__d_map(($) => Type(
//                     $
//                 )))),
//             })])
//             default: return _p.au($[0])
//         }
//     }))),
// })
// export const Module_Set: t_signatures.Module_Set = ($) => $.__d_map(($) => _p.deprecated_cc($, ($): t_out.Module_Set.D => {
//     switch ($[0]) {
//         case 'module': return _p.ss($, ($) => ['module', Module(
//             $
//         )])
//         case 'set': return _p.ss($, ($) => ['set', Module_Set(
//             $
//         )])
//         default: return _p.au($[0])
//     }
// }))
// export const Type: t_signatures.Type = ($) => _p.deprecated_cc($, ($): t_out.Type => {
//     switch ($[0]) {
//         case 'boolean': return _p.ss($, ($) => ['boolean', null])
//         case 'component': return _p.ss($, ($) => ['component', ({
//             'location': _p.deprecated_cc($['location'], ($) => _p.deprecated_cc($, ($): t_out.Type.component.location => {
//                 switch ($[0]) {
//                     case 'import': return _p.ss($, ($) => ['import', ({
//                         'import': _p.deprecated_cc($['import'], ($) => $),
//                         'type': _p.deprecated_cc($['type'], ($) => $),
//                     })])
//                     case 'sibling': return _p.ss($, ($) => ['sibling', $])
//                     default: return _p.au($[0])
//                 }
//             })),
//         })])
//         case 'dictionary': return _p.ss($, ($) => ['dictionary', Type(
//             $
//         )])
//         case 'group': return _p.ss($, ($) => ['group', $.__d_map(($) => Type(
//             $
//         ))])
//         case 'list': return _p.ss($, ($) => ['list', Type(
//             $
//         )])
//         case 'nothing': return _p.ss($, ($) => ['nothing', null])
//         case 'number': return _p.ss($, ($) => ['number', _p.deprecated_cc($, ($): t_out.Type.number_ => {
//             switch ($[0]) {
//                 case 'exact': return _p.ss($, ($) => ['exact', _p.deprecated_cc($, ($): t_out.Type.number_.exact => {
//                     switch ($[0]) {
//                         case 'natural': return _p.ss($, ($) => ['natural', null])
//                         case 'integer': return _p.ss($, ($) => ['integer', null])
//                         default: return _p.au($[0])
//                     }
//                 })])
//                 case 'approximation': return _p.ss($, ($) => ['approximation', null])
//                 default: return _p.au($[0])
//             }
//         })])
//         case 'optional': return _p.ss($, ($) => ['optional', Type(
//             $
//         )])
//         case 'reference': return _p.ss($, ($) => ['reference', ({
//             'location': _p.deprecated_cc($['location'], ($) => _p.deprecated_cc($, ($): t_out.Type.reference.location => {
//                 switch ($[0]) {
//                     case 'import': return _p.ss($, ($) => ['import', ({
//                         'import': _p.deprecated_cc($['import'], ($) => $),
//                         'type': _p.deprecated_cc($['type'], ($) => $),
//                     })])
//                     case 'sibling': return _p.ss($, ($) => ['sibling', ({
//                         'sibling': _p.deprecated_cc($['sibling'], ($) => $),
//                         'circular dependent': _p.deprecated_cc($['circular dependent'], ($) => $),
//                     })])
//                     default: return _p.au($[0])
//                 }
//             })),
//             'sub selection': _p.deprecated_cc($['sub selection'], ($) => $.__l_map(($) => _p.deprecated_cc($, ($): t_out.Type.reference.sub_selection.L => {
//                 switch ($[0]) {
//                     case 'dictionary': return _p.ss($, ($) => ['dictionary', null])
//                     case 'group': return _p.ss($, ($) => ['group', $])
//                     case 'list': return _p.ss($, ($) => ['list', null])
//                     case 'optional': return _p.ss($, ($) => ['optional', null])
//                     case 'state group': return _p.ss($, ($) => ['state group', $])
//                     default: return _p.au($[0])
//                 }
//             }))),
//         })])
//         case 'state group': return _p.ss($, ($) => ['state group', $.__d_map(($) => Type(
//             $
//         ))])
//         case 'text': return _p.ss($, ($) => ['text', null])
//         default: return _p.au($[0])
//     }
// })
