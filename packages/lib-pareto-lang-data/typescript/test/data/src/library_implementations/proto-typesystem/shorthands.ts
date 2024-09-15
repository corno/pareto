// import * as pd from 'pareto-core-data'
// import * as pt from 'pareto-core-types'

// import * as g_this from "../../typesystem"

// import T = g_this.proto__typesystem.Unresolved.T

// function ref($: string) {
//     return {
//         'referent': pd.getLocationInfo(2),
//         'key': $,
//     }
// }

// function dict<T>($: RawDictionary<T>): pt.Dictionary<T> {
//     return pd.d($)
// }

// type RawDictionary<T> = { [key: string]: T }

// ///////////////////////////////////////////////////////////

// export function ns(
//     namespaces: RawDictionary<T.Local__Namespace.namespaces.D.$<pd.SourceLocation>>,
//     typeParameters: RawDictionary<T.TType__Parameters.local.D.$<pd.SourceLocation>>,
//     types: RawDictionary<T.TType.$<pd.SourceLocation>>
// ): T.Local__Namespace.$<pd.SourceLocation> {
//     return {
//         'namespaces': dict(namespaces),
//         'parameters': {
//             'local': dict(typeParameters),
//             'aggregated': dict({}),
//         },
//         'types': dict(types),
//     }
// }

// export function parentSibling(
//     name: string
// ): T.Namespace__2.$<pd.SourceLocation> {
//     return ['parent sibling', {
//         'namespace': ref(name)
//     }]
// }

// export function local(
//     typeParameters: RawDictionary<T.TType__Parameters.local.D.$<pd.SourceLocation>>,
//     namespaces: RawDictionary<T.Local__Namespace.namespaces.D.$<pd.SourceLocation>>,
//     types: RawDictionary<T.TType.$<pd.SourceLocation>>
// ): T.Namespace__2.$<pd.SourceLocation> {
//     return ['local', {
//         'parameters': {
//             'local': dict(typeParameters),
//             'aggregated': dict({})
//         },
//         'namespaces': dict(namespaces),
//         'types': dict(types),
//     }]
// }

// export function valueFunction(
//     typeParameters: RawDictionary<T.TType__Parameters.local.D.$<pd.SourceLocation>>,
//     context: T.TType.$<pd.SourceLocation>,
//     parameters: RawDictionary<T.Function__Declaration.parameters.D.$<pd.SourceLocation>>,
//     returnType: T.TType.$<pd.SourceLocation>,
// ): T.TType.$<pd.SourceLocation> {
//     return ['value function', {
//         'declaration': {
//             'type parameters': {
//                 'local': dict(typeParameters),
//                 'aggregated': dict({})
//             },
//             'context': context,
//             'parameters': dict(parameters),
//         },
//         'return type': returnType,
//     }]
// }

// export function addressFunction(
//     typeParameters: RawDictionary<T.TType__Parameters.local.D.$<pd.SourceLocation>>,
//     context: T.TType.$<pd.SourceLocation>,
//     parameters: RawDictionary<T.Function__Declaration.parameters.D.$<pd.SourceLocation>>,
//     returnType: T.TType.$<pd.SourceLocation>,
// ): T.TType.$<pd.SourceLocation> {
//     return ['address function', {
//         'declaration': {
//             'type parameters': {
//                 'local': dict(typeParameters),
//                 'aggregated': dict({})
//             },
//             'context': context,
//             'parameters': dict(parameters),
//         },
//         'return type': returnType,
//     }]
// }

// export function procedure(
//     typeParameters: RawDictionary<T.TType__Parameters.local.D.$<pd.SourceLocation>>,
//     context: T.TType.$<pd.SourceLocation>,
//     parameters: RawDictionary<T.Function__Declaration.parameters.D.$<pd.SourceLocation>>,
//     returnType: T.TType.$<pd.SourceLocation>,
// ): T.TType.$<pd.SourceLocation> {
//     return ['procedure', {
//         'declaration': {
//             'type parameters': {
//                 'local': dict(typeParameters),
//                 'aggregated': dict({})
//             },
//             'context': context,
//             'parameters': dict(parameters),
//         },
//     }]
// }

// export function null_(
// ): T.TType.$<pd.SourceLocation> {
//     return ['null', null]
// }

// export function string(
// ): T.TType.$<pd.SourceLocation> {
//     return ['string', null]
// }

// export function number(
// ): T.TType.$<pd.SourceLocation> {
//     return ['number', null]
// }

// export function boolean(
// ): T.TType.$<pd.SourceLocation> {
//     return ['boolean', null]
// }

// export function group(
//     properties: RawDictionary<T.TType.group.D.$<pd.SourceLocation>>,
// ): T.TType.$<pd.SourceLocation> {
//     return ['group', dict(properties)]
// }

// export function prop(
//     type: T.TType.$<pd.SourceLocation>,
// ): T.TType.group.D.$<pd.SourceLocation> {
//     return {
//         'type': type,
//         'mutable': [false]
//     }
// }

// export function propMutable(
//     type: T.TType.$<pd.SourceLocation>,
// ): T.TType.group.D.$<pd.SourceLocation> {
//     return {
//         'type': type,
//         'mutable': [true, null]
//     }
// }

// export function taggedUnion(
//     options: RawDictionary<T.TType.tagged__union.D.$<pd.SourceLocation>>,
// ): T.TType.$<pd.SourceLocation> {
//     return ['tagged union', dict(options)]
// }

// export function array(
//     type: T.TType.$<pd.SourceLocation>,
// ): T.TType.$<pd.SourceLocation> {
//     return ['array', type]
// }

// export function computed(
//     type: T.TType.$<pd.SourceLocation>,
// ): T.TType.$<pd.SourceLocation> {
//     return ['computed', type]
// }

// export function optional(
//     type: T.TType.$<pd.SourceLocation>,
// ): T.TType.$<pd.SourceLocation> {
//     return ['optional', type]
// }

// export function dictionary(
//     type: T.TType.$<pd.SourceLocation>,
// ): T.TType.$<pd.SourceLocation> {
//     return ['dictionary', type]
// }

// export function step(
//     ns: string,
//     args?: RawDictionary<T.TType__Arguments.D.$<pd.SourceLocation>>,
//     tail?: T.Namespace__Selection.$<pd.SourceLocation>,
// ): T.Namespace__Selection.$<pd.SourceLocation> {
//     return {
//         'namespace': ref(ns),
//         'arguments': dict(args === undefined ? {} : args),
//         'tail': tail === undefined ? [false] : [true, tail]
//     }
// }

// export function typeArgument(
//     type: T.TType.$<pd.SourceLocation>
// ): T.TType__Arguments.D.$<pd.SourceLocation> {
//     return {
//         'type': type
//     }
// }

// export function externalTypeReference(
//     nsPath: T.Namespace__Selection.$<pd.SourceLocation>,
//     type: string,

// ): T.TType.$<pd.SourceLocation> {
//     return ['type reference', ['external', {
//         'namespaces': nsPath,
//         'type': ref(type)
//     }]]
// }

// export function typeParameter(
//     typeParameter: string
// ): T.TType.$<pd.SourceLocation> {
//     return ['type parameter', ref(typeParameter)]
// }

// export function typeReference(
//     type: string,
//     cyclic?: boolean,
// ): T.TType.$<pd.SourceLocation> {
//     if (cyclic) {
//         return ['type reference', ['cyclic sibling', ref(type)]]
//     } else {
//         return ['type reference', ['sibling', ref(type)]]
//     }
// }