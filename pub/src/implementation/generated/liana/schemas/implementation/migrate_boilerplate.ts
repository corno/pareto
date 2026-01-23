
// import * as _p from "pareto-core/dist/transformer"

// import * as t_signatures from "../../../../../interface/generated/liana/schemas/implementation/migrate_boilerplate"

// import * as t_out from "../../../../../interface/generated/liana/schemas/implementation/data/unresolved"

// import * as v_interface from "../interface/migrate_boilerplate"
// export const Type_Reference: t_signatures.Type_Reference = ($) => ({
//     'import': _p.deprecated_cc($['import'], ($) => $),
//     'type': _p.deprecated_cc($['type'], ($) => $),
// })
// export const Module: t_signatures.Module = ($) => ({
//     'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Module.type_ => {
//         switch ($[0]) {
//             case 'serializer': return _p.ss($, ($) => ['serializer', null])
//             case 'deserializer': return _p.ss($, ($) => ['deserializer', null])
//             case 'transformer': return _p.ss($, ($) => ['transformer', null])
//             case 'refiner': return _p.ss($, ($) => ['refiner', null])
//             default: return _p.au($[0])
//         }
//     })),
//     'type imports': _p.deprecated_cc($['type imports'], ($) => v_interface.Imports(
//         $
//     )),
//     'variable imports': _p.deprecated_cc($['variable imports'], ($) => $.__d_map(($) => ({
//         'tail': _p.deprecated_cc($['tail'], ($) => $.__l_map(($) => $)),
//         'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Module.variable_imports.D.type_ => {
//             switch ($[0]) {
//                 case 'ancestor': return _p.ss($, ($) => ['ancestor', ({
//                     'dependency': _p.deprecated_cc($['dependency'], ($) => $),
//                     'number of steps': _p.deprecated_cc($['number of steps'], ($) => $),
//                 })])
//                 case 'external': return _p.ss($, ($) => ['external', $])
//                 case 'sibling': return _p.ss($, ($) => ['sibling', $])
//                 default: return _p.au($[0])
//             }
//         })),
//     }))),
//     'algorithms': _p.deprecated_cc($['algorithms'], ($) => $.__d_map(($) => ({
//         'type': _p.deprecated_cc($['type'], ($) => Type_Reference(
//             $
//         )),
//         'expression': _p.deprecated_cc($['expression'], ($) => Expression(
//             $
//         )),
//         'temp has abort': _p.deprecated_cc($['temp has abort'], ($) => $),
//         'temp has lookups': _p.deprecated_cc($['temp has lookups'], ($) => $),
//         'temp has parameters': _p.deprecated_cc($['temp has parameters'], ($) => $),
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
// export const Type_Node_Reference: t_signatures.Type_Node_Reference = ($) => ({
//     'type': _p.deprecated_cc($['type'], ($) => Type_Reference(
//         $
//     )),
//     'sub selection': _p.deprecated_cc($['sub selection'], ($) => $.__l_map(($) => _p.deprecated_cc($, ($): t_out.Type_Node_Reference.sub_selection.L => {
//         switch ($[0]) {
//             case 'dictionary': return _p.ss($, ($) => ['dictionary', null])
//             case 'group': return _p.ss($, ($) => ['group', $])
//             case 'list': return _p.ss($, ($) => ['list', null])
//             case 'optional': return _p.ss($, ($) => ['optional', null])
//             case 'state group': return _p.ss($, ($) => ['state group', $])
//             default: return _p.au($[0])
//         }
//     }))),
// })
// export const Expression: t_signatures.Expression = ($) => _p.deprecated_cc($, ($): t_out.Expression => {
//     switch ($[0]) {
//         case 'special': return _p.ss($, ($) => ['special', _p.deprecated_cc($, ($): t_out.Expression.special => {
//             switch ($[0]) {
//                 case 'abort': return _p.ss($, ($) => ['abort', Expression(
//                     $
//                 )])
//                 case 'block': return _p.ss($, ($) => ['block', ({
//                     'variables': _p.deprecated_cc($['variables'], ($) => $.__d_map(($) => ({
//                         'type': _p.deprecated_cc($['type'], ($) => $.__o_map(($) => Type_Node_Reference(
//                             $
//                         ))),
//                         'expression': _p.deprecated_cc($['expression'], ($) => Expression(
//                             $
//                         )),
//                     }))),
//                     'temp ordered variables': _p.deprecated_cc($['temp ordered variables'], ($) => $.__l_map(($) => ({
//                         'name': _p.deprecated_cc($['name'], ($) => $),
//                         'type': _p.deprecated_cc($['type'], ($) => $.__o_map(($) => Type_Node_Reference(
//                             $
//                         ))),
//                         'expression': _p.deprecated_cc($['expression'], ($) => Expression(
//                             $
//                         )),
//                     }))),
//                     'expression': _p.deprecated_cc($['expression'], ($) => Expression(
//                         $
//                     )),
//                 })])
//                 case 'change context': return _p.ss($, ($) => ['change context', ({
//                     'new context': _p.deprecated_cc($['new context'], ($) => Selection(
//                         $
//                     )),
//                     'expression': _p.deprecated_cc($['expression'], ($) => Expression(
//                         $
//                     )),
//                 })])
//                 case 'implement me': return _p.ss($, ($) => ['implement me', null])
//                 case 'selection deprecated': return _p.ss($, ($) => ['selection deprecated', Selection(
//                     $
//                 )])
//                 case 'unreachable': return _p.ss($, ($) => ['unreachable', null])
//                 case 'deprecated function': return _p.ss($, ($) => ['deprecated function', ({
//                     'expression': _p.deprecated_cc($['expression'], ($) => Expression(
//                         $
//                     )),
//                     'temp has parameters': _p.deprecated_cc($['temp has parameters'], ($) => $),
//                     'temp resulting node': _p.deprecated_cc($['temp resulting node'], ($) => $.__o_map(($) => Type_Node_Reference(
//                         $
//                     ))),
//                 })])
//                 default: return _p.au($[0])
//             }
//         })])
//         case 'initialize': return _p.ss($, ($) => ['initialize', _p.deprecated_cc($, ($): t_out.Expression.initialize => {
//             switch ($[0]) {
//                 case 'boolean': return _p.ss($, ($) => ['boolean', _p.deprecated_cc($, ($): t_out.Expression.initialize.boolean_ => {
//                     switch ($[0]) {
//                         case 'literal': return _p.ss($, ($) => ['literal', _p.deprecated_cc($, ($): t_out.Expression.initialize.boolean_.literal => {
//                             switch ($[0]) {
//                                 case 'false': return _p.ss($, ($) => ['false', null])
//                                 case 'true': return _p.ss($, ($) => ['true', null])
//                                 default: return _p.au($[0])
//                             }
//                         })])
//                         case 'not': return _p.ss($, ($) => ['not', Selection(
//                             $
//                         )])
//                         default: return _p.au($[0])
//                     }
//                 })])
//                 case 'component': return _p.ss($, ($) => ['component', _p.deprecated_cc($, ($): t_out.Expression.initialize.component => {
//                     switch ($[0]) {
//                         case 'call': return _p.ss($, ($) => ['call', ({
//                             'source': _p.deprecated_cc($['source'], ($) => Selection(
//                                 $
//                             )),
//                             'context': _p.deprecated_cc($['context'], ($) => Expression(
//                                 $
//                             )),
//                             'arguments': _p.deprecated_cc($['arguments'], ($) => $.__o_map(($) => $.__d_map(($) => Expression(
//                                 $
//                             )))),
//                             'abort': _p.deprecated_cc($['abort'], ($) => $),
//                         })])
//                         default: return _p.au($[0])
//                     }
//                 })])
//                 case 'dictionary': return _p.ss($, ($) => ['dictionary', _p.deprecated_cc($, ($): t_out.Expression.initialize.dictionary => {
//                     switch ($[0]) {
//                         case 'literal': return _p.ss($, ($) => ['literal', $.__d_map(($) => Expression(
//                             $
//                         ))])
//                         case 'map': return _p.ss($, ($) => ['map', ({
//                             'source': _p.deprecated_cc($['source'], ($) => Selection(
//                                 $
//                             )),
//                             'entry handler': _p.deprecated_cc($['entry handler'], ($) => Expression(
//                                 $
//                             )),
//                         })])
//                         default: return _p.au($[0])
//                     }
//                 })])
//                 case 'group': return _p.ss($, ($) => ['group', $.__d_map(($) => Expression(
//                     $
//                 ))])
//                 case 'list': return _p.ss($, ($) => ['list', _p.deprecated_cc($, ($): t_out.Expression.initialize.list => {
//                     switch ($[0]) {
//                         case 'literal': return _p.ss($, ($) => ['literal', $.__l_map(($) => Expression(
//                             $
//                         ))])
//                         case 'map': return _p.ss($, ($) => ['map', ({
//                             'source': _p.deprecated_cc($['source'], ($) => Selection(
//                                 $
//                             )),
//                             'element handler': _p.deprecated_cc($['element handler'], ($) => Expression(
//                                 $
//                             )),
//                         })])
//                         default: return _p.au($[0])
//                     }
//                 })])
//                 case 'nothing': return _p.ss($, ($) => ['nothing', null])
//                 case 'number': return _p.ss($, ($) => ['number', _p.deprecated_cc($, ($): t_out.Expression.initialize.number_ => {
//                     switch ($[0]) {
//                         case 'approximation': return _p.ss($, ($) => ['approximation', _p.deprecated_cc($, ($): t_out.Expression.initialize.number_.approximation => {
//                             switch ($[0]) {
//                                 case 'literal': return _p.ss($, ($) => ['literal', $])
//                                 default: return _p.au($[0])
//                             }
//                         })])
//                         case 'integer': return _p.ss($, ($) => ['integer', _p.deprecated_cc($, ($): t_out.Expression.initialize.number_.integer => {
//                             switch ($[0]) {
//                                 case 'literal': return _p.ss($, ($) => ['literal', $])
//                                 default: return _p.au($[0])
//                             }
//                         })])
//                         case 'natural': return _p.ss($, ($) => ['natural', _p.deprecated_cc($, ($): t_out.Expression.initialize.number_.natural => {
//                             switch ($[0]) {
//                                 case 'literal': return _p.ss($, ($) => ['literal', $])
//                                 default: return _p.au($[0])
//                             }
//                         })])
//                         default: return _p.au($[0])
//                     }
//                 })])
//                 case 'optional': return _p.ss($, ($) => ['optional', _p.deprecated_cc($, ($): t_out.Expression.initialize.optional => {
//                     switch ($[0]) {
//                         case 'literal': return _p.ss($, ($) => ['literal', _p.deprecated_cc($, ($): t_out.Expression.initialize.optional.literal => {
//                             switch ($[0]) {
//                                 case 'not set': return _p.ss($, ($) => ['not set', null])
//                                 case 'set': return _p.ss($, ($) => ['set', Expression(
//                                     $
//                                 )])
//                                 default: return _p.au($[0])
//                             }
//                         })])
//                         case 'map': return _p.ss($, ($) => ['map', ({
//                             'source': _p.deprecated_cc($['source'], ($) => Selection(
//                                 $
//                             )),
//                             'set handler': _p.deprecated_cc($['set handler'], ($) => Expression(
//                                 $
//                             )),
//                         })])
//                         default: return _p.au($[0])
//                     }
//                 })])
//                 case 'state group': return _p.ss($, ($) => ['state group', _p.deprecated_cc($, ($): t_out.Expression.initialize.state_group => {
//                     switch ($[0]) {
//                         case 'literal': return _p.ss($, ($) => ['literal', ({
//                             'state': _p.deprecated_cc($['state'], ($) => $),
//                             'value': _p.deprecated_cc($['value'], ($) => Expression(
//                                 $
//                             )),
//                         })])
//                         default: return _p.au($[0])
//                     }
//                 })])
//                 case 'text': return _p.ss($, ($) => ['text', _p.deprecated_cc($, ($): t_out.Expression.initialize.text => {
//                     switch ($[0]) {
//                         case 'literal': return _p.ss($, ($) => ['literal', ({
//                             'delimiter': _p.deprecated_cc($['delimiter'], ($) => _p.deprecated_cc($, ($): t_out.Expression.initialize.text.literal.delimiter => {
//                                 switch ($[0]) {
//                                     case 'backtick': return _p.ss($, ($) => ['backtick', null])
//                                     case 'quote': return _p.ss($, ($) => ['quote', null])
//                                     default: return _p.au($[0])
//                                 }
//                             })),
//                             'value': _p.deprecated_cc($['value'], ($) => $),
//                         })])
//                         default: return _p.au($[0])
//                     }
//                 })])
//                 default: return _p.au($[0])
//             }
//         })])
//         case 'decide': return _p.ss($, ($) => ['decide', ({
//             'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Expression.decide.type_ => {
//                 switch ($[0]) {
//                     case 'boolean': return _p.ss($, ($) => ['boolean', ({
//                         'source': _p.deprecated_cc($['source'], ($) => Selection(
//                             $
//                         )),
//                         'temp resulting node': _p.deprecated_cc($['temp resulting node'], ($) => $.__o_map(($) => Type_Node_Reference(
//                             $
//                         ))),
//                         'if false': _p.deprecated_cc($['if false'], ($) => Expression(
//                             $
//                         )),
//                         'if true': _p.deprecated_cc($['if true'], ($) => Expression(
//                             $
//                         )),
//                     })])
//                     case 'optional': return _p.ss($, ($) => ['optional', ({
//                         'source': _p.deprecated_cc($['source'], ($) => Selection(
//                             $
//                         )),
//                         'temp resulting node': _p.deprecated_cc($['temp resulting node'], ($) => $.__o_map(($) => Type_Node_Reference(
//                             $
//                         ))),
//                         'if not set': _p.deprecated_cc($['if not set'], ($) => Expression(
//                             $
//                         )),
//                         'if set': _p.deprecated_cc($['if set'], ($) => Expression(
//                             $
//                         )),
//                     })])
//                     case 'state group': return _p.ss($, ($) => ['state group', ({
//                         'source': _p.deprecated_cc($['source'], ($) => Selection(
//                             $
//                         )),
//                         'temp resulting node': _p.deprecated_cc($['temp resulting node'], ($) => $.__o_map(($) => Type_Node_Reference(
//                             $
//                         ))),
//                         'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Expression.decide.type_.state_group.type_ => {
//                             switch ($[0]) {
//                                 case 'partial': return _p.ss($, ($) => ['partial', ({
//                                     'cases': _p.deprecated_cc($['cases'], ($) => $.__d_map(($) => Expression(
//                                         $
//                                     ))),
//                                     'default': _p.deprecated_cc($['default'], ($) => Expression(
//                                         $
//                                     )),
//                                 })])
//                                 case 'full': return _p.ss($, ($) => ['full', ({
//                                     'cases': _p.deprecated_cc($['cases'], ($) => $.__d_map(($) => Expression(
//                                         $
//                                     ))),
//                                 })])
//                                 default: return _p.au($[0])
//                             }
//                         })),
//                     })])
//                     default: return _p.au($[0])
//                 }
//             })),
//         })])
//         default: return _p.au($[0])
//     }
// })
// export const Abort_Expression: t_signatures.Abort_Expression = ($) => _p.deprecated_cc($, ($): t_out.Abort_Expression => {
//     switch ($[0]) {
//         case 'current': return _p.ss($, ($) => ['current', null])
//         case 'new': return _p.ss($, ($) => ['new', Expression(
//             $
//         )])
//         default: return _p.au($[0])
//     }
// })
// export const Selection: t_signatures.Selection = ($) => ({
//     'start': _p.deprecated_cc($['start'], ($) => _p.deprecated_cc($, ($): t_out.Selection.start => {
//         switch ($[0]) {
//             case 'implement me': return _p.ss($, ($) => ['implement me', null])
//             case 'abort deprecated': return _p.ss($, ($) => ['abort deprecated', null])
//             case 'argument': return _p.ss($, ($) => ['argument', $])
//             case 'call': return _p.ss($, ($) => ['call', ({
//                 'source': _p.deprecated_cc($['source'], ($) => Selection(
//                     $
//                 )),
//                 'context': _p.deprecated_cc($['context'], ($) => Selection(
//                     $
//                 )),
//                 'arguments': _p.deprecated_cc($['arguments'], ($) => $.__o_map(($) => $.__d_map(($) => Expression(
//                     $
//                 )))),
//             })])
//             case 'context': return _p.ss($, ($) => ['context', null])
//             case 'entry': return _p.ss($, ($) => ['entry', ({
//                 'dictionary': _p.deprecated_cc($['dictionary'], ($) => Selection(
//                     $
//                 )),
//                 'key': _p.deprecated_cc($['key'], ($) => Selection(
//                     $
//                 )),
//                 'abort handler': _p.deprecated_cc($['abort handler'], ($) => Abort_Expression(
//                     $
//                 )),
//             })])
//             case 'variable': return _p.ss($, ($) => ['variable', _p.deprecated_cc($, ($): t_out.Selection.start.variable => {
//                 switch ($[0]) {
//                     case 'local': return _p.ss($, ($) => ['local', $])
//                     case 'imported': return _p.ss($, ($) => ['imported', ({
//                         'import': _p.deprecated_cc($['import'], ($) => $),
//                         'variable': _p.deprecated_cc($['variable'], ($) => $),
//                     })])
//                     default: return _p.au($[0])
//                 }
//             })])
//             case 'parameter': return _p.ss($, ($) => ['parameter', $])
//             default: return _p.au($[0])
//         }
//     })),
//     'tail': _p.deprecated_cc($['tail'], ($) => $.__l_map(($) => $)),
// })
