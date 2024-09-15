import * as pl from 'pareto-core-lib'
import * as pv from 'pareto-core-dev'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'
import * as pd from 'pareto-core-data'

import * as g_this from "../glossary"
import * as g_in from "../../resolved"
import * as g_out from "lib-proto-typesystem/dist/submodules/unresolved"

import { A } from "../api.generated"

type Reference = {
    'annotation': pd.SourceLocation,
    'key': string
}

type Dictionary<T> = {
    'annotation': pd.SourceLocation,
    'dictionary': pt.Dictionary<T>
}

type ConstrainedDictionaryEntry<T> = {
    'annotation': pd.SourceLocation,
    'content': T
}

function ref($: string): Reference {
    return {
        'annotation': pd.getLocationInfo(1),
        'key': $
    }
}

function dict<T>($: pt.Dictionary<T>): Dictionary<T> {
    return {
        'annotation': pd.getLocationInfo(1),
        'dictionary': $
    }
}

function constrainedDictionaryEntry<T>($: T): ConstrainedDictionaryEntry<T> {

    return {
        'annotation': pd.getLocationInfo(1),
        'content': $
    }
}


function emptyDict<T>(): Dictionary<T> {
    return {
        'annotation': pd.getLocationInfo(1),
        'dictionary': pd.d({})
    }
}

function rawDict<T>($: { [key: string]: T }): Dictionary<T> {
    return {
        'annotation': pd.getLocationInfo(1),
        'dictionary': pd.d($)
    }
}


function mapOptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => RT,
): pt.OptionalValue<RT> {
    return pl.optional(
        $,
        ($): pt.OptionalValue<RT> => {
            return [true, a($)]
        },
        () => [false]
    )
}

