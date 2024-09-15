import * as pm from 'pareto-core-map'
import * as pa from 'pareto-core-async'
import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'

import * as a_pub from "../../../../../pub"
import * as a_resolve from "res-pareto-resolve"
import * as a_dictionary from "res-pareto-dictionary"
import * as a_string from "res-pareto-string"
import * as a_glossary from "lib-pareto-typescript-project"
import * as a_pld from "lib-proto-typesystem"
import * as a_pli from "lib-proto-implementation"

import { $ as d_playground } from "../../../data/playground.data"

import * as a_fp from "lib-fountain-pen"
import * as a_2prototypesystem from "../../../../../pub/dist/submodules/2prototypesystem"
import * as a_2protoimplementation from "../../../../../pub/dist/submodules/2protoimplementation"
import * as a_pareto_lang_data_resolve from "../../../../../pub/dist/submodules/resolve"
import * as g_resolved from "../../../../../pub/dist/submodules/resolved"
import * as g_unresolved from "../../../../../pub/dist/submodules/unresolved"

function split<Annotation>($: g_unresolved.T.Merged__Project<Annotation>): g_unresolved.T.Project<Annotation> {

    function typeResolver2def($: g_unresolved.T.TypeResolver<Annotation>): g_unresolved.T.Type<Annotation> {
        return {
            'type': pl.cc($.type, ($): g_unresolved.T.Type._ltype<Annotation> => {
                switch ($[0]) {
                    case 'array': return pl.ss($, ($) => ['array', {
                        'type': typeResolver2def($.type)
                    }])
                    case 'component': return pl.ss($, ($) => {
                        return ['component', {
                            'type': $.type,
                            // 'arguments': $.arguments.dictionary.map(($) => {
                            //     // return mapOptional(
                            //     //     $,
                            //     //     ($) => No__Context__Value__Selection($, {
                            //     //         'variables': $p.variables
                            //     //     })
                            //     // )
                            //     return null
                            // })
                        }]
                    })
                    case 'constraint': return pl.ss($, ($) => ['constraint', $])
                    case 'dictionary': return pl.ss($, ($): g_unresolved.T.Type._ltype<Annotation> => ['dictionary', {
                        'constraints': {
                            'annotation': $.constraints.annotation,
                            'dictionary': $.constraints.dictionary.map<g_unresolved.T.Type._ltype.dictionary.constraints.dictionary.D<Annotation>>(($) => pl.cc($, ($) => {
                                switch ($[0]) {
                                    case 'lookup': return pl.ss($, ($): g_unresolved.T.Type._ltype.dictionary.constraints.dictionary.D<Annotation> => {
                                        return ['lookup', $]
                                    })
                                    case 'dictionary': return pl.ss($, ($): g_unresolved.T.Type._ltype.dictionary.constraints.dictionary.D<Annotation> => {
                                        return ['dictionary', {
                                            'dictionary': $.dictionary,
                                            'dense': pl.cc($.dense, ($) => {
                                                switch ($[0]) {
                                                    case 'no': return pl.ss($, ($) => ['no', null])
                                                    case 'yes': return pl.ss($, ($) => ['yes', null])
                                                    default: return pl.au($[0])
                                                }
                                            }),
                                        }]
                                    })
                                    default: return pl.au($[0])
                                }
                            }))
                        },
                        'key': $.key,
                        'type': typeResolver2def($.type)
                    }])
                    case 'group': return pl.ss($, ($): g_unresolved.T.Type._ltype<Annotation> => {
                        return ['group', {
                            'properties': {
                                'annotation': $.properties.annotation,
                                'dictionary': $.properties.dictionary.map(($) => {
                                    return {
                                        'type': typeResolver2def($.type)
                                    }
                                })
                            }
                        }]
                    })
                    case 'nothing': return pl.ss($, ($) => ['nothing', null])
                    case 'optional': return pl.ss($, ($) => ['optional', {
                        'type': typeResolver2def($.type),
                    }])
                    case 'state group': return pl.ss($, ($) => {
                        return ['state group', {
                            'states': {
                                'annotation': $.states.annotation,
                                'dictionary': $.states.dictionary.map(($) => ({
                                    'type': typeResolver2def($.type),
                                }))
                            },
                        }]
                    })
                    case 'cyclic reference': return pl.ss($, ($) => {
                        return ['cyclic reference', {
                            'atom': $.atom,
                            'sibling': $.sibling
                        }]
                    })
                    case 'resolved reference': return pl.ss($, ($) => {
                        return ['resolved reference', {
                            'atom': $.atom,
                            'value': $.value
                        }]
                    })
                    case 'atom': return pl.ss($, ($) => {
                        return ['atom', {
                            'atom': $.atom,
                        }]
                    })
                    default: return pl.au($[0])
                }
            })
        }

    }
    return {
        'type libraries': {
            'annotation': $['type libraries'].annotation,
            'dictionary': $['type libraries'].dictionary.map(($) => {
                return {
                    'atom types': $['atom types'],
                    'imports': $.imports,
                    'global types': {
                        'declarations': {
                            'annotation': $['global types'].annotation,
                            'dictionary': $['global types'].dictionary.map(($) => {
                                return {
                                    'parameters': $.declaration.parameters,
                                    'result': $.declaration.result,
                                }
                            })
                        },
                        'definitions': {
                            'annotation': $['global types'].annotation,
                            'dictionary': $['global types'].dictionary.map(($) => {
                                return {
                                    'type': typeResolver2def($.definition.type),
                                }
                            })
                        },
                        'implementations': {
                            'annotation': $['global types'].annotation,
                            'dictionary': $['global types'].dictionary.map(($) => {
                                return {
                                    'variables': $.definition.variables,
                                    'type': $.definition.type,
                                    'result': $.definition.result,
                                }
                            })
                        }
                    }
                }
            })
        }
    }
}


