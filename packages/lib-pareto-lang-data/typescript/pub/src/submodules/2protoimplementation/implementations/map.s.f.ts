import * as pl from 'pareto-core-lib'
import * as pv from 'pareto-core-dev'
import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'
import * as tmp from 'pareto-core-internals'

function optional<T, R>(
    $: pt.RawOptionalValue<T>,
    set: ($: T) => R,
    notSet: () => R,
): R {
    return tmp.wrapRawOptionalValue($).map(set, notSet)
}


import * as g_this from "../glossary"
import * as g_in from "../../resolved"
import * as g_out from "lib-proto-implementation/dist/submodules/unresolved"

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
    return optional(
        $,
        ($): pt.OptionalValue<RT> => {
            return [true, a($)]
        },
        () => [false]
    )
}

import { A } from "../api.generated"

export const $$: A.map = ($d,) => {


    const type2resolveInitialization = (
        $: g_in.T.TypeResolver,
        $p: {
            'type library name': string,
            'type path': string,
        }
    ): g_out.T.Initialization<pd.SourceLocation> => {
        return pl.cc($.type, ($) => {
            switch ($[0]) {
                case 'array': return pl.ss($, ($): g_out.T.Initialization<pd.SourceLocation> => ['type', ['array', {
                    'definition': pd.getLocationInfo(0),
                    'type': ['map', {
                        'definition': pd.getLocationInfo(0),
                        'source': {
                            'start': ['context', null],
                            'tail': [false]
                        },
                        'initialization': type2resolveInitialization(
                            $.type,
                            {
                                'type library name': $p['type library name'],
                                'type path': $p['type path'] + "A$"
                            },
                        )

                    }]
                }]])
                case 'atom': return pl.ss($, ($): g_out.T.Initialization<pd.SourceLocation> => ['type', ['atom', {
                    'definition': pd.getLocationInfo(0),
                    'type': ['copy', {
                        'source': {
                            'start': ['context', null],
                            'tail': [false],
                        },
                    }]
                }]])
                case 'component': return pl.ss($, ($): g_out.T.Initialization<pd.SourceLocation> => ['call', {
                    'definition': pd.getLocationInfo(0),
                    'function': {
                        'start': ['variable', ref("r_" + pl.cc($.type, ($) => {
                            switch ($[0]) {
                                case 'cyclic sibling': return pl.ss($, ($) => $.type.key)
                                case 'import': return pl.ss($, ($) => $.type.key)
                                case 'resolved sibling': return pl.ss($, ($) => $.type.key)
                                default: return pl.au($[0])
                            }
                        }))],
                        'tail': [false]
                    },
                    'call': {
                        //'function': xxx,
                        'type arguments': rawDict({}),
                        'context': {
                            'start': ['context', null],
                            'tail': [false]
                        },
                        'arguments': dict<g_out.T.Function__Call.arguments.dictionary.D<pd.SourceLocation>>($.arguments.map(($) => ({
                            'annotation': pd.getLocationInfo(0),
                            'content': ['initialization', ['generic', ['implement me', "ARGS"]]]
                        }))),
                    }
                    // 'source': {
                    //     'start': ['variable', pl.cc($.type, ($): Reference => {
                    //         switch ($[0]) {
                    //             case 'cyclic sibling': return pl.ss($, ($) => ref(`r_${$.type.key}`))
                    //             case 'import': return pl.ss($, ($) => ref("FOOO"))
                    //             case 'resolved sibling': return pl.ss($, ($) => ref(`r_${$.type.key}`))
                    //             default: return pl.au($[0])
                    //         }
                    //     })],
                    //     'tail': [true, {
                    //         'step': ['call', {
                    //             'address function': pd.getLocationInfo(0),
                    //             'type arguments': rawDict({}),
                    //             'context': ['selection', {
                    //                 'selection': {
                    //                     'start': ['context', null],
                    //                     'tail': [false]
                    //                 },
                    //             }],
                    //             'arguments': dict($.arguments.map(($) => ({
                    //                 'annotation': pd.getLocationInfo(0),
                    //                 'content': ['initialization', ['implement me', "ARGS"]]
                    //             }))),
                    //         }],
                    //         'tail': [false]
                    //     }],
                    // }
                }])
                case 'constraint': return pl.ss($, ($): g_out.T.Initialization<pd.SourceLocation> => ['generic', ['implement me', "CONSTRAINT"]])
                case 'cyclic reference': return pl.ss($, ($): g_out.T.Initialization<pd.SourceLocation> => ['generic', ['implement me', "CyCLIC REFERENCE"]])
                case 'dictionary': return pl.ss($, ($): g_out.T.Initialization<pd.SourceLocation> => ['type', ['dictionary', {
                    'definition': pd.getLocationInfo(0),
                    'type': ['map', {
                        'definition': pd.getLocationInfo(0),
                        'source': {
                            'start': ['context', null],
                            'tail': [false]
                        },
                        'initialization': type2resolveInitialization(
                            $.type,
                            {
                                'type library name': $p['type library name'],
                                'type path': $p['type path'] + "D$"
                            },
                        )
    
                    }]
                }]])
                case 'group': return pl.ss($, ($): g_out.T.Initialization<pd.SourceLocation> => ['generic', ['variables', {
                    'variables': {
                        'local': dict<g_out.T.Local__Variables.dictionary.D<pd.SourceLocation>>($.properties.__mapWithKey(($, key) => {
                            return {
                                'type': ['child namespace', {
                                    'namespacex': ref($p['type library name']),
                                    'selection': ['child namespace', {
                                        'namespacex': ref("Resolved"),
                                        'selection': ['child namespace', {
                                            'namespacex': ref("Flat"),
                                            'selection': ['current namespaceXXXXX', ref($p['type path'] + key + "$")]
                                        }]
                                    }]
                                }],
                                'initialization': ['generic', ['change context', {
                                    'source': {
                                        'start': ['context', null],
                                        'tail': [true, {
                                            'step': ['property', {
                                                'group': pd.getLocationInfo(0),
                                                'property': ref(key)
                                            }],
                                            'tail': [false]
                                        }]
                                    },
                                    'initialization': type2resolveInitialization(
                                        $.type,
                                        {
                                            'type library name': $p['type library name'],
                                            'type path': $p['type path'] + key + "$"
                                        },
                                    )
                                }]]
                            }
                        })),
                        'aggregated': rawDict({}),
                    },
                    'initialization': ['type', ['group', {
                        'definition': pd.getLocationInfo(0),
                        'properties': dict($.properties.__mapWithKey(($, key) => {
                            return {
                                'annotation': pd.getLocationInfo(0),
                                'content': ['type', ['atom', {
                                    'definition': pd.getLocationInfo(0),
                                    'type': ['copy', {
                                        'definition': pd.getLocationInfo(0),
                                        'source': {
                                            'start': ['variable', ref(key)],
                                            'tail': [false],
                                        }
                                    }]
                                }]]
                            }
                        }))
                    }]]
                }]])
                case 'nothing': return pl.ss($, ($): g_out.T.Initialization<pd.SourceLocation> => ['type', ['atom', {
                    'definition': pd.getLocationInfo(0),
                    'type': ['null', {
                        'definition': pd.getLocationInfo(0),
                    }]
                }]])
                case 'optional': return pl.ss($, ($): g_out.T.Initialization<pd.SourceLocation> =>['generic',  ['implement me', "OPTIONAL"]])
                case 'resolved reference': return pl.ss($, ($): g_out.T.Initialization<pd.SourceLocation> =>['generic',  ['implement me', "RESOLVED REFERENCE"]])
                case 'state group': return pl.ss($, ($): g_out.T.Initialization<pd.SourceLocation> => ['generic', ['switch', {
                    'definition': pd.getLocationInfo(0),
                    'temp type': ['child namespace', {
                        'namespacex': ref($p['type library name']),
                        'selection': ['child namespace', {
                            'namespacex': ref("Resolved"),
                            'selection': ['child namespace', {
                                'namespacex': ref("Flat"),
                                'selection': ['current namespaceXXXXX', ref($p['type path'])]
                            }]
                        }]
                    }],
                    'source': {
                        'start': ['context', null],
                        'tail': [false]
                    },
                    'cases': {
                        'annotation': pd.getLocationInfo(0),
                        'dictionary': $.states.__mapWithKey(($, key): g_out.T.Initialization<pd.SourceLocation> => ['type', ['tagged union', {
                            'definition': pd.getLocationInfo(0),
                            'state': ref(key),
                            'initialization': type2resolveInitialization(
                                $.type,
                                {
                                    'type library name': $p['type library name'],
                                    'type path': $p['type path'] + key + "$"
                                },
                            )
                        }]]),
                    },
                    'default': [false],
                }]])
                default: return pl.au($[0])
            }
        })
    }

    // const typeSelectionTail2ValueSelectionTail = (
    //     $: g_in.T.Value__Selection__Tail,

    // ): g_out.T.Source__Selection__Tail.O<pd.SourceLocation> => {
    //     return [true, ['']]
    //     return pl.cc($, ($): g_out.T.Source__Selection__Tail.O<pd.SourceLocation> => {
    //         switch ($[0]) {
    //             case 'component': return pl.ss($, ($) => ({
    //                 'step': ['call', {
    //                     'address function': ,
    //                     'arguments': xx,
    //                     'type arguments': xx,
    //                     'context': xx
    //                 }],
    //                 'tail': [true, tail()],
    //             }))
    //             case 'group': return pl.ss($, ($) => ({
    //                 'step': xx,
    //                 'tail': mapOptional(
    //                     $.tail,
    //                     ($) => typeSelectionTail2ValueSelectionTail($)
    //                 ),
    //             }))
    //             case 'reference': return pl.ss($, ($) => ({
    //                 'step': xx,
    //                 'tail': mapOptional(
    //                     $.tail,
    //                     ($) => typeSelectionTail2ValueSelectionTail($)
    //                 ),
    //             }))
    //             case 'state group': return pl.ss($, ($) => ({
    //                 'step': xx,
    //                 'tail': mapOptional(
    //                     $.tail,
    //                     ($) => typeSelectionTail2ValueSelectionTail($)
    //                 ),
    //             }))
    //             default: return pl.au($[0])
    //         }
    //     })
    // }

    const project2SourceFile = ($: g_in.T.Project): g_out.T.Source__File<pd.SourceLocation> => {
        return {
            'type': ['current namespaceXXXXX', {
                'annotation': pd.getLocationInfo(0),
                'key': "$",
            }],
            'initialization': ['type', ['group', {
                'definition': pd.getLocationInfo(0),
                'properties': dict($['type libraries'].__mapWithKey(($, key) => {
                    const tlKey = key
                    return {
                        'annotation': pd.getLocationInfo(0),
                        'content': ['type', ['group', {
                            'definition': pd.getLocationInfo(0),
                            'properties': rawDict<g_out.T.Initialization._ltype.group.properties.dictionary.D<pd.SourceLocation>>({
                                "createResolveContext": {
                                    'annotation': pd.getLocationInfo(0),
                                    'content': ['type', ['initialization function', {
                                        'definition': pd.getLocationInfo(0),
                                        'temp has parameters': [false],
                                        'variables': rawDict({}),
                                        'initialization': ['generic', ['variables', {
                                            'variables': {
                                                'local': dict($d.mergeDictionaries({
                                                    'dictionaries': pd.d({
                                                        "s": $d.filter<g_out.T.Local__Variables.dictionary.D<pd.SourceLocation>>($['global types'].implementations.__mapWithKey(($, key) => {
                                                            return mapOptional(
                                                                $.result,
                                                                ($) => {
                                                                    return {
                                                                        'type': ['child namespace', {
                                                                            'namespacex': ref(tlKey),
                                                                            'selection': ['child namespace', {
                                                                                'namespacex': ref("Resolve"),
                                                                                'selection': ['child namespace', {
                                                                                    'namespacex': ref("selectors"),
                                                                                    'selection': ['current namespaceXXXXX', ref(key)]
                                                                                }]
                                                                            }]
                                                                        }],
                                                                        'initialization': ['type', ['atom', {
                                                                            'definition': pd.getLocationInfo(0),
                                                                            'type': ['null', {
                                                                                'definition': pd.getLocationInfo(0),
                                                                            }]
                                                                        }]]
                                                                    }
                                                                },
                                                            )
                                                        })),
                                                        "r": $['global types'].implementations.__mapWithKey(($, key) => {
                                                            return {
                                                                'type': ['child namespace', {
                                                                    'namespacex': ref(tlKey),
                                                                    'selection': ['child namespace', {
                                                                        'namespacex': ref("Resolve"),
                                                                        'selection': ['child namespace', {
                                                                            'namespacex': ref("resolvers"),
                                                                            'selection': ['current namespaceXXXXX', ref(key)]
                                                                        }]
                                                                    }]
                                                                }],
                                                                'initialization': ['type', ['initialization function', {
                                                                    'definition': pd.getLocationInfo(0),
                                                                    'temp has parameters': [false],
                                                                    'variables': rawDict({}),
                                                                    'initialization': type2resolveInitialization(
                                                                        $.type,
                                                                        {
                                                                            'type library name': tlKey,
                                                                            'type path': key + "$"
                                                                        },
                                                                    )
                                                                }]]
                                                            }
                                                        }),
                                                    }),
                                                    'escape': "$",
                                                    'separator': "_",
                                                })),
                                                'aggregated': rawDict({}),
                                            },
                                        'initialization': ['type', ['group', {
                                            'definition': pd.getLocationInfo(0),
                                            'properties': dict($['global types'].definitions.__mapWithKey(($, key) => {
                                                return {
                                                    'annotation': pd.getLocationInfo(0),
                                                    'content': ['type', ['atom', {
                                                        'definition': pd.getLocationInfo(0),
                                                        'type': ['copy', {
                                                            'definition': pd.getLocationInfo(0),
                                                            'source': {
                                                                'start': ['variable', ref(`r_${key}`)],
                                                                'tail': [false],
                                                            }
                                                        }]
                                                    }]]
                                                }
                                            }))
                                        }]]
                                        }]]
                                    }]]
                                },
                                "createSerializeContext": {
                                    'annotation': pd.getLocationInfo(0),
                                    'content': ['type', ['initialization function', {
                                        'definition': pd.getLocationInfo(0),
                                        'temp has parameters': [false],
                                        'variables': rawDict({}),
                                        'initialization': ['type', ['group', {
                                            'definition': pd.getLocationInfo(0),
                                            'properties': dict($['global types'].definitions.map(($) => {
                                                return {
                                                    'annotation': pd.getLocationInfo(0),
                                                    'content': ['type', ['procedure', {
                                                        'definition': pd.getLocationInfo(0),
                                                        'temp has parameters': [false],
                                                        'variables': rawDict({}),
                                                        'block': {
                                                            'variables': {
                                                                'local': rawDict({}),
                                                                'aggregated': rawDict({}),
                                                            },
                                                            'statements': pd.a([]),
                                                        }
                                                    }]]
                                                }
                                            }))
                                        }]]
                                    }]]
                                }
                            })
                        }]]
                    }
                }))
            }]]
        }
    }
    return ($) => {
        return project2SourceFile($.data)
    }
}