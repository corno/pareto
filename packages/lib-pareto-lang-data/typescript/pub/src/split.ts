import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'

import * as g_unresolved from "./submodules/unresolved"

const d = pd.d
const a = pd.a


export function split<Annotation>($: g_unresolved.T.Merged__Type__Library<Annotation>): g_unresolved.T.Type__Library<Annotation> {

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
}