import { A } from "../api.generated"

export const $$: A.getTestSet = ($) => {

    const resolve = a_pareto_lang_data_resolve.$a.resolve<pd.SourceLocation>(
        {
            'resolveDictionary': a_resolve.$r.safeResolveDictionary({
                'onError': ($) => {
                    pv.logDebugMessage(`ERROR: ${$}`)
                }
            })
        },
        {
            'onError': ($) => {
                pv.logDebugMessage(`${$.annotation.file}:${$.annotation.line}:${$.annotation.column}: ->`)
                pl.cc($.message, ($) => {
                    switch ($[0]) {
                        case 'no such entry':
                            pl.ss($, ($) => {
                                pv.logDebugMessage(`no such entry: ${$.key}`)
                            })
                            break
                        case 'not the right state':
                            pl.ss($, ($) => {

                            })
                            break
                        default: pl.au($[0])
                    }
                })
                //$.annotation.
            }
        }
    )
    const resolved_project = resolve({
        'root': split(d_playground),
    })

    const resolved = resolved_project['type libraries'].__unsafeGetEntry("pareto lang data")

    const glossary = a_pub.$b.map2Glossary()({
        'library': resolved,
        'atom mappings': pd.d({
            "text": ['string', null],
            "identifier": ['string', null],
        }),
        'mapping settings': {
            'constraints mapping': {
                'constraints': [true, ['required', null]],
                'terminal values': true,
            },
            'create annotations': true,
        }
    })

    // a_fp.$b.createFile()(
    //     ($i) => {
    //         $i(
    //             pd.a([$.testDirectory, "FOO.ts"]),
    //             ($i) => {
    //                 a_glossary.$b.serializeGlossary()(glossary, $i)
    //             }
    //         )
    //     },
    //     {
    //         'logError': () => {

    //         }
    //     })

    resolved['global types'].definitions.__forEach(() => false, ($) => {
        function type($: g_resolved.T.Type) {
            pl.cc($.type, ($) => {
                switch ($[0]) {
                    case 'array':
                        pl.ss($, ($) => {

                        })
                        break
                    case 'dictionary':
                        pl.ss($, ($) => {
                            // $.constraints.__forEach(() => false, ($) => {
                            //     pl.cc($.cast, ($) => {
                            //       switch ($[0]) {
                            //           case 'dictionary': 
                            //               pl.ss($, ($) => {
                            //                   $.constraints.dictionary.type
                            //               })
                            //               break
                            //           default: pl.au($[0])
                            //       }
                            //     })
                            // })
                        })
                        break
                    case 'optional':
                        pl.ss($, ($) => {
                            type($.type)
                        })
                        break
                    //default: pl.au($[0])
                }
            })
        }
        type($.type)
    })


    const pld = a_pld.$b.resolve()(a_2prototypesystem.$a.map(
        {
            'filter': a_dictionary.$r.filter(),
            'resolveDictionary': a_resolve.$r.safeResolveDictionary({
                'onError': () => {

                }
            }),
            'rekey': a_dictionary.$r.unsafeRekey(),
            'escape': a_string.$r.escape(),
            'merge': a_dictionary.$r.mergeAndIgnore(
                {
                    'error': {
                        'data': () => {

                        },
                        'end': () => {

                        }
                    }
                }
            ),
            'addEntry': a_dictionary.$r.unsafeAddEntry(),
            'mergeDictionaries': a_dictionary.$r.mergeDictionaries(),
        }
    )({
        'data': resolved_project,
        'atom mappings': pd.d({
            "pareto lang data": pd.d({
                "text": ['string', null],
                "identifier": ['string', null],
            }),
            "proto typesystem": pd.d({
                "identifier": ['string', null],
            }),
            "proto implementation": pd.d({
                "identifier": ['string', null],
                "numeric literal": ['number', null],
                "string literal": ['string', null],
            }),
        }),
    }))

    a_pld.$b.serializeToFileSystem()(
        {
            'data': pld,
            'path': pm.wrapRawArray([$.testDirectory, "src", "typesystem.ts"])
        },
        null,
    )



    const pli = a_2protoimplementation.$a.map(
        {
            'filter': a_dictionary.$r.filter(),
            'resolveDictionary': a_resolve.$r.safeResolveDictionary({
                'onError': () => {

                }
            }),
            'rekey': a_dictionary.$r.unsafeRekey(),
            'escape': a_string.$r.escape(),
            'merge': a_dictionary.$r.mergeAndIgnore(
                {
                    'error': {
                        'data': () => {

                        },
                        'end': () => {

                        }
                    }
                }
            ),
            'addEntry': a_dictionary.$r.unsafeAddEntry(),
            'mergeDictionaries': a_dictionary.$r.mergeDictionaries(),
        }
    )({
        'data': resolved_project,
        // 'atom mappings': pd.d({
        //     "pareto lang data": pd.d({
        //         "text": ['string', null],
        //         "identifier": ['string', null],
        //     }),
        //     "proto typesystem": pd.d({
        //         "identifier": ['string', null],
        //     }),
        //     "proto implementation": pd.d({
        //         "identifier": ['string', null],
        //         "numeric literal": ['number', null],
        //         "string literal": ['string', null],
        //     }),
        // }),
    })

    a_pli.$b.serializeToFileSystem()(
        {
            'data': pli,
            'path': pm.wrapRawArray([$.testDirectory, "src", "index.ts"])
        },
        null,
    )





    return pa.asyncValue({
        elements: pm.wrapRawDictionary({})
    })
}