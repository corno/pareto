import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'
import * as pd from 'pareto-core-dev'

import * as Resolve from "./Resolve"

import * as select from "./selectImp"

import * as g_resolve from "res-pareto-resolve"

import * as g_out from "../../resolved"

type Reference<T> = {
    'referent': T,
    'key': string
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

export function createResolveContext<Annotation>(
    $d: {
        readonly resolveDictionary: g_resolve.SYNC.A.F.SafeResolveDictionary;
    },
    $se: {
        //readonly 'onError': g_this.SYNC.I.OnError<Annotation>
    }
): Resolve.$<Annotation> {

    function getEntry<T>($: pt.Lookup<T>, key: string, annotation: Annotation): T {
        return $.__getEntry(
            key,
            ($) => $,
            () => {
                // let keys = ""
                // $.__forEach(() => false, ($, key) => {
                //     keys += `${key}, `
                // })
                //pl.panic(`No Such Entry%% ${key} (${keys})`)
                // $se.onError({
                //     'annotation': annotation,
                //     'message': ['no such entry', {
                //         'key': key
                //     }]
                // })
                return pl.panic(`No Such EntryXX: ${key}`)
            }
        )
    }

    function getAnnotatedEntry<T>($: pt.Lookup<T>, key: {
        'annotation': Annotation,
        'key': string
    }): Reference<T> {
        return {
            'key': key.key,
            'referent': getEntry($, key.key, key.annotation)
        }
    }

    ///////////////////////////////////////////////////////////////


    const Atom: Resolve.types.Atom<Annotation> = ($, $p) => ({
        'type': getAnnotatedEntry($p['atom types'], $.type)
    })

    const Dictionary__Selection: Resolve.types.Dictionary__Selection<Annotation> = ($, $p) => {
        const x = $

        const v_type = Type__Selection($.type, {
            'imports': $p['type sources'].imports,
            'sibling global types': $p['type sources']['sibling global types']
        })
        return {
            'type': v_type,
            'dictionary': pl.cc(select.Type__Selection(v_type), ($) => {
                if ($.type[0] !== 'dictionary') {

                    // $se.onError({
                    //     'annotation': x.dictionary,
                    //     'message': ['not the right state', {
                    //         'found': $.type[0],
                    //         'expected': `dictionary`
                    //     }]
                    // })
                    pl.panic(`not a dictionary`)
                }
                return $.type[1]
            }),

        }
    }

    const Global__Type__Selection: Resolve.types.Global__Type__Selection<Annotation> = ($, $p) => {
        switch ($[0]) {
            case 'cyclic sibling': return pl.ss($, ($) => {
                const v_type = getAnnotatedEntry($p['type sources']['cyclic sibling global types'], $.type)
                return ['cyclic sibling', {
                    'type': v_type,
                }]
            })
            case 'import': return pl.ss($, ($) => {
                const v_library = getAnnotatedEntry($p['type sources'].imports, $.library)
                const v_type = getAnnotatedEntry(v_library.referent.library.referent['global types'].definitions, $.type)
                return ['import', {
                    'library': v_library,
                    'type': v_type,
                }]
            })
            case 'resolved sibling': return pl.ss($, ($) => {
                const v_type = getAnnotatedEntry($p['type sources']['sibling global types'], $.type)
                return ['resolved sibling', {
                    'type': v_type,
                }]
            })
            default: return pl.au($[0])
        }
    }

    // const Model: Resolve.types.Model<Annotation> = ($, $p) => {
    //     const tl = Type__Library($['type library'], $p)
    //     return {
    //         'type library': tl,
    //         'root': getAnnotatedEntry(tl['global types'].definitions, $.root)
    //     }
    // }

    const Root: Resolve.types.Root<Annotation> = ($) => {
        return Project($)
    }
    const Type: Resolve.types.Type<Annotation> = ($, $p) => {
        return {
            'type': pl.cc($.type, ($) => {
                switch ($[0]) {
                    case 'array': return pl.ss($, ($) => ['array', {
                        'type': Type($.type, $p)
                    }])
                    case 'component': return pl.ss($, ($) => {
                        return ['component', {
                            'type': Global__Type__Selection($.type, {
                                'type sources': $p['type sources'],
                            }),
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
                    case 'constraint': return pl.ss($, ($) => ['constraint', Type__Selection($, {
                        'imports': $p['type sources'].imports,
                        'sibling global types': $p['type sources']['sibling global types'],
                    })])
                    case 'dictionary': return pl.ss($, ($): g_out.T.Type._ltype => ['dictionary', {
                        'constraints': $.constraints.dictionary.map<g_out.T.Type._ltype.dictionary.constraints.D>(($) => pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'lookup': return pl.ss($, ($): g_out.T.Type._ltype.dictionary.constraints.D => {
                                    const v_gts = Global__Type__Selection($, $p)
                                    return ['lookup', v_gts]
                                })
                                case 'dictionary': return pl.ss($, ($): g_out.T.Type._ltype.dictionary.constraints.D => {
                                    return ['dictionary', {
                                        'dictionary': Dictionary__Selection($.dictionary, {
                                            'type sources': $p['type sources'],
                                        }),
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
                        })),
                        'key': Atom($.key, { 'atom types': $p['atom types'] }),
                        'type': Type($.type, $p)
                    }])
                    case 'group': return pl.ss($, ($) => {
                        return ['group', {
                            'properties': $.properties.dictionary.map(($) => {
                                return {
                                    'type': Type($.type, $p)
                                }
                            })
                        }]
                    })
                    case 'nothing': return pl.ss($, ($) => ['nothing', null])
                    case 'optional': return pl.ss($, ($) => ['optional', {
                        'type': Type($.type, $p),
                    }])
                    case 'state group': return pl.ss($, ($) => {
                        return ['state group', {
                            'states': $d.resolveDictionary($.states.dictionary, {
                                'map': ($, $l) => {
                                    return {
                                        'type': Type($.value.type, $p),
                                    }
                                }
                            }),
                        }]
                    })
                    case 'cyclic reference': return pl.ss($, ($) => {
                        return ['cyclic reference', {
                            'atom': Atom($.atom, { 'atom types': $p['atom types'] }),
                            'sibling': Global__Type__Selection($.sibling, $p)
                        }]
                    })
                    case 'resolved reference': return pl.ss($, ($) => {
                        return ['resolved reference', {
                            'atom': Atom($.atom, { 'atom types': $p['atom types'] }),
                            'value': pl.cc($.value, ($) => {
                                switch ($[0]) {
                                    case 'lookup': return pl.ss($, ($) => {
                                        const v_gts = Global__Type__Selection($, $p)
                                        return ['lookup', v_gts]
                                    })
                                    case 'dictionary': return pl.ss($, ($) => {
                                        return ['dictionary', Dictionary__Selection($, {
                                            'type sources': $p['type sources'],
                                        })]
                                    })
                                    default: return pl.au($[0])
                                }
                            })
                        }]
                    })
                    case 'atom': return pl.ss($, ($) => {
                        return ['atom', {
                            'atom': Atom($.atom, { 'atom types': $p['atom types'] }),
                        }]
                    })
                    default: return pl.au($[0])
                }
            })
        }
    }
    const TypeResolver: Resolve.types.TypeResolver<Annotation> = ($, $p) => {
        return {
            'type': pl.cc($.type, ($): g_out.T.TypeResolver._ltype => {
                switch ($[0]) {
                    case 'array': return pl.ss($, ($) => ['array', {
                        'type': TypeResolver($.type, $p)
                    }])
                    case 'component': return pl.ss($, ($) => {
                        return ['component', {
                            'type': Global__Type__Selection($.type, {
                                'type sources': $p['type sources'],
                            }),
                            'arguments': $.arguments.dictionary.map(($) => {
                                // return mapOptional(
                                //     $,
                                //     ($) => No__Context__Value__Selection($, {
                                //         'variables': $p.variables
                                //     })
                                // )
                                return null
                            })
                        }]
                    })
                    case 'constraint': return pl.ss($, ($) => ['constraint', Type__Selection($, {
                        'imports': $p['type sources'].imports,
                        'sibling global types': $p['type sources']['sibling global types'],
                    })])
                    case 'dictionary': return pl.ss($, ($): g_out.T.TypeResolver._ltype => ['dictionary', {
                        'constraints': $.constraints.dictionary.map<g_out.T.Type._ltype.dictionary.constraints.D>(($) => pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'lookup': return pl.ss($, ($): g_out.T.Type._ltype.dictionary.constraints.D => {
                                    const v_gts = Global__Type__Selection($, $p)
                                    return ['lookup', v_gts]
                                })
                                case 'dictionary': return pl.ss($, ($): g_out.T.Type._ltype.dictionary.constraints.D => {
                                    return ['dictionary', {
                                        'dictionary': Dictionary__Selection($.dictionary, {
                                            'type sources': $p['type sources'],
                                        }),
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
                        })),
                        'key': Atom($.key, { 'atom types': $p['atom types'] }),
                        'type': TypeResolver($.type, $p)
                    }])
                    case 'group': return pl.ss($, ($) => {
                        return ['group', {
                            'properties': $.properties.dictionary.map(($) => {
                                return {
                                    'type': TypeResolver($.type, $p)
                                }
                            })
                        }]
                    })
                    case 'nothing': return pl.ss($, ($) => ['nothing', null])
                    case 'optional': return pl.ss($, ($) => ['optional', {
                        'type': TypeResolver($.type, $p),
                    }])
                    case 'state group': return pl.ss($, ($) => {
                        return ['state group', {
                            'states': $d.resolveDictionary($.states.dictionary, {
                                'map': ($, $l) => {
                                    return {
                                        'type': TypeResolver($.value.type, $p),
                                    }
                                }
                            }),
                        }]
                    })
                    case 'cyclic reference': return pl.ss($, ($) => {
                        return ['cyclic reference', {
                            'atom': Atom($.atom, { 'atom types': $p['atom types'] }),
                            'sibling': Global__Type__Selection($.sibling, $p)
                        }]
                    })
                    case 'resolved reference': return pl.ss($, ($) => {
                        return ['resolved reference', {
                            'atom': Atom($.atom, { 'atom types': $p['atom types'] }),
                            'value': pl.cc($.value, ($) => {
                                switch ($[0]) {
                                    case 'lookup': return pl.ss($, ($) => {
                                        const v_gts = Global__Type__Selection($, $p)
                                        return ['lookup', v_gts]
                                    })
                                    case 'dictionary': return pl.ss($, ($) => {
                                        return ['dictionary', Dictionary__Selection($, {
                                            'type sources': $p['type sources'],
                                        })]
                                    })
                                    default: return pl.au($[0])
                                }
                            })
                        }]
                    })
                    case 'atom': return pl.ss($, ($) => {
                        return ['atom', {
                            'atom': Atom($.atom, { 'atom types': $p['atom types'] }),
                        }]
                    })
                    default: return pl.au($[0])
                }
            })
        }
    }
    const Type__Selection: Resolve.types.Type__Selection<Annotation> = ($, $p) => {

        const v_import = mapOptional(
            $.import,
            ($) => getAnnotatedEntry($p.imports, $)
        )

        const v_global_type = getAnnotatedEntry(
            pl.optional(
                v_import,
                ($) => $.referent.library.referent['global types'].definitions,
                () => $p['sibling global types']
            ),
            $['global type'],
        )
        const v_tail = mapOptional(
            $.tail,
            ($) => Type__Selection__Tail($, {
                'context': v_global_type.referent.type
            }),
        )
        return {
            'import': v_import,
            'global type': v_global_type,
            'tail': v_tail,
        }
    }

    // const No__Context__Value__Selection: Resolve.types.No__Context__Value__Selection<Annotation> = ($, $p) => {
    //     const v_start = getAnnotatedEntry($p.variables, $.start)
    //     return {
    //         'start': v_start,
    //         'tail': mapOptional(
    //             $.tail,
    //             ($) => Value__Selection__Tail($, {
    //                 'context': select.Variable(v_start.referent, {
                        
    //                 })
    //             })
    //         )
    //     }
    // }

    const Type__Selection__Tail: Resolve.types.Type__Selection__Tail<Annotation> = ($, $p) => {
        const v_step_type = pl.cc($['step type'], ($): g_out.T.Type__Selection__Tail.step__type => {
            switch ($[0]) {
                case 'array': return pl.ss($, ($): g_out.T.Type__Selection__Tail.step__type => {
                    const x = $
                    const v_array = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'array') {
                            // $se.onError({
                            //     'annotation': undefined,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `array`
                            //     }]
                            // })
                            pl.panic(`not an array`)
                        }
                        return $[1]
                    })
                    const v_tail = mapOptional(
                        $.tail,
                        ($) => {
                            return Type__Selection__Tail($, {
                                'context': v_array.type
                            })
                        },
                    )
                    return ['array', {
                        'array': v_array,
                        'tail': v_tail
                    }]
                })
                case 'dictionary': return pl.ss($, ($) => {
                    const x = $

                    const v_dictionary = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'dictionary') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `dictionary`
                            //     }]
                            // })
                            pl.panic(`not a dictionary`)
                        }
                        return $[1]
                    })
                    const v_tail = mapOptional(
                        $.tail,
                        ($) => {
                            return Type__Selection__Tail($, {
                                'context': v_dictionary.type
                            })
                        },
                    )
                    return ['dictionary', {
                        'dictionary': v_dictionary,
                        'tail': v_tail
                    }]
                })
                case 'group': return pl.ss($, ($) => {
                    const x = $

                    const v_group = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'group') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `group`
                            //     }]
                            // })
                            pl.panic(`not a group`)
                        }
                        return $[1]
                    })
                    const v_property = getAnnotatedEntry(v_group.properties, $.property)
                    const v_tail = mapOptional(
                        $.tail,
                        ($) => {
                            return Type__Selection__Tail($, {
                                'context': v_property.referent.type
                            })
                        },
                    )
                    return ['group', {
                        'group': v_group,
                        'property': v_property,
                        'tail': v_tail
                    }]
                })
                case 'optional': return pl.ss($, ($) => {
                    const x = $

                    const v_optional = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'optional') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `optional`
                            //     }]
                            // })
                            pl.panic(`not an optional`)
                        }
                        return $[1]
                    })
                    const v_tail = mapOptional(
                        $.tail,
                        ($) => {
                            return Type__Selection__Tail($, {
                                'context': v_optional.type
                            })
                        },
                    )
                    return ['optional', {
                        'optional': v_optional,
                        'tail': v_tail
                    }]
                })
                case 'state group': return pl.ss($, ($) => {
                    const x = $

                    const v_state_group = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'state group') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `state group`
                            //     }]
                            // })
                            pl.panic(`not a state group`)
                        }
                        return $[1]
                    })
                    const v_state = getAnnotatedEntry(v_state_group.states, $.state)

                    const v_tail = mapOptional(
                        $.tail,
                        ($) => {
                            return Type__Selection__Tail($, {
                                'context': v_state.referent.type
                            })
                        },
                    )
                    return ['state group', {
                        'state group': v_state_group,
                        'state': v_state,
                        'tail': v_tail
                    }]
                })
                default: return pl.au($[0])
            }
        })
        return {
            'step type': v_step_type,
        }
    }

    const Project: Resolve.types.Project<Annotation> = ($) => {
        return {
            'type libraries': $d.resolveDictionary(
                $['type libraries'].dictionary,
                {
                    'map': ($, $l) => Type__Library($.value, {
                        'external type libraries': $l['non circular siblings']
                    })
                })
        }
    }

    const Imports: Resolve.types.Imports<Annotation> = ($, $p) => {
        return $.dictionary.__mapWithKey(($, key) => {
            return {
                'library': getAnnotatedEntry($p['external type libraries'], $.library)
            }
        })
    }

    const Atom__Types: Resolve.types.Atom__Types<Annotation> = ($) => {
        return $.dictionary.map(($) => null)
    }

    const Global__Type__Declaration: Resolve.types.Global__Type__Declaration<Annotation> = ($, $p) => {
        return {
            'parameters': $d.resolveDictionary($.parameters.dictionary, {
                'map': (($): g_out.T.Parameters.D => {
                    return {
                        'optional': $.value.optional,
                        'type': pl.cc($.value.type, ($) => {
                            switch ($[0]) {
                                case 'resolved value': return pl.ss($, ($) => {
                                    return ['resolved value', getAnnotatedEntry($p['all siblings'], $)]
                                })
                                case 'key': return pl.ss($, ($) => {
                                    return ['key', null]
                                })
                                case 'cyclic sibling lookup': return pl.ss($, ($) => {
                                    return ['cyclic sibling lookup', getAnnotatedEntry($p['all siblings'], $)]
                                })
                                case 'sibling lookup': return pl.ss($, ($) => {
                                    return ['sibling lookup', getAnnotatedEntry($p['all siblings'], $)]
                                })
                                default: return pl.au($[0])
                            }
                        })
                    }
                })
            }),
            'result': mapOptional(
                $.result,
                ($) => getAnnotatedEntry($p['all siblings'], $)
            ),
        }
    }

    const Global__Type__Resolver__Declarations: Resolve.types.Global__Type__Resolver__Declarations<Annotation> = ($) => {
        return $d.resolveDictionary($.dictionary, {
            'map': (($, $l) => {
                return Global__Type__Declaration($.value, {
                    'all siblings': $l['all siblings']
                })
            })
        })
    }

    const Global__Type__Resolver__Implementation: Resolve.types.Global__Type__Resolver__Implementation<Annotation> = ($, $p) => {
        //const v_declaration = getEntry($p['global type declarations'], $p.key, $.declaration)
        const v_variables = Variables($.variables, {
            'parent variables': [false],
            'parameters': [false],
        })
        const v_type = TypeResolver($.type, {
            'atom types': $p['atom types'],
            'type sources': $p['type sources'],
            'variables': v_variables,
        })

        return {
            //'declaration': v_declaration,
            'variables': v_variables,
            'type': v_type,
            'result': mapOptional(
                $.result,
                ($) => Value__Selection__Tail($, {
                    'context': pd.implementMe("SDFSDFSD")
                })
            )
        }
    }

    const Global__Type__Definition: Resolve.types.Global__Type__Definition<Annotation> = ($, $p) => {
        //const v_declaration = getEntry($p['global type declarations'], $p.key, $.declaration)
        // const v_variables = Variables($.variables, {
        //     'parent variables': [false],
        //     'parameters': [false],
        // })
        const v_type = Type($.type, {
            'atom types': $p['atom types'],
            'type sources': $p['type sources'],
            //'variables': v_variables,
        })

        return {
            //'declaration': v_declaration,
            //'variables': v_variables,
            'type': v_type,
            // 'result': mapOptional(
            //     $.result,
            //     ($) => Value__Selection__Tail($, {
            //         'context': pd.implementMe("SDFSDFSD")
            //     })
            // )
        }
    }

    const Type__Library: Resolve.types.Type__Library<Annotation> = ($, $p) => {
        const imports = Imports($.imports, $p)
        const v_atom__types = Atom__Types($['atom types'])
        const v_decl = Global__Type__Resolver__Declarations($['global types'].declarations)
        return {
            'imports': imports,
            'atom types': v_atom__types,
            'global types': {
                'definitions': $d.resolveDictionary($['global types'].definitions.dictionary, {
                    'map': (($, $l) => {
                        return Global__Type__Definition($.value, {
                            'atom types': v_atom__types,
                            'global type declarations': v_decl,
                            'key': $.key,
                            'type sources': {
                                'cyclic sibling global types': $l['all siblings'],
                                'imports': imports,
                                'sibling global types': $l['non circular siblings']
                            }
                        })
                    })
                }),
                'declarations': v_decl,
                'implementations': $d.resolveDictionary($['global types'].implementations.dictionary, {
                    'map': (($, $l) => {
                        return Global__Type__Resolver__Implementation($.value, {
                            'atom types': v_atom__types,
                            'global type declarations': v_decl,
                            'key': $.key,
                            'type sources': {
                                'cyclic sibling global types': $l['all siblings'],
                                'imports': imports,
                                'sibling global types': $l['non circular siblings']
                            }
                        })
                    })
                })
            }
        }
    }

    const Value__Selection__Tail: Resolve.types.Value__Selection__Tail<Annotation> = ($, $p) => {
        return pl.cc($, ($) => {
            switch ($[0]) {
                case 'component': return pl.ss($, ($) => {
                    const v_component = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'component') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `group`
                            //     }]
                            // })
                            pl.panic(`not a component`)
                        }
                        return $[1]
                    })
                    return ['component', {
                        'component': v_component,
                        'tail': mapOptional(
                            $.tail,
                            ($) => Value__Selection__Tail($, {
                                'context': pd.implementMe("SDDSFSFDF")
                            })
                        ),
                    }]
                })
                case 'group': return pl.ss($, ($) => {
                    const v_group = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'group') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `group`
                            //     }]
                            // })
                            pl.panic(`not a group`)
                        }
                        return $[1]
                    })
                    const v_property = getAnnotatedEntry(v_group.properties, $.property)
                    return ['group', {
                        'group': v_group,
                        'property': v_property,
                        'tail': mapOptional(
                            $.tail,
                            ($) => Value__Selection__Tail($, {
                                'context': v_property.referent.type
                            })
                        ),
                    }]
                })
                case 'reference': return pl.ss($, ($) => ['reference', {
                    'reference': pd.implementMe("SDFSDFSD"),
                    'tail': pd.implementMe("SDFSDFSD"),
                }])
                case 'state group': return pl.ss($, ($) => ['state group', {
                    'state group': pd.implementMe("SDFSDFSD"),
                    'result type': pd.implementMe("SDFSDFSD"),
                    'states': $.states.dictionary.map(($) => {
                        return {
                            'constraints': pd.implementMe("SDFSDFSD"),
                            'content': pd.implementMe("SDFSDFSD"),
                        }
                    }),
                }])
                default: return pl.au($[0])
            }
        })
    }

    const Variable: Resolve.types.Variable<Annotation> = ($, $p) => {
        switch ($[0]) {

            case 'parent variable': return pl.ss($, ($) => {
                const x = $
                return ['parent variable', pl.optional(
                    $p['parent variables'],
                    ($) => getAnnotatedEntry($, x),
                    () => pl.panic("$$$$$")
                )]
            })
            case 'parameter': return pl.ss($, ($) => {
                return pd.implementMe("SFSDSFD")
                //return ['parameter', getAnnotatedEntry($p.parameters, $.parameter)]
            })
            default: return pl.au($[0])
        }
    }

    const Variables: Resolve.types.Variables<Annotation> = ($, $p) => {
        return $.dictionary.map(($) => Variable($, {
            'parent variables': $p['parent variables'],
            'parameters': $p.parameters
        }))
    }

    return {
        'Atom': Atom,
        'Atom Types': Atom__Types,
        'Dictionary Selection': Dictionary__Selection,
        'Global Type Selection': Global__Type__Selection,
        'Imports': Imports,
        'Global Type Declaration': Global__Type__Declaration,
        'Global Type Resolver Declarations': Global__Type__Resolver__Declarations,
        'Global Type Definition': Global__Type__Definition,
        //'Model': Model,
        'Project': Project,
        'Root': Root,
        'Type': Type,
        'Type Library': Type__Library,
        'Type Selection': Type__Selection,
        'Type Selection Tail': Type__Selection__Tail,
        'Value Selection Tail': Value__Selection__Tail,
        'Variable': Variable,
        'Variables': Variables,
    }
}