export const $$: A.map = ($d,) => {
    return ($) => {
        // return {
        //     'namespaces'
        // }
        type NSType =
            | ['unresolved', null]
            | ['resolved', null]
        function escape($: string) {
            return $d.escape({
                'string': $,
                'escape': "T",
                'patterns to escape': pm.wrapRawArray([]),
            })
        }

        function rekey($: g_out.T.Namespace.namespaces.dictionary<pd.SourceLocation>) {
            return $d.rekey(
                $,
                {
                    'map': ($) => escape($.key)
                }
            )
        }



        const Dictionary__Selection2Type = (
            $: g_in.T.Dictionary__Selection,
            $p: {

                'type': NSType
            }

        ): g_out.T.Type<pd.SourceLocation> => {
            return Type__Selection2Type($.type, "D$", $p)
        }
        const Type__Selection2Type = (
            $: g_in.T.Type__Selection,
            tail: string,
            $p: {

                'type': NSType
            }
        ): g_out.T.Type<pd.SourceLocation> => {
            const x = $


            function doTail($: g_in.T.Type__Selection__Tail): string {
                return pl.cc($['step type'], ($) => {
                    switch ($[0]) {
                        case 'array': return pl.ss($, ($) => "A$" + pl.optional(
                            $.tail,
                            ($) => doTail($),
                            () => ""
                        ))
                        case 'dictionary': return pl.ss($, ($) => "D$" + pl.optional(
                            $.tail,
                            ($) => doTail($),
                            () => ""
                        ))
                        case 'group': return pl.ss($, ($) => $.property.key + "$" + pl.optional(
                            $.tail,
                            ($) => doTail($),
                            () => ""
                        ))
                        case 'optional': return pl.ss($, ($) => "O$" + pl.optional(
                            $.tail,
                            ($) => doTail($),
                            () => ""
                        ))
                        case 'state group': return pl.ss($, ($) => $.state.key + "$" + pl.optional(
                            $.tail,
                            ($) => doTail($),
                            () => ""
                        ))
                        default: return pl.au($[0])
                    }
                })
            }

            const Type__Selection2Path = ($: g_in.T.Type__Selection): string => {
                return $['global type'].key + "$" + pl.optional(
                    $.tail,
                    ($) => doTail($),
                    () => ""
                )
            }
            return pl.optional(
                $.import,
                ($): g_out.T.Type<pd.SourceLocation> => {
                    return ['type reference', ['external', {
                        'namespace path': {
                            'start': ['import', {
                                'namespace': ref($.key),
                                'arguments': rawDict({}),
                                'tail': [true, {
                                    'namespace': ref(pl.cc($p.type, ($) => {
                                        switch ($[0]) {
                                            case 'resolved': return pl.ss($, ($) => "Resolved")
                                            case 'unresolved': return pl.ss($, ($) => "Unresolved")
                                            default: return pl.au($[0])
                                        }
                                    })),
                                    'arguments': rawDict({}),
                                    'tail': [true, {
                                        'namespace': ref("Flat"),
                                        'arguments': rawDict({}),
                                        'tail': [false]
                                    }]
                                }]
                            }],
                        },
                        'type': ref(Type__Selection2Path(x) + tail)
                    }]]
                },
                () => {
                    return ['type reference', ['sibling', ref(Type__Selection2Path($) + tail)]]
                }
            )
        }

        const Global__Type__Selection2Type = ($: g_in.T.Global__Type__Selection): g_out.T.Type<pd.SourceLocation> => {
            switch ($[0]) {
                case 'cyclic sibling': return pl.ss($, ($) => ['type reference', ['cyclic sibling', ref($.type.key + "$")]])
                case 'import': return pl.ss($, ($) => pv.implementMe("IMPORT"))
                case 'resolved sibling': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['type reference', ['sibling', ref($.type.key + "$")]])
                default: return pl.au($[0])
            }
        }

        function flatten($: g_in.T.Type): pt.Dictionary<g_in.T.Type> {
            return $d.addEntry({
                'dictionary': $d.mergeDictionaries({
                    'dictionaries': pl.cc($.type, ($): pt.Dictionary<pt.Dictionary<g_in.T.Type>> => {
                        switch ($[0]) {
                            case 'array': return pl.ss($, ($) => pm.wrapRawDictionary({
                                "A": flatten($.type)
                            }))
                            case 'atom': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'component': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'constraint': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'cyclic reference': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'dictionary': return pl.ss($, ($) => pm.wrapRawDictionary({
                                "D": flatten($.type)
                            }))
                            case 'group': return pl.ss($, ($) => $.properties.map(($) => {
                                return flatten($.type)
                            }))
                            case 'nothing': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'optional': return pl.ss($, ($) => pm.wrapRawDictionary({
                                "O": flatten($.type)
                            }))
                            case 'resolved reference': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'state group': return pl.ss($, ($) =>
                                $.states.map(($) => {
                                    return flatten($.type)
                                })
                            )
                            default: return pl.au($[0])
                        }
                    }),
                    'escape': "_",
                    'separator': "$",
                }),
                'keyValuePair': {
                    'key': "",
                    'value': $
                }
            })
        }

        const Type2Namespace = (
            $: g_in.T.Type,
            $p: {
                'path': string,
                'type': NSType
            }
        ): g_out.T.Namespace<pd.SourceLocation> => {
            return {
                'namespaces': dict(pl.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'array': return pl.ss($, ($): g_out.T.Namespace.namespaces.dictionary<pd.SourceLocation> => pm.wrapRawDictionary({
                            "A": {
                                'imports': rawDict({}),
                                'namespace': Type2Namespace(
                                    $.type,
                                    {
                                        'path': $p.path + "A$",
                                        'type': $p.type,
                                    }
                                )
                            }
                        }))
                        case 'atom': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                        case 'component': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                        case 'constraint': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                        case 'cyclic reference': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                        case 'dictionary': return pl.ss($, ($) => pm.wrapRawDictionary({
                            "D": {
                                'imports': rawDict({}),
                                'namespace': Type2Namespace(
                                    $.type,
                                    {
                                        'path': $p.path + "D$",
                                        'type': $p.type,
                                    }
                                )
                            }
                        }))
                        case 'group': return pl.ss($, ($) => rekey($.properties.__mapWithKey(($, key) => {
                            return {
                                'imports': rawDict({}),
                                'namespace': Type2Namespace(
                                    $.type,
                                    {
                                        'path': $p.path + key + "$",
                                        'type': $p.type,
                                    }
                                )
                            }
                        })))
                        case 'nothing': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                        case 'optional': return pl.ss($, ($) => pm.wrapRawDictionary({
                            "O": {
                                'imports': rawDict({}),
                                'namespace': Type2Namespace(
                                    $.type,
                                    {
                                        'path': $p.path + "O$",
                                        'type': $p.type,
                                    }
                                )
                            }
                        }))
                        case 'resolved reference': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                        case 'state group': return pl.ss($, ($) => rekey(
                            $.states.__mapWithKey(($, key) => {
                                return {
                                    'imports': rawDict({}),
                                    'namespace': Type2Namespace(
                                        $.type,
                                        {
                                            'path': $p.path + key + "$",
                                            'type': $p.type,
                                        }
                                    )
                                }
                            })
                        ))
                        default: return pl.au($[0])
                    }
                })),
                'parameters': {
                    'local': rawDict({}),
                    'aggregated': rawDict({})
                },
                'types': rawDict({
                    "$": ['type reference', ['external', {
                        'namespace path': {
                            'start': ['import', {
                                'namespace': ref("Flat"),
                                'arguments': rawDict({}),
                                'tail': [false]
                            }],
                        },
                        'type': ref($p.path)
                    }]]
                }),
            }
        }

        const Atom2Type = (
            $: g_in.T.Atom,
            $p: {
                'atom mappings': g_this.T.Atom__Mapping
            },
        ): g_out.T.Type<pd.SourceLocation> => {
            return ['atom', pl.cc($p['atom mappings'].__unsafeGetEntry($.type.key), ($): g_out.T.Type.atom<pd.SourceLocation> => {
                switch ($[0]) {
                    case 'boolean': return pl.ss($, ($) => ['boolean', null])
                    case 'number': return pl.ss($, ($) => ['number', null])
                    case 'string': return pl.ss($, ($) => ['string', null])
                    default: return pl.au($[0])
                }
            })]
        }

        const TypeLibrary2Namespace = (
            $: g_in.T.Type__Library,
            $p: {
                'atom mappings': g_this.T.Atom__Mapping,
                'type': NSType
            }
        ): g_out.T.Namespace<pd.SourceLocation> => {

            return {
                'parameters': {
                    'local': dict(pl.cc($p.type, ($) => {
                        switch ($[0]) {
                            case 'resolved': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'unresolved': return pl.ss($, ($) => pm.wrapRawDictionary({
                                "Annotation": null
                            }))
                            default: return pl.au($[0])
                        }
                    })),
                    'aggregated': rawDict({})
                },
                'namespaces': rawDict<g_out.T.Namespace.namespaces.dictionary.D<pd.SourceLocation>>({
                    "Flat": {
                        'imports': rawDict({}),
                        'namespace': {
                            'parameters': {
                                'local': rawDict({}),
                                'aggregated': rawDict({})
                            },
                            // 'namespaces': dict($.imports.map(($) => {
                            //     return ['parent sibling', {
                            //         'namespace': ref($.library.key)
                            //     }]
                            // })),
                            'namespaces': rawDict({}),
                            'types': dict($d.mergeDictionaries({
                                'dictionaries': $['global types'].definitions.map(($) => {
                                    return flatten($.type)
                                }),
                                'escape': "_",
                                'separator': "$",
                            }).__mapWithKey<g_out.T.Type<pd.SourceLocation>>(($, key) => {
                                return pl.cc($.type, ($) => {
                                    switch ($[0]) {
                                        case 'array': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['array', ['type reference', ['sibling', ref(key + "A$")]]])
                                        case 'atom': return pl.ss($, ($) => Atom2Type($.atom, $p))
                                        case 'component': return pl.ss($, ($) => Global__Type__Selection2Type($.type))
                                        case 'constraint': return pl.ss($, ($) => pl.cc($, ($) => {
                                            const $x = $
                                            return pl.cc($p.type, ($) => {
                                                switch ($[0]) {
                                                    case 'resolved': return pl.ss($, ($) => Type__Selection2Type($x, "", $p))
                                                    case 'unresolved': return pl.ss($, ($) => ['type parameter', ref("Annotation")])
                                                    default: return pl.au($[0])
                                                }
                                            })
                                        }))
                                        case 'cyclic reference': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['group', rawDict({
                                            "key": {
                                                'mutable': [false],
                                                'type': Atom2Type($.atom, $p)
                                            },
                                            "referent": {
                                                'mutable': [false],
                                                'type': pl.cc($, ($) => {
                                                    const $x = $
                                                    return pl.cc($p.type, ($) => {
                                                        switch ($[0]) {
                                                            case 'resolved': return pl.ss($, ($) => ['computed', Global__Type__Selection2Type($x.sibling)])
                                                            case 'unresolved': return pl.ss($, ($) => ['type parameter', ref("Annotation")])
                                                            default: return pl.au($[0])
                                                        }
                                                    })
                                                })
                                            }
                                        })])

                                        case 'dictionary': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['dictionary', ['type reference', ['sibling', ref(key + "D$")]]])
                                        case 'group': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['group', dict($.properties.__mapWithKey(($, propkey) => {
                                            return {
                                                'mutable': [false],
                                                'type': ['type reference', ['sibling', ref(key + propkey + "$")]]
                                            }
                                        }))])
                                        case 'nothing': return pl.ss($, ($) => ['atom', ['null', null]])
                                        case 'optional': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['optional', ['type reference', ['sibling', ref(key + "O$")]]])
                                        case 'resolved reference': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['group', rawDict({
                                            "key": {
                                                'mutable': [false],
                                                'type': Atom2Type($.atom, $p),
                                            },
                                            "referent": {
                                                'mutable': [false],
                                                'type': pl.cc($, ($) => {
                                                    const $x = $
                                                    return pl.cc($p.type, ($) => {
                                                        switch ($[0]) {
                                                            case 'resolved': return pl.ss($, ($) => pl.cc($x.value, ($) => {
                                                                switch ($[0]) {
                                                                    case 'dictionary': return pl.ss($, ($) => Dictionary__Selection2Type($, $p))
                                                                    case 'lookup': return pl.ss($, ($) => Global__Type__Selection2Type($))
                                                                    default: return pl.au($[0])
                                                                }
                                                            }))
                                                            case 'unresolved': return pl.ss($, ($) => ['type parameter', ref("Annotation")])
                                                            default: return pl.au($[0])
                                                        }
                                                    })
                                                })
                                            },
                                        })])

                                        case 'state group': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['tagged union', dict($.states.__mapWithKey(($, statekey): g_out.T.Type<pd.SourceLocation> => {
                                            return ['type reference', ['sibling', ref(key + statekey + "$")]]
                                        }))])
                                        default: return pl.au($[0])
                                    }
                                })
                            })),
                        }
                    },
                    "T": {
                        'imports': rawDict({
                            "Flat": ['sibling', ref("Flat")]
                        }),
                        'namespace': {
                            'parameters': {
                                'local': rawDict({}),
                                'aggregated': rawDict({})
                            },
                            'namespaces': dict(rekey($['global types'].definitions.__mapWithKey(($, key) => {
                                return {

                                    'imports': rawDict({}),
                                    'namespace': Type2Namespace(
                                        $.type,
                                        {
                                            'path': key + "$",
                                            'type': $p.type,
                                        }
                                    )
                                }
                            }))),
                            'types': rawDict({}),
                        }
                    }
                }),
                'types': rawDict({})
            }
        }

        const TypeLibrary2MainNamespace = (
            $: g_in.T.Type__Library,
            $p: {
                'atom mappings': g_this.T.Atom__Mapping,
            }
        ): g_out.T.Namespace<pd.SourceLocation> => {
            return {
                'parameters': {
                    'local': rawDict({}),
                    'aggregated': rawDict({})
                },
                'namespaces': rawDict<g_out.T.Namespace.namespaces.dictionary.D<pd.SourceLocation>>({
                    // "Imports": ['local', {
                    //     'parameters': {
                    //         'local': rawDict({
                    //         }),
                    //         'aggregated': rawDict({})
                    //     },
                    //     'namespaces': rawDict({

                    //     }),
                    //     'types': rawDict({}),

                    // }],
                    "Unresolved": {
                        'imports': rawDict({}),
                        'namespace': TypeLibrary2Namespace($, {
                            'atom mappings': $p['atom mappings'],
                            'type': ['unresolved', null],
                        })
                    },
                    "Resolved": {
                        'imports': rawDict({}),
                        'namespace': TypeLibrary2Namespace($, {
                            'atom mappings': $p['atom mappings'],
                            'type': ['resolved', null],
                        })
                    },
                    "Resolve": {
                        'imports': rawDict({
                            "Resolved": ['sibling', ref("Resolved")],
                            "Unresolved": ['sibling', ref("Unresolved")],
                        }),
                        'namespace': {
                            'parameters': {
                                'local': rawDict({
                                }),
                                'aggregated': rawDict({})
                            },
                            'namespaces': rawDict({
                                "selectors": {
                                    'imports': rawDict({}),
                                    'namespace': {
                                        'parameters': {
                                            'local': rawDict({
                                            }),
                                            'aggregated': rawDict({})
                                        },
                                        'namespaces': rawDict({
                                        }),
                                        'types': dict($d.filter($['global types'].declarations.__mapWithKey(($, key): pt.OptionalValue<g_out.T.Type<pd.SourceLocation>> => {
                                            return mapOptional(
                                                $.result,
                                                ($) => ['selection function', {
                                                    'declaration': {
                                                        'context': ['type reference', ['external', {
                                                            'namespace path': {
                                                                'start': ['import', {
                                                                    'namespace': ref("Resolved"),
                                                                    'arguments': rawDict({}),
                                                                    'tail': [true, {
                                                                        'namespace': ref("Flat"),
                                                                        'arguments': rawDict({}),
                                                                        'tail': [false]
                                                                    }]
                                                                }],
                                                            },
                                                            'type': ref(key + "$")
                                                        }]],
                                                        'parameters': rawDict({
                                                        }),
                                                        'type parameters': {
                                                            'local': rawDict({}),
                                                            'aggregated': rawDict({}),
                                                        },
                                                    },
                                                    'return type': ['type reference', ['external', {
                                                        'namespace path': {
                                                            'start': ['import', {
                                                                'namespace': ref("Resolved"),
                                                                'arguments': rawDict({}),
                                                                'tail': [true, {
                                                                    'namespace': ref("Flat"),
                                                                    'arguments': rawDict({}),
                                                                    'tail': [false]
                                                                }]
                                                            }],
                                                        },
                                                        'type': ref($.key + "$")
                                                    }]]
                                                }]
                                            )
                                        }))),
                                    }
                                },
                                "resolvers": {
                                    'imports': rawDict({}),
                                    'namespace': {
                                        'parameters': {
                                            'local': rawDict({
                                            }),
                                            'aggregated': rawDict({})
                                        },
                                        'namespaces': rawDict({
                                        }),
                                        'types': dict($['global types'].declarations.__mapWithKey(($, key): g_out.T.Type<pd.SourceLocation> => {
                                            return ['initialization function', {
                                                'declaration': {

                                                    'context': ['type reference', ['external', {
                                                        'namespace path': {
                                                            'start': ['import', {
                                                                'namespace': ref("Unresolved",),
                                                                'arguments': rawDict({
                                                                    "Annotation": constrainedDictionaryEntry({
                                                                        'type': ['type parameter', ref("Annotation")]
                                                                    })
                                                                }),
                                                                'tail': [true, {
                                                                    'namespace': ref("Flat",),
                                                                    'arguments': rawDict({}),
                                                                    'tail': [false]
                                                                }]
                                                            }]
                                                        },
                                                        'type': ref(key + "$")
                                                    }]],
                                                    'parameters': dict($.parameters.map(($): g_out.T.Function__Declaration.parameters.dictionary.D<pd.SourceLocation> => {
                                                        const x: g_out.T.Type<pd.SourceLocation> = pl.cc($.type, ($) => {
                                                            switch ($[0]) {
                                                                case 'resolved value': return pl.ss($, ($) => ['type reference', ['external', {
                                                                    'namespace path': {
                                                                        'start': ['import', {
                                                                            'namespace': ref("Resolved"),
                                                                            'arguments': rawDict({}),
                                                                            'tail': [true, {
                                                                                'namespace': ref("Flat"),
                                                                                'arguments': rawDict({}),
                                                                                'tail': [false]
                                                                            }]
                                                                        }],
                                                                    },
                                                                    'type': ref($.key + "$")
                                                                }]])
                                                                case 'cyclic sibling lookup': return pl.ss($, ($) => ['lookup', ['computed', ['type reference', ['external', {
                                                                    'namespace path': {
                                                                        'start': ['import', {
                                                                            'namespace': ref("Resolved"),
                                                                            'arguments': rawDict({}),
                                                                            'tail': [true, {
                                                                                'namespace': ref("Flat"),
                                                                                'arguments': rawDict({}),
                                                                                'tail': [false]
                                                                            }]
                                                                        }],
                                                                    },
                                                                    'type': ref($.key + "$")
                                                                }]]]])
                                                                case 'key': return pl.ss($, ($) => ['atom', ['string', null]])

                                                                case 'sibling lookup': return pl.ss($, ($) => ['lookup', ['type reference', ['external', {
                                                                    'namespace path': {
                                                                        'start': ['import', {
                                                                            'namespace': ref("Resolved"),
                                                                            'arguments': rawDict({}),
                                                                            'tail': [true, {
                                                                                'namespace': ref("Flat"),
                                                                                'arguments': rawDict({}),
                                                                                'tail': [false]
                                                                            }]
                                                                        }],
                                                                    },
                                                                    'type': ref($.key + "$")
                                                                }]]])
                                                                default: return pl.au($[0])
                                                            }
                                                        })
                                                        return pl.optional(
                                                            $.optional,
                                                            () => ['optional', x],
                                                            () => x
                                                        )
                                                    })),
                                                    'type parameters': {
                                                        'local': rawDict({
                                                            "Annotation": null
                                                        }),
                                                        'aggregated': rawDict({}),
                                                    },
                                                },
                                                //'return type': ['boolean', null],
                                                'return type': ['type reference', ['external', {
                                                    'namespace path': {
                                                        'start': ['import', {
                                                            'namespace': ref("Resolved"),
                                                            'arguments': rawDict({}),
                                                            'tail': [true, {
                                                                'namespace': ref("Flat"),
                                                                'arguments': rawDict({}),
                                                                'tail': [false]
                                                            }]
                                                        }],
                                                        // 'namespace': ref("Resolved",),
                                                        // 'arguments': rawDict({}),
                                                        // 'tail': [true, {
                                                        //     'namespace': ref("Flat",),
                                                        //     'arguments': rawDict({}),
                                                        //     'tail': [false]
                                                        // }]
                                                    },
                                                    'type': ref(key + "$")
                                                }]]
                                            }]
                                        })),
                                    }
                                }
                            }),
                            'types': rawDict({
                                "$": ['group', dict<g_out.T.Type.group.dictionary.D<pd.SourceLocation>>($['global types'].definitions.__mapWithKey<g_out.T.Type.group.dictionary.D<pd.SourceLocation>>(($, key) => ({
                                    'mutable': [false],
                                    'type': ['type reference', ['external', {
                                        'namespace path': {
                                            'start': ['local', {
                                                'namespace': {
                                                    'namespace': ref("resolvers"),
                                                    'arguments': rawDict({}),
                                                    'tail': [false]
                                                }
                                            }],
                                        },
                                        'type': ref(key)
                                    }]]
                                })))]
                            }),

                        }
                    },

                    "Serialize": {
                        'imports': rawDict({
                            "Resolved": ['sibling', ref("Resolved")],
                        }),
                        'namespace': {
                            'parameters': {
                                'local': rawDict({
                                }),
                                'aggregated': rawDict({})
                            },
                            'namespaces': rawDict({
                                "types": {
                                    'imports': rawDict({}),
                                    'namespace': {
                                        'parameters': {
                                            'local': rawDict({
                                            }),
                                            'aggregated': rawDict({})
                                        },
                                        'namespaces': rawDict({
                                        }),
                                        'types': dict($['global types'].definitions.__mapWithKey(($, key): g_out.T.Type<pd.SourceLocation> => {
                                            return ['procedure', {
                                                'declaration': {
                                                    'context': ['type reference', ['external', {
                                                        'namespace path': {
                                                            'start': ['import', {
                                                                'namespace': ref("Resolved"),
                                                                'arguments': rawDict({}),
                                                                'tail': [true, {
                                                                    'namespace': ref("Flat"),
                                                                    'arguments': rawDict({}),
                                                                    'tail': [false]
                                                                }]
                                                            }],
                                                        },
                                                        'type': ref(key + "$")
                                                    }]],
                                                    'parameters': rawDict({
                                                        "out": ['atom', ['boolean', null]]
                                                    }),
                                                    'type parameters': {
                                                        'local': rawDict({}),
                                                        'aggregated': rawDict({}),
                                                    },
                                                },
                                            }]
                                        }))
                                    },
                                }
                            }),
                            'types': rawDict({
                                "$": ['group', dict<g_out.T.Type.group.dictionary.D<pd.SourceLocation>>($['global types'].definitions.__mapWithKey<g_out.T.Type.group.dictionary.D<pd.SourceLocation>>(($, key) => ({
                                    'mutable': [false],
                                    'type': ['type reference', ['external', {
                                        'namespace path': {
                                            'start': ['local', {
                                                'namespace': {
                                                    'namespace': ref("types"),
                                                    'arguments': rawDict({}),
                                                    'tail': [false]
                                                }
                                            }],
                                        },
                                        'type': ref(key)
                                    }]]
                                })))]
                            }),

                        }
                    },

                }),
                'types': rawDict<g_out.T.Type<pd.SourceLocation>>({
                    // "_": ['value function', {
                    //     'declaration': {

                    //         'context': ['atom', ['null', null]],
                    //         'parameters': rawDict({}),
                    //         'type parameters': {
                    //             'local': rawDict({}),
                    //             'aggregated': rawDict({}),
                    //         },
                    //     },
                    //     'return type': ['group', dict($['global types'].definitions.__mapWithKey<g_out.T.Type.group.dictionary.D<pd.SourceLocation>>(($, key) => {

                    //         return {
                    //             'mutable': [false],
                    //             'type': ['group', rawDict<g_out.T.Type.group.dictionary.D<pd.SourceLocation>>({
                    //                 "Serialize": {
                    //                     'mutable': [false],
                    //                     'type': ['type reference', ['external', {
                    //                         'namespace path': {
                    //                             'start': ['local', {
                    //                                 'namespace': {
                    //                                     'namespace': ref("Serialize"),
                    //                                     'arguments': rawDict({}),
                    //                                     'tail': [true, {
                    //                                         'namespace': ref("types"),
                    //                                         'arguments': rawDict({}),
                    //                                         'tail': [false]
                    //                                     }]
                    //                                 }
                    //                             }],
    
                    //                         },
                    //                         'type': ref(key)
                    //                     }]]
                    //                 },
                    //                 "Resolve": {
                    //                     'mutable': [false],
                    //                     'type': ['type reference', ['external', {
                    //                         'namespace path': {
                    //                             'start': ['local', {
                    //                                 'namespace': {
                    //                                     'namespace': ref("Resolve"),
                    //                                     'arguments': rawDict({}),
                    //                                     'tail': [true, {
                    //                                         'namespace': ref("types"),
                    //                                         'arguments': rawDict({}),
                    //                                         'tail': [false]
                    //                                     }]
                    //                                 }
                    //                             }],
                    //                         },
                    //                         'type': ref(key)
                    //                     }]]
                    //                 }
                    //             })]
                    //         }
                    //     }))]
                    // }]
                }),
            }
        }

        const Project2Namespace = (
            $: g_in.T.Project,
            $p: {
                'atom mappings': g_this.T.MapParameters.atom__mappings,
            }
        ): g_out.T.Namespace<pd.SourceLocation> => {
            return {

                'parameters': {
                    'local': rawDict({}),
                    'aggregated': rawDict({})
                },
                'namespaces': dict($['type libraries'].__mapWithKey(($, key) => ({
                    'imports': dict($.imports.map(($) => {
                        return ['sibling', ref($.library.key)]
                    })),
                    'namespace': TypeLibrary2MainNamespace($, {
                        'atom mappings': $p['atom mappings'].__unsafeGetEntry(key)
                    })
                }))),
                'types': rawDict<g_out.T.Type<pd.SourceLocation>>({
                    "$": ['group', dict($['type libraries'].__mapWithKey<g_out.T.Type.group.dictionary.D<pd.SourceLocation>>(($, key) => {
                        const tlName = key
                        return {
                            'mutable': [false],
                            'type': ['group', rawDict<g_out.T.Type.group.dictionary.D<pd.SourceLocation>>({
                                "createResolveContext": {
                                    'mutable': [false],
                                    'type': ['initialization function', {
                                        'declaration': {
                                            'context': ['atom', ['null', null]],
                                            'parameters': rawDict({
                                            }),
                                            'type parameters': {
                                                'local': rawDict({}),
                                                'aggregated': rawDict({}),
                                            },
                                        },
                                        'return type': ['type reference', ['external', {
                                            'namespace path': {
                                                'start': ['local', {
                                                    'namespace': {
                                                        'namespace': ref(tlName),
                                                        'arguments': rawDict({}),
                                                        'tail': [true, {
                                                            'namespace': ref("Resolve"),
                                                            'arguments': rawDict({}),
                                                            'tail': [false]
                                                        }]
                                                    }
                                                }],
                                            },
                                            'type': ref("$")
                                        }]]
                                    }]
                                },
                                "createSerializeContext": {
                                    'mutable': [false],
                                    'type': ['initialization function', {
                                        'declaration': {
                                            'context': ['atom', ['null', null]],
                                            'parameters': rawDict({
                                            }),
                                            'type parameters': {
                                                'local': rawDict({}),
                                                'aggregated': rawDict({}),
                                            },
                                        },
                                        'return type': ['type reference', ['external', {
                                            'namespace path': {
                                                'start': ['local', {
                                                    'namespace': {
                                                        'namespace': ref(tlName),
                                                        'arguments': rawDict({}),
                                                        'tail': [true, {
                                                            'namespace': ref("Serialize"),
                                                            'arguments': rawDict({}),
                                                            'tail': [false]
                                                        }]
                                                    }
                                                }],
                                            },
                                            'type': ref("$")
                                        }]]
                                    }]
                                }
                            })]
                        }
                    }))]
                })
            }
        }

        return Project2Namespace(
            $.data,
            {
                'atom mappings': $['atom mappings']
            }
        )
    }
}