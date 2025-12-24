import * as _ea from 'exupery-core-alg'

import * as _i_generic from "../../generated/pareto/generic/resolve"
import * as _i_signatures from "../../../interface/generated/pareto/schemas/schema/data_types/resolve"

import * as _i_in from "../../../interface/generated/pareto/schemas/schema/data_types/target"
import * as _i_out from "../../../interface/generated/pareto/schemas/schema/data_types/source"

import * as _r from "../../../interface/generated/pareto/core/resolved"

export const Imports: _i_signatures.Imports = ($, $p) => _ea.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.cc($, ($) => _i_generic.resolve_dictionary(
        $,
        {
            'location 2 string': l2s,
            'map': ($, $p) => _ea.cc($['value'], ($) => _ea.cc($, ($): _i_out.Imports.D => {
                const p_schema_set_child: _i_out.Imports.D.schema_set_child = _ea.cc($['schema set child'], ($) => _i_generic.get_entry_from_stack(
                    params.lookups['sibling schemas'],
                    {
                        'location 2 string': l2s,
                        'reference': $,
                    }
                ))
                const p_schema: _i_out.Imports.D.schema = _ea.cc($['schema'], ($) => _ea.cc(p_schema_set_child.entry, ($) => { // reference constraint ('schema set child')
                    switch ($[0]) {
                        case 'schema': return _ea.ss($, ($) => $)
                        case 'set': return _ea.ss($, ($) => _ea.deprecated_panic("HELP!!!"))
                        default: return _ea.au($[0])
                    }
                }))
                return {
                    'schema set child': p_schema_set_child,
                    'schema': p_schema,
                }
            })),
        }
    ))
})

export const Lookup_Selection: _i_signatures.Lookup_Selection = ($, $p) => _ea.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.block(() => {
        const loc = $.type.location
        const p_type: _i_out.Lookup_Selection._type = _ea.cc($['type'], ($) => _ea.cc($['state group'], ($): _i_out.Lookup_Selection._type => {
            switch ($[0]) {
                case 'dictionary': return _ea.ss($, ($) => {
                    const p_selection = Guaranteed_Value_Selection(
                        $.selection,
                        {
                            'location 2 string': l2s,
                            'parameters': $p.parameters,
                        }
                    )

                    const p_selected_dictionary = p_selection['resulting node'][0] !== 'dictionary' // component constraint (selection)
                        ? _ea.deprecated_panic("not a 'dictionary' but a '", p_selection['resulting node'][0], "' @ ", $p['location 2 string'](loc))
                        : p_selection['resulting node'][1]

                    return ['dictionary', {
                        'selection': p_selection,
                        'selected dictionary': p_selected_dictionary,
                    }]
                })
                case 'not circular dependent siblings': return _ea.ss($, ($) => ['not circular dependent siblings', $p.parameters.values['current dictionary'].transform(
                    ($) => $,
                    () => _ea.deprecated_panic("not in a dictionary @ ", $p['location 2 string'](loc))
                )])
                case 'parameter': return _ea.ss($, ($) => ['parameter', _i_generic.get_entry(
                    _i_generic.dictionary_to_lookup($p.parameters.values.signature['resolved parameters'].lookups, null),
                    {
                        'reference': $,
                        'location 2 string': $p['location 2 string']
                    }
                )])
                case 'possibly circular dependent siblings': return _ea.ss($, ($) => ['possibly circular dependent siblings', $p.parameters.values['current dictionary'].transform(
                    ($) => $,
                    () => _ea.deprecated_panic("SFSFSD")
                )])
                default: return _ea.au($[0])
            }
        }))
        const p_resulting_dictionary = _ea.cc(p_type, ($): _i_out.Type_Node.SG.dictionary => {
            switch ($[0]) {
                case 'dictionary': return _ea.ss($, ($) => $['selected dictionary'])
                case 'not circular dependent siblings': return _ea.ss($, ($) => $)
                case 'parameter': return _ea.ss($, ($) => $.entry.dictionary)
                case 'possibly circular dependent siblings': return _ea.ss($, ($) => $)
                default: return _ea.au($[0])
            }
        })
        return ({
            'type': p_type,
            'resulting dictionary': p_resulting_dictionary,
        })
    })
})

export const Number_Type: _i_signatures.Number_Type = ($, $p) => {
    return {
        'precision': _ea.cc($.precision['state group'], ($): _i_out.Number_Type.precision => {
            switch ($[0]) {
                case 'exact': return _ea.ss($, ($) => {
                    return ['exact', {
                        'type': _ea.cc($.type['state group'], ($) => {
                            switch ($[0]) {
                                case 'integer': return _ea.ss($, ($) => ['integer', null])
                                case 'natural': return _ea.ss($, ($) => ['natural', null])
                                case 'positive natural': return _ea.ss($, ($) => ['positive natural', null])
                                default: return _ea.au($[0])
                            }
                        }),
                        'decimal separator offset': _ea.cc($['decimal separator offset'], ($) => {
                            return $
                        })
                    }]
                })
                case 'approximation': return _ea.ss($, ($) => ['approximation', {
                    'significant digits': $['significant digits']
                }])
                default: return _ea.au($[0])
            }
        }),
    }
}

export const Signature_Parameters: _i_signatures.Signature_Parameters = ($, $p) => {

    const p_parameters_values: _i_out.Signature_Parameters.values = _i_generic.resolve_dictionary(
        $.values,
        {
            'location 2 string': $p['location 2 string'],
            'map': ($, $l) => {

                const p_schema_type = Type_Reference(
                    $.value['data type'],
                    {
                        'location 2 string': $p['location 2 string'],
                        'parameters': {
                            'lookups': {
                                'types': _i_generic.dictionary_to_lookup($p.parameters.values.types.dictionary, null),
                            },
                            'values': {
                                'imports': _ea.not_set(),
                            },
                        },
                    }

                )
                const p_presence = $.value.presence['state group']

                return {
                    'data type': p_schema_type,
                    'presence': p_presence,
                }
            },
        }
    )
    const lookups_loc = $.lookups.location
    const p_parameters_lookups: _i_out.Signature_Parameters.lookups = _i_generic.resolve_dictionary(
        $.lookups,
        {
            'location 2 string': $p['location 2 string'],
            'map': ($, $l) => {

                const p_referent = Type_Reference(
                    $.value.referent,
                    {
                        'location 2 string': $p['location 2 string'],
                        'parameters': {
                            'lookups': {
                                'types': _i_generic.dictionary_to_lookup($p.parameters.values.types.dictionary, null),
                            },
                            'values': {
                                'imports': _ea.not_set(),
                            },
                        }
                    }
                )

                const p_type: _i_out.Signature_Parameters.lookups.D._type = _ea.cc($.value.type['state group'], ($) => {
                    switch ($[0]) {
                        case 'acyclic': return _ea.ss($, ($) => ['acyclic', null])
                        case 'cyclic': return _ea.ss($, ($) => ['cyclic', null])
                        case 'stack': return _ea.ss($, ($) => ['stack', $])
                        default: return _ea.au($[0])
                    }
                })
                const p_presence = $.value.presence['state group']
                return {
                    'referent': p_referent,
                    'dictionary': _ea.cc(p_referent['resulting node'], ($) => { // component constraint (referent)
                        switch ($[0]) {
                            case 'dictionary': return _ea.ss($, ($) => $)
                            default: return _ea.deprecated_panic(`not a 'dictionary' but a '${$[0]}' @ ${$p['location 2 string'](lookups_loc)}`)

                        }
                    }),
                    'type': p_type,
                    'presence': p_presence,
                }
            },
        }
    )
    return {
        'lookups': p_parameters_lookups,
        'values': p_parameters_values,
    }
}
export const Globals: _i_signatures.Globals = ($, $p) => {
    const p_number_types: _i_out.Globals.number_types = _i_generic.resolve_dictionary(
        $['number types'],
        {
            'location 2 string': $p['location 2 string'],
            'map': ($, $l) => Number_Type(
                $.value,
                {
                    'location 2 string': $p['location 2 string'],
                    'parameters': {
                        'lookups': null,
                        'values': null,
                    },
                }
            ),
        }
    )
    const p_text_types: _i_out.Globals.text_types = _i_generic.resolve_dictionary(
        $['text types'],
        {
            'location 2 string': $p['location 2 string'],
            'map': ($, $l) => Text_Type(
                $.value,
                {
                    'location 2 string': $p['location 2 string'],
                    'parameters': {
                        'lookups': null,
                        'values': null,
                    },
                }
            ),
        }
    )
    return {
        'number types': p_number_types,
        'text types': p_text_types,
        'complexity': $['complexity']['state group'],
    }
}

export const Signature: _i_signatures.Signature = ($, $p) => {
    const p_parameters: _i_out.Signature.parameters = _ea.cc($.parameters['state group'], ($) => {
        switch ($[0]) {
            case 'local': return _ea.ss($, ($) => ['local', Signature_Parameters($, {
                'location 2 string': $p['location 2 string'],
                'parameters': {
                    'lookups': null,
                    'values': {
                        'imports': $p.parameters.values.imports,
                        'types': $p.parameters.values.types,
                    },
                }
            })])
            case 'same as': return _ea.ss($, ($) => ['same as', _i_generic.get_entry(
                $p.parameters.lookups['sibling signatures'],
                {
                    'reference': {
                        'key': $.key,
                        'location': $.location
                    },
                    'location 2 string': $p['location 2 string'],
                }
            )])
            default: return _ea.au($[0])
        }
    })
    return {
        'type': $p.parameters.values.type,
        'parameters': p_parameters,
        'resolved parameters': _ea.cc(p_parameters, ($) => {
            switch ($[0]) {
                case 'local': return _ea.ss($, ($) => $)
                case 'same as': return _ea.ss($, ($) => $.entry['resolved parameters'])
                default: return _ea.au($[0])
            }
        })
    }
}

export const Signatures: _i_signatures.Signatures = ($, $p) => {
    return _i_generic.resolve_dense_ordered_dictionary(
        $,
        {
            'location 2 string': $p['location 2 string'],
            'map': ($, $l) => {
                const p_linked_entry = _i_generic.get_entry(
                    _i_generic.dictionary_to_lookup($p.parameters.values.types.dictionary, null),
                    {
                        'reference': {
                            'key': $.key,
                            'location': $.location
                        },
                        'location 2 string': $p['location 2 string'],
                    }
                )

                return Signature($.value, {
                    'location 2 string': $p['location 2 string'],
                    'parameters': {
                        'lookups': {
                            'sibling signatures': $l['not circular dependent siblings'],
                        },
                        'values': {
                            'imports': $p.parameters.values.imports,
                            'types': $p.parameters.values.types,
                            'type': p_linked_entry.entry,
                        },
                    }
                })
            },
            'denseness benchmark': $p.parameters.values.types.dictionary,
        }
    )
}

export const Schema_Tree: _i_signatures.Schema_Tree = ($, $p) => _ea.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.cc($['state group'], ($): _i_out.Schemas.D => {
        switch ($[0]) {
            case 'schema': return _ea.ss($, ($) => ['schema', _ea.block(() => {
                const p_imports = Imports($.imports, {
                    'location 2 string': l2s,
                    'parameters': {
                        'lookups': {
                            'sibling schemas': params.lookups['sibling schemas'],

                        },
                        'values': null,
                    }
                })
                const p_globals: _i_out.Schema.globals = _ea.cc($['globals'], ($) => Globals(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': {
                            'lookups': null,
                            'values': null,
                        }
                    }
                ))
                const p_types: _i_out.Types = _i_generic.resolve_ordered_dictionary(
                    $.types,
                    {
                        'location 2 string': l2s,
                        'map': ($, $l) => {
                            const p_type_parameters: _i_out.Type.type_parameters = _i_generic.resolve_dictionary(
                                $.value['type parameters'],
                                {
                                    'location 2 string': l2s,
                                    'map': ($, $l) => {
                                        return $.value
                                    },
                                }
                            )
                            const p_type = Type_Node(
                                $.value.node,
                                {
                                    'parameters': {
                                        'lookups': {
                                            'noncircular sibling types': $l['not circular dependent siblings'],
                                            'possibly circular dependent sibling types': $l['possibly circular dependent siblings'],
                                        },
                                        'values': {
                                            'imports': _ea.set(p_imports),
                                            'globals': _ea.set(p_globals),
                                            'type parameters': p_type_parameters,
                                        },
                                    },
                                    'location 2 string': l2s,
                                },
                            )
                            return {
                                'type parameters': p_type_parameters,
                                'node': p_type,

                            }
                        },
                    }
                )
                const p_complexity: _i_out.Schema.complexity = _ea.cc($.complexity['state group'], ($) => {
                    switch ($[0]) {
                        case 'constrained': return _ea.ss($, ($) => {

                            const p_signatures: _i_out.Resolve_Logic.signatures = _ea.cc($.signatures, ($) => {
                                const p_types_2: _i_out.Resolve_Logic.signatures.types = _ea.cc($, ($) => Signatures(
                                    $.types,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': {
                                            'lookups': null,
                                            'values': {
                                                'imports': p_imports,
                                                'types': p_types,
                                            },
                                        }
                                    }
                                ))
                                return {
                                    'types': p_types_2,
                                }
                            })
                            const p_resolvers: _i_out.Resolve_Logic.resolvers = _i_generic.resolve_dense_ordered_dictionary(
                                $.resolvers,
                                {
                                    'location 2 string': l2s,
                                    'map': ($, $l) => {

                                        const key = $.key

                                        const p_linked_entry = _i_generic.get_entry(
                                            _i_generic.dictionary_to_lookup(p_types.dictionary, null),
                                            {
                                                'reference': {
                                                    'key': key,
                                                    'location': $.location
                                                },
                                                'location 2 string': l2s,
                                            }
                                        )
                                        const p_signature = _i_generic.get_entry(
                                            _i_generic.dictionary_to_lookup(p_signatures.types.dictionary, null),
                                            {
                                                'reference': {
                                                    'key': key,
                                                    'location': $.location
                                                },
                                                'location 2 string': l2s,
                                            }
                                        )

                                        const p_type_resolver = Node_Resolver(
                                            $.value['type resolver'],
                                            {
                                                'parameters': {
                                                    'lookups': {
                                                        'sibling property resolvers': _ea.not_set(),
                                                        'parent sibling property resolvers': _ea.not_set(),

                                                    },
                                                    'values': {
                                                        'list cursor': _ea.not_set(),
                                                        'linked entry': _ea.not_set(),
                                                        'current dictionary': _ea.not_set(),
                                                        'current ordered dictionary': _ea.not_set(),
                                                        'option constraints': _ea.not_set(),

                                                        'definition': p_linked_entry.entry.node,
                                                        'signature': p_signature.entry,

                                                        'types': p_types,
                                                        'imports': _ea.set(p_imports),
                                                        'signatures': p_signatures.types
                                                    },
                                                },
                                                'location 2 string': l2s,
                                            },
                                        )
                                        return {
                                            'signature': p_signature.entry,
                                            'type resolver': p_type_resolver,
                                        }
                                    },
                                    'denseness benchmark': p_signatures.types.dictionary,
                                }
                            )
                            return ['constrained', {
                                'signatures': p_signatures,
                                'resolvers': p_resolvers,
                            }]
                        })
                        case 'unconstrained': return _ea.ss($, ($) => ['unconstrained', null])
                        default: return _ea.au($[0])
                    }
                })
                return ({
                    'imports': p_imports,
                    'globals': p_globals,
                    'types': p_types,
                    'complexity': p_complexity,
                })
            })])
            case 'set':
            case 'set': return _ea.ss($, ($) => ['set', Schemas(
                $,
                {
                    'location 2 string': l2s,
                    'parameters': params,
                }
            )])
            default: return _ea.au($[0])
        }
    })
})

export const Schemas: _i_signatures.Schemas = ($, $p) => _ea.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _i_generic.resolve_ordered_dictionary(
        $,
        {
            'location 2 string': l2s,
            'map': ($, $l) => _ea.cc($['value'], ($) => Schema_Tree(
                $,
                {
                    'location 2 string': l2s,
                    'parameters': {
                        'lookups': {
                            'sibling schemas': _i_generic.push_stack(params.lookups['sibling schemas'], {
                                'element': $l['not circular dependent siblings']
                            })
                        },
                        'values': null,
                    },
                }
            )),
        }
    )
})

export const Text_Type: _i_signatures.Text_Type = ($, $p) => {
    return {
        'type': _ea.cc($.type['state group'], ($): _i_out.Text_Type._type => {
            switch ($[0]) {
                case 'single line': return _ea.ss($, ($) => ['single line', null])
                case 'multi line': return _ea.ss($, ($) => ['multi line', null])
                default: return _ea.au($[0])
            }
        }),
    }
}

export const Type_Node: _i_signatures.Type_Node = ($, $p) => {
    const loc = $.location
    return _ea.cc($['state group'], ($) => {
        switch ($[0]) {
            case 'boolean': return _ea.ss($, ($): _i_out.Type_Node => ['boolean', null])
            case 'number': return _ea.ss($, ($): _i_out.Type_Node => ['number', _ea.cc($['state group'], ($): _i_out.Type_Node.SG._number => {
                switch ($[0]) {
                    case 'global': return _ea.ss($, ($): _i_out.Type_Node.SG._number => ['global', _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup($p.parameters.values.globals.transform(
                            ($) => $['number types'],
                            () => _ea.deprecated_panic("globals not set")
                        ),
                            null
                        ),
                        {
                            'reference': $,
                            'location 2 string': $p['location 2 string']
                        }
                    )])
                    case 'local': return _ea.ss($, ($) => ['local', Number_Type(
                        $,
                        {
                            'location 2 string': $p['location 2 string'],
                            'parameters': {
                                'lookups': null,
                                'values': null,
                            },
                        }
                    )])
                    default: return _ea.au($[0])
                }
            })])
            case 'text': return _ea.ss($, ($): _i_out.Type_Node => ['text', _ea.cc($['state group'], ($): _i_out.Type_Node.SG.text => {
                switch ($[0]) {
                    case 'global': return _ea.ss($, ($): _i_out.Type_Node.SG.text => ['global', _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup($p.parameters.values.globals.transform(
                            ($) => $['text types'],
                            () => _ea.deprecated_panic("globals not set")
                        ),
                            null
                        ),
                        {
                            'reference': $,
                            'location 2 string': $p['location 2 string']
                        }
                    )])
                    case 'local': return _ea.ss($, ($) => ['local', Text_Type(
                        $,
                        {
                            'location 2 string': $p['location 2 string'],
                            'parameters': {
                                'lookups': null,
                                'values': null,
                            },
                        }
                    )])
                    default: return _ea.au($[0])
                }
            })])
            case 'component': return _ea.ss($, ($): _i_out.Type_Node => ['component', _ea.cc($['state group'], ($): _i_out.Type_Node.SG.component => {
                switch ($[0]) {
                    case 'external': return _ea.ss($, ($) => {
                        const sc_import = $p.parameters.values.imports.transform(
                            ($) => $,
                            () => _ea.deprecated_panic("missing")
                        )
                        const p_import = _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(sc_import, null),
                            {
                                'reference': $['import'],
                                'location 2 string': $p['location 2 string']
                            }
                        )
                        return ['external', {
                            'import': p_import,
                            'type': _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(p_import.entry.schema.types.dictionary, null),
                                {
                                    'reference': $['type'],
                                    'location 2 string': $p['location 2 string']
                                },
                            )
                        }]
                    })
                    case 'internal': return _ea.ss($, ($) => ['internal', _i_generic.get_entry(
                        $p.parameters.lookups['noncircular sibling types'],
                        {
                            'reference': $,
                            'location 2 string': $p['location 2 string']
                        }
                    )])
                    case 'internal cyclic': return _ea.ss($, ($) => ['internal cyclic', _i_generic.get_possibly_circular_dependent_sibling_entry(
                        $p.parameters.lookups['possibly circular dependent sibling types'],
                        {
                            'reference': $,
                            'location 2 string': $p['location 2 string']
                        }
                    )])
                    default: return _ea.au($[0])
                }
            })])
            case 'dictionary': return _ea.ss($, ($) => {
                const p_type = Type_Node(
                    $.node,
                    $p,
                )
                return ['dictionary', {
                    'node': p_type,
                    'ordered': $.ordered,
                }]
            })
            case 'group': return _ea.ss($, ($) => ['group', _i_generic.resolve_ordered_dictionary($, {
                'location 2 string': $p['location 2 string'],
                'map': ($, $l) => ({
                    'description': $.value.description,
                    'node': Type_Node(
                        $.value.node,
                        $p,
                    )
                }),
            })])
            case 'list': return _ea.ss($, ($) => {
                const p_type = Type_Node(
                    $.node,
                    $p,
                )
                return ['list', {
                    'node': p_type,
                }]
            })
            case 'nothing': return _ea.ss($, ($) => ['nothing', null])
            case 'optional': return _ea.ss($, ($) => ['optional', Type_Node(
                $,
                $p,
            )])

            case 'reference': return _ea.ss($, ($): _i_out.Type_Node => {
                const loc = $.referent['type location'].location.location
                $p.parameters.values.globals.transform(
                    ($) => {
                        if ($.complexity[0] === 'unconstrained') {
                            _ea.deprecated_panic(`schema complexity setting is 'unconstrained', so references are not allowed @ ${$p['location 2 string'](loc)}`)
                        }
                    },
                    () => {
                        _ea.deprecated_panic(`schema doesn't have settings, so no references are allowed @ ${$p['location 2 string'](loc)}`)
                    }
                )
                const p_referent = Type_Node_Reference(
                    $.referent,
                    {
                        'location 2 string': $p['location 2 string'],
                        'parameters': {
                            'lookups': {
                                'types': $p.parameters.lookups['noncircular sibling types'],
                            },
                            'values': {
                                'imports': $p.parameters.values.imports,
                            },
                        }
                    }
                )
                const p_type: _i_out.Type_Node.SG.reference._type = _ea.cc($.type['state group'], ($) => {
                    switch ($[0]) {
                        case 'selected': return _ea.ss($, ($) => {
                            return ['selected', {
                                'dictionary': _ea.cc(p_referent['resulting node'], ($) => { // component constraint (referent)
                                    switch ($[0]) {
                                        case 'dictionary': return _ea.ss($, ($) => $)
                                        default: return _ea.deprecated_panic(`not a 'dictionary' but a '${$[0]}' @ ${$p['location 2 string'](loc)}`)

                                    }
                                }),
                                'dependency': _ea.cc($.dependency['state group'], ($) => {
                                    switch ($[0]) {
                                        case 'cyclic': return _ea.ss($, ($) => ['cyclic', null])
                                        case 'acyclic': return _ea.ss($, ($) => ['acyclic', null])
                                        case 'stack': return _ea.ss($, ($) => ['stack', $])
                                        default: return _ea.au($[0])
                                    }
                                })
                            }]
                        })
                        case 'derived': return _ea.ss($, ($) => ['derived', null])
                        default: return _ea.au($[0])
                    }
                })

                return ['reference', {
                    'referent': p_referent,
                    'type': p_type,
                }]

                // case 'derived reference': return pa.ss($, ($) => ['derived reference', Type_Reference(
                //     $,
                //     $p
                // )])
                // : resolved.Type_Node => {
                //     const p_type = Type_Reference(
                //         $.type,
                //         $p,
                //     )
                //     const p_dictionary = p_type.tail.result[0] !== 'dictionary'
                //         ? pa.panic(`not a dictionary @ ${$p['location 2 string'](loc)}`)
                //         : p_type.tail.result[1]

                //     return ['reference', {
                //         'type': p_type,
                //         // 'resulting dictionary': p_dictionary,
                //         'dependency': $.dependency['state group']
                //     }]
                // }
            })
            case 'state group': return _ea.ss($, ($) => ['state group', _i_generic.resolve_dictionary($, {
                'location 2 string': $p['location 2 string'],
                'map': ($, $l) => ({
                    'description': $.value.description,
                    'node': Type_Node(
                        $.value.node,
                        $p,
                    ),
                }),
            })])
            // case 'type parameter': return _ea.ss($, ($) => ['type parameter', _i_generic.get_entry(
            //     _i_generic.dictionary_to_lookup(
            //         $p.parameters.values['type parameters'],
            //         null,
            //     ),
            //     {
            //         'reference': $,
            //         'location 2 string': $p['location 2 string']
            //     }
            // )])
            default: return _ea.au($[0])
        }
    })
}

export const Type_Parameters: _i_signatures.Type_Parameters = ($, $p) => _i_generic.resolve_dictionary(
    $,
    {
        'location 2 string': $p['location 2 string'],
        'map': ($, $l) => {
            return $.value
        },
    }
)

export const Type_Reference: _i_signatures.Type_Reference = ($, $p) => {
    const x: _i_out.Type_Reference.location = _ea.cc($.location['state group'], ($) => {
        switch ($[0]) {
            case 'external': return _ea.ss($, ($): _i_out.Type_Reference.location => {
                const sc_import = $p.parameters.values.imports.transform(
                    ($) => $,
                    () => _ea.deprecated_panic("missing")
                )
                const p_import = _i_generic.get_entry(
                    _i_generic.dictionary_to_lookup(sc_import, null),
                    {
                        'reference': $['import'],
                        'location 2 string': $p['location 2 string']
                    }
                )
                return ['external', {
                    'import': p_import,
                    'type': _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(p_import.entry.schema.types.dictionary, null),
                        {
                            'reference': $['type'],
                            'location 2 string': $p['location 2 string']
                        },
                    )
                }]
            })
            case 'internal': return _ea.ss($, ($) => ['internal', _i_generic.get_entry(
                $p.parameters.lookups['types'],
                {
                    'reference': $,
                    'location 2 string': $p['location 2 string']
                }
            )])
            default: return _ea.au($[0])
        }
    })
    return {
        'location': x,
        'resulting node': _ea.cc(x, ($): _i_out.Type_Node => {
            switch ($[0]) {
                case 'external': return _ea.ss($, ($) => $.type.entry.node)
                case 'internal': return _ea.ss($, ($) => $.entry.node)
                default: return _ea.au($[0])
            }
        })
    }
}


export const Type_Node_Reference: _i_signatures.Type_Node_Reference = ($, $p) => {
    const p_type_location = Type_Reference($['type location'], $p)
    const p_tail_x: _i_generic.Path<null, _i_out.Type_Node_Reference.tail.L, _i_out.Type_Node> = _i_generic.resolve_path(
        $.tail,
        {
            'seed': p_type_location['resulting node'],
            'map': ($, current) => {
                const sg_loc = $.location
                return _ea.cc($['state group'], ($) => {
                    switch ($[0]) {
                        case 'dictionary': return _ea.ss($, ($) => {
                            const sc_definition: _i_out.Type_Node.SG.dictionary = _ea.cc(current, ($) => {
                                if ($[0] !== 'dictionary') {
                                    return _ea.deprecated_panic(`not a 'dictionary' but a '${$[0]}' @ ${$p['location 2 string'](sg_loc)}`)
                                }
                                return $[1]
                            })
                            return {
                                'element': ['dictionary', null],
                                'result': sc_definition.node
                            }
                        })
                        case 'group': return _ea.ss($, ($) => {
                            const sc_definition: _i_out.Type_Node.SG.group = _ea.cc(current, ($) => {
                                if ($[0] !== 'group') {
                                    return _ea.deprecated_panic(`not a 'group' but a '${$[0]}' @ ${$p['location 2 string'](sg_loc)}`)
                                }
                                return $[1]
                            })
                            const p_child: _i_generic.Acyclic_Entry_Reference<_i_out.Group.D> = _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(sc_definition.dictionary, null),
                                {
                                    'reference': $,
                                    'location 2 string': $p['location 2 string']
                                }
                            )
                            return {
                                'element': ['group', p_child],
                                'result': p_child.entry.node
                            }
                        })
                        case 'list': return _ea.ss($, ($) => {
                            const sc_definition: _i_out.Type_Node.SG.list = _ea.cc(current, ($) => {
                                if ($[0] !== 'list') {
                                    return _ea.deprecated_panic(`not a 'list' but a '${$[0]}' @ ${$p['location 2 string'](sg_loc)}`)
                                }
                                return $[1]
                            })
                            return {
                                'element': ['list', null],
                                'result': sc_definition.node
                            }
                        })
                        case 'optional': return _ea.ss($, ($) => {
                            const sc_definition: _i_out.Type_Node.SG.optional = _ea.cc(current, ($) => {
                                if ($[0] !== 'optional') {
                                    return _ea.deprecated_panic(`not a 'optional' but a '${$[0]}' @ ${$p['location 2 string'](sg_loc)}`)
                                }
                                return $[1]
                            })
                            return {
                                'element': ['optional', null],
                                'result': sc_definition
                            }
                        })
                        case 'state group': return _ea.ss($, ($) => {
                            const p_state_group: _i_out.Type_Node.SG.state_group = _ea.cc(current, ($) => {
                                if ($[0] !== 'state group') {
                                    return _ea.deprecated_panic(`not a 'state group' but a '${$[0]}' @ ${$p['location 2 string'](sg_loc)}`)
                                }
                                return $[1]
                            })
                            const p_child: _i_generic.Acyclic_Entry_Reference<_i_out.Type_Node.SG.state_group.D> = _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(p_state_group, null),
                                {
                                    'reference': $,
                                    'location 2 string': $p['location 2 string']
                                }
                            )
                            return {
                                'element': ['state group', p_child],
                                'result': p_child.entry.node
                            }
                        })
                        default: return _ea.au($[0])
                    }
                })
            }
        }
    )
    return {
        'type location': p_type_location,
        'tail': p_tail_x.list,
        'resulting node': p_tail_x.result.data // list result
    }
}

export const Option_Constraints: _i_signatures.Option_Constraints = ($, $p) => {
    return _ea.cc($, ($) => _i_generic.resolve_dictionary(
        $,
        {
            'location 2 string': $p['location 2 string'],
            'map': ($, $l) => _ea.cc($['value'], ($) => _ea.cc($['state group'], ($) => {
                switch ($[0]) {
                    case 'state': return _ea.ss($, ($) => ['state', _ea.block(() => {
                        const loc = $.selection.start.location
                        const p_selection: _i_out.Option_Constraints.D.SG.state.selection = _ea.cc($['selection'], ($) => Guaranteed_Value_Selection(
                            $,
                            {
                                'location 2 string': $p['location 2 string'],
                                'parameters': $p.parameters
                            }
                        ))
                        const p_selected_state_group = p_selection['resulting node'][0] !== 'state group' // component constraint ('selection')
                            ? _ea.deprecated_panic("not a 'state group' but a '", p_selection['resulting node'][0], "' @ ", $p['location 2 string'](loc))
                            : p_selection['resulting node'][1]
                        const p_state: _i_out.Option_Constraints.D.SG.state.state = _ea.cc($['state'], ($) => _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(p_selected_state_group, null),
                            {
                                'location 2 string': $p['location 2 string'],
                                'reference': $,
                            }
                        ))
                        return ({
                            'selected state group': p_selected_state_group,
                            'selection': p_selection,
                            'state': p_state,
                        })
                    })])
                    case 'assert is set': return _ea.ss($, ($) => ['assert is set', Possibly_Optional(
                        $,
                        {
                            'location 2 string': $p['location 2 string'],
                            'parameters': $p.parameters
                        }
                    )])
                    default: return _ea.au($[0])
                }
            })),
        }
    ))
}

export const Constraint: _i_signatures.Constraint = ($, $p) => {
    const p_selection: _i_out.Constraint.selection = _ea.cc($['selection'], ($) => Relative_Value_Selection(
        $,
        {
            'location 2 string': $p['location 2 string'],
            'parameters': {
                'lookups': null,
                'values': {
                    'node': $p.parameters.values.node,
                }
            }
        }
    ))
    const loc = $.type.location
    const p_type: _i_out.Constraint._type = _ea.cc($.type, ($) => _ea.cc($['state group'], ($) => {
        switch ($[0]) {
            case 'state': return _ea.ss($, ($) => {
                const p_selected_state_group = p_selection['resulting node'][0] !== 'state group' // component constraint ('selection')
                    ? _ea.deprecated_panic("not a 'state group' but a '", p_selection['resulting node'][0], "' @ ", $p['location 2 string'](loc))
                    : p_selection['resulting node'][1]
                const p_state: _i_out.Constraint._type.SG.state.state = _ea.cc($['state'], ($) => _i_generic.get_entry(
                    _i_generic.dictionary_to_lookup(p_selected_state_group, null),
                    {
                        'location 2 string': $p['location 2 string'],
                        'reference': $,
                    }
                ))
                return ['state', {
                    'selected state group': p_selected_state_group,
                    'state': p_state,
                }]
            })
            case 'optional value': return _ea.ss($, ($) => {
                const p_selected_optional_value = p_selection['resulting node'][0] !== 'optional' // component constraint ('selection')
                    ? _ea.deprecated_panic("not a 'optional' but a '", p_selection['resulting node'][0], "' @ ", $p['location 2 string'](loc))
                    : p_selection['resulting node'][1]
                return ['optional value', {
                    'selected optional value': p_selected_optional_value,
                }]
            })
            default: return _ea.au($[0])
        }
    }))
    return {
        'selection': p_selection,
        'type': p_type,
    }
}

export const Property_Constraints: _i_signatures.Property_Constraints = ($, $p) => {
    return _ea.cc($, ($) => _i_generic.resolve_ordered_dictionary(
        $,
        {
            'location 2 string': $p['location 2 string'],
            'map': ($, $l) => _ea.cc($['value'], ($) => _ea.block(() => {
                const p_start: _i_out.Property_Constraint.start = _ea.cc($.start['state group'], ($) => {
                    switch ($[0]) {
                        case 'property': return _ea.ss($, ($) => ['property', null])
                        case 'sibling': return _ea.ss($, ($) => ['sibling', _i_generic.get_entry(
                            $l['not circular dependent siblings'],
                            {
                                'location 2 string': $p['location 2 string'],
                                'reference': $
                            }
                        )])
                        default: return _ea.au($[0])
                    }
                })
                const p_constraint: _i_out.Property_Constraint.constraint = Constraint(
                    $.constraint,
                    {
                        'location 2 string': $p['location 2 string'],
                        'parameters': {
                            'lookups': null,
                            'values': {
                                'node': _ea.cc(p_start, ($) => {
                                    switch ($[0]) {
                                        case 'property': return _ea.ss($, ($) => $p.parameters.values.node)
                                        case 'sibling': return _ea.ss($, ($) => _ea.cc($.entry.constraint.type, ($) => {
                                            switch ($[0]) {
                                                case 'state': return _ea.ss($, ($) => $.state.entry.node)
                                                case 'optional value': return _ea.ss($, ($) => $['selected optional value'])
                                                default: return _ea.au($[0])
                                            }
                                        }))
                                        default: return _ea.au($[0])
                                    }
                                }),
                            }
                        }
                    }
                )
                return ({
                    'start': p_start,
                    'constraint': p_constraint,
                })
            })),
        }
    ))
}

export const Node_Resolver: _i_signatures.Node_Resolver = ($, $p) => {
    const loc = $.location
    const p_type = _ea.cc($['state group'], ($): _i_out.Node_Resolver => {
        switch ($[0]) {
            case 'boolean': return _ea.ss($, ($) => {
                const x = $p.parameters.values.definition[0] !== 'boolean'
                    ? _ea.deprecated_panic("not a 'boolean' but a '", $p.parameters.values.definition[0], "' @ ", $p['location 2 string'](loc))
                    : $p.parameters.values.definition[1]
                return ['boolean', null]
            })
            case 'component': return _ea.ss($, ($): _i_out.Node_Resolver => {
                const x = $p.parameters.values.definition[0] !== 'component'
                    ? _ea.deprecated_panic("not a 'component' but a '", $p.parameters.values.definition[0], "' @ ", $p['location 2 string'](loc))
                    : $p.parameters.values.definition[1]
                const p_location = _ea.cc($.location['state group'], ($): _i_out.Node_Resolver.SG.component.location => {
                    switch ($[0]) {
                        case 'external': return _ea.ss($, ($) => {
                            const sc_import = $p.parameters.values.imports.transform(
                                ($) => $,
                                () => _ea.deprecated_panic("missing")
                            )
                            const p_import = _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(sc_import, null),
                                {
                                    'reference': $['import'],
                                    'location 2 string': $p['location 2 string']
                                }
                            )
                            const pc_constrained: _i_out.Schema.complexity.SG.constrained = _ea.cc(p_import.entry.schema.complexity, ($) => {
                                switch ($[0]) {
                                    case 'constrained': return _ea.ss($, ($) => $)
                                    case 'unconstrained': return _ea.ss($, ($) => _ea.deprecated_panic(`not constrained @ ${$p['location 2 string'](loc)}`))
                                    default: return _ea.au($[0])
                                }
                            })
                            return ['external', {
                                'import': p_import,
                                'type': _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(pc_constrained.signatures.types.dictionary, null),
                                    {
                                        'reference': $['type'],
                                        'location 2 string': $p['location 2 string']
                                    }
                                )
                            }]
                        })
                        case 'internal': return _ea.ss($, ($) => ['internal', _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(
                                $p.parameters.values['signatures'].dictionary,
                                null,
                            ),
                            {
                                'reference': $,
                                'location 2 string': $p['location 2 string']
                            }
                        )])
                        default: return _ea.au($[0])
                    }
                })
                const p_signature: _i_out.Node_Resolver.SG.component.signature = _ea.cc(p_location, ($) => {
                    switch ($[0]) {
                        case 'external': return _ea.ss($, ($) => $.type.entry)
                        case 'internal': return _ea.ss($, ($) => $.entry)
                        default: return _ea.au($[0])
                    }
                })
                const x_type: _i_out.Types.D = _ea.cc(x, ($) => {
                    switch ($[0]) {
                        case 'external': return _ea.ss($, ($) => $.type.entry)
                        case 'internal': return _ea.ss($, ($) => $.entry)
                        case 'internal cyclic': return _ea.ss($, ($) => $.entry['get circular dependent']())
                        default: return _ea.au($[0])
                    }
                })
                if (p_signature.type.node !== x_type.node) {
                    _ea.deprecated_panic("type mismatch @ ", $p['location 2 string'](loc))
                }
                const p_arguments: _i_out.Node_Resolver.SG.component._arguments = $.arguments.transform(
                    ($) => {
                        const x: _i_out.Node_Resolver.SG.component._arguments.O = {
                            'lookups': $.lookups.transform(
                                ($) => _ea.set(_i_generic.resolve_dense_dictionary(
                                    $,
                                    {
                                        'location 2 string': $p['location 2 string'],
                                        'map': ($, $l) => _ea.cc($['value'], ($) => {
                                            //do additional validation
                                            return _ea.cc($['state group'], ($): _i_out.Node_Resolver.SG.component._arguments.O.lookups.O.D => {
                                                switch ($[0]) {
                                                    case 'empty stack': return _ea.ss($, ($) => ['empty stack', null])
                                                    case 'not set': return _ea.ss($, ($) => ['not set', null])
                                                    case 'selection': return _ea.ss($, ($) => ['selection', Lookup_Selection(
                                                        $,
                                                        {
                                                            'location 2 string': $p['location 2 string'],
                                                            'parameters': $p.parameters,
                                                        }
                                                    )])
                                                    case 'stack': return _ea.ss($, ($) => {
                                                        const p_stack = Lookup_Selection($.stack, {
                                                            'location 2 string': $p['location 2 string'],
                                                            'parameters': $p.parameters
                                                        })
                                                        const p_element = Lookup_Selection($.element, {
                                                            'location 2 string': $p['location 2 string'],
                                                            'parameters': $p.parameters
                                                        })
                                                        return ['stack', {
                                                            'stack': p_stack,
                                                            'element': p_element
                                                        }]
                                                    })
                                                    default: return _ea.au($[0])
                                                }
                                            })
                                        }),
                                        'denseness benchmark': p_signature['resolved parameters'].lookups,
                                    }
                                )),
                                () => {
                                    {
                                        //additional validation
                                        if (p_signature['resolved parameters'].lookups !== $p.parameters.values.signature['resolved parameters'].lookups) {

                                            _ea.deprecated_panic("lookup parameters mismatch @ ", $p['location 2 string'](loc))
                                        }
                                    }
                                    return _ea.not_set()
                                }
                            ),
                            'values': $.values.transform(
                                ($) => {
                                    const values_location = $.location

                                    return _ea.set(_i_generic.resolve_dense_dictionary(
                                        $,
                                        {
                                            'location 2 string': $p['location 2 string'],
                                            'map': ($, $l) => _ea.cc($, ($) => {
                                                const linked_entry = _i_generic.get_entry(
                                                    _i_generic.dictionary_to_lookup(p_signature['resolved parameters'].values, null),
                                                    {
                                                        'location 2 string': $p['location 2 string'],
                                                        'reference': $
                                                    }
                                                )
                                                const out = _ea.cc($.value['state group'], ($): _i_out.Node_Resolver.SG.component._arguments.O.values.O.D => {
                                                    switch ($[0]) {
                                                        case 'optional': return _ea.ss($, ($) => ['optional', Possible_Value_Selection(
                                                            $,
                                                            {
                                                                'location 2 string': $p['location 2 string'],
                                                                'parameters': $p.parameters,
                                                            }
                                                        )])
                                                        case 'parameter': return _ea.ss($, ($) => ['parameter', _i_generic.get_entry(
                                                            _i_generic.dictionary_to_lookup($p.parameters.values.signature['resolved parameters'].values, null),
                                                            {
                                                                'reference': $,
                                                                'location 2 string': $p['location 2 string']
                                                            }
                                                        )])
                                                        case 'required': return _ea.ss($, ($) => ['required', Guaranteed_Value_Selection(
                                                            $,
                                                            {
                                                                'location 2 string': $p['location 2 string'],
                                                                'parameters': $p.parameters,
                                                            }
                                                        )])
                                                        default: return _ea.au($[0])
                                                    }
                                                })
                                                {
                                                    //additional validation
                                                    const benchmark = linked_entry.entry
                                                    const key = $.key
                                                    const focus = out

                                                    const walk_path_till_end = ($: _i_out.Type_Node): _i_out.Type_Node => {
                                                        return _ea.cc($, ($) => {
                                                            switch ($[0]) {
                                                                case 'component': return _ea.ss($, ($) => _ea.cc($, ($) => {
                                                                    switch ($[0]) {
                                                                        case 'external': return _ea.ss($, ($) => $.type.entry.node)
                                                                        case 'internal': return _ea.ss($, ($) => $.entry.node)
                                                                        case 'internal cyclic': return _ea.ss($, ($) => $.entry['get circular dependent']().node) //IS THIS SAFE? I Am using a computed value (only available after resolving)
                                                                        default: return _ea.au($[0])
                                                                    }
                                                                }))
                                                                case 'reference': return _ea.ss($, ($) => $.referent['resulting node'])
                                                                default: return $
                                                            }
                                                        })
                                                    }

                                                    _ea.cc(focus, ($) => {
                                                        switch ($[0]) {
                                                            case 'optional': return _ea.ss($, ($) => {

                                                                if (benchmark.presence[0] !== 'optional') {
                                                                    _ea.deprecated_panic("argument is not optional '", key, "' @ ", $p['location 2 string'](values_location))
                                                                }

                                                                _ea.cc($, ($) => {
                                                                    switch ($[0]) {
                                                                        case 'not set': return _ea.ss($, ($) => { })
                                                                        case 'selection': return _ea.ss($, ($) => {
                                                                            //FIXME
                                                                            _ea.cc($, ($) => {
                                                                                switch ($[0]) {
                                                                                    case 'parameter': return _ea.ss($, ($) => { })
                                                                                    case 'result': return _ea.ss($, ($) => { })
                                                                                    default: _ea.au($[0])
                                                                                }
                                                                            })
                                                                        })
                                                                        case 'set': return _ea.ss($, ($) => {

                                                                            if (walk_path_till_end(benchmark['data type']['resulting node']) !== walk_path_till_end($.tail['resulting node'])) {
                                                                                _ea.deprecated_panic("type mismatch in '", key, "' @ ", $p['location 2 string'](values_location))
                                                                            }
                                                                        })
                                                                        default: _ea.au($[0])
                                                                    }
                                                                })

                                                                //FIX validate that types are the same
                                                            })
                                                            case 'parameter': return _ea.ss($, ($) => {
                                                                if ($.entry.presence[0] !== benchmark.presence[0]) {
                                                                    _ea.deprecated_panic("parameter '", key, "' presence mismatch @ ", $p['location 2 string'](values_location))
                                                                }
                                                                if ($.entry['data type']['resulting node'] !== benchmark['data type']['resulting node']) {
                                                                    _ea.deprecated_panic("parameter '", key, "' type mismatch @ ", $p['location 2 string'](values_location))
                                                                }
                                                            })
                                                            case 'required': return _ea.ss($, ($) => {
                                                                if (benchmark.presence[0] !== 'required') {
                                                                    _ea.deprecated_panic("argument '", key, "' is not required @ ", $p['location 2 string'](values_location))
                                                                }
                                                                if (walk_path_till_end(benchmark['data type']['resulting node']) !== walk_path_till_end($.tail['resulting node'])) {
                                                                    _ea.deprecated_panic("type mismatch in '", key, "' @ ", $p['location 2 string'](values_location))
                                                                }

                                                            })
                                                            default: return _ea.au($[0])
                                                        }
                                                    })
                                                }
                                                return out
                                            }),
                                            'denseness benchmark': p_signature['resolved parameters'].values,
                                        }
                                    ))
                                },
                                () => {
                                    {
                                        //additional validation

                                        if (p_signature['resolved parameters'].values !== $p.parameters.values.signature['resolved parameters'].values) {
                                            _ea.deprecated_panic("value parameters mismatch @ ", $p['location 2 string'](loc))
                                        }
                                    }
                                    return _ea.not_set()
                                }
                            ),
                        }
                        return _ea.set(x)
                    },
                    () => {
                        {
                            //additional validation
                            if (p_signature['resolved parameters'].lookups !== $p.parameters.values.signature['resolved parameters'].lookups) {
                                _ea.deprecated_panic("lookup parameters mismatch @ ", $p['location 2 string'](loc))
                            }
                            if (p_signature['resolved parameters'].values !== $p.parameters.values.signature['resolved parameters'].values) {
                                _ea.deprecated_panic("value parameters mismatch @ ", $p['location 2 string'](loc))
                            }
                        }

                        return _ea.not_set()
                    }
                )
                const p_constraints = Property_Constraints(
                    $.constraints,
                    {
                        'location 2 string': $p['location 2 string'],
                        'parameters': {
                            'lookups': null,
                            'values': {
                                'node': _ea.cc(p_location, ($): _i_out.Type_Node => {
                                    switch ($[0]) {
                                        case 'external': return _ea.ss($, ($) => $.type.entry.type.node)
                                        case 'internal': return _ea.ss($, ($) => $.entry.type.node)
                                        default: return _ea.au($[0])
                                    }
                                })
                            }
                        }
                    }
                )
                return ['component', {
                    'location': p_location,
                    'signature': p_signature,
                    'arguments': p_arguments,
                    'constraints': p_constraints,
                }]
            })
            case 'dictionary': return _ea.ss($, ($) => {
                const p_definition = $p.parameters.values.definition[0] !== 'dictionary'
                    ? _ea.deprecated_panic("not a 'dictionary' but a '", $p.parameters.values.definition[0], "' @ ", $p['location 2 string'](loc))
                    : $p.parameters.values.definition[1]

                const p_benchmark = $.benchmark.map(($) => {
                    const p_selection = Guaranteed_Value_Selection($.selection, {
                        'location 2 string': $p['location 2 string'],
                        'parameters': $p.parameters,
                    })

                    const p_resulting_dictionary = p_selection['resulting node'][0] !== 'dictionary' // component constraint ('selection')
                        ? _ea.deprecated_panic("not a 'dictionary' but a '", p_selection['resulting node'][0], "' @ ", $p['location 2 string'](loc))
                        : p_selection['resulting node'][1]
                    return {
                        'selection': p_selection,
                        'resulting dictionary': p_resulting_dictionary,
                        'dense': $.dense
                    }
                })
                return ['dictionary', {
                    'definition': p_definition,
                    'benchmark': p_benchmark,
                    'resolver': Node_Resolver(
                        $.resolver,
                        {
                            'parameters': {
                                'lookups': $p.parameters.lookups,
                                'values': {
                                    'linked entry': p_benchmark.transform( //optional value result ('benchmark')
                                        ($) => _ea.set($),
                                        () => $p.parameters.values['linked entry']
                                    ),
                                    'definition': p_definition.node,
                                    'current dictionary': _ea.set(p_definition),
                                    'current ordered dictionary': _ea.set(p_definition),//FIXME: is it ordered

                                    'types': $p.parameters.values.types,
                                    'imports': $p.parameters.values.imports,
                                    'signature': $p.parameters.values.signature,
                                    'signatures': $p.parameters.values.signatures,
                                    'list cursor': $p.parameters.values['list cursor'],
                                    'option constraints': $p.parameters.values['option constraints'],
                                },
                            },
                            'location 2 string': $p['location 2 string'],
                        },
                    ),
                }]
            })
            case 'group': return _ea.ss($, ($) => {
                const x = $p.parameters.values.definition[0] !== 'group'
                    ? _ea.deprecated_panic("not a 'group' but a '", $p.parameters.values.definition[0], "' @ ", $p['location 2 string'](loc))
                    : $p.parameters.values.definition[1]

                const p_properties: _r.Ordered_Dictionary<null, _i_out.Node_Resolver_Group.D> = _i_generic.resolve_dense_ordered_dictionary(
                    $,
                    {
                        'location 2 string': $p['location 2 string'],
                        'map': ($, $l) => {

                            const p_definition = _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(x.dictionary, null),
                                {
                                    'reference': {
                                        'key': $.key,
                                        'location': $.value.resolver.location
                                    },
                                    'location 2 string': $p['location 2 string']
                                }
                            )
                            const p_resolver = Node_Resolver(
                                $.value.resolver,
                                {
                                    'parameters': {
                                        'lookups': {
                                            //special
                                            'sibling property resolvers': $l['not circular dependent siblings'],
                                            'parent sibling property resolvers': $p.parameters.lookups['sibling property resolvers'],

                                            //copy 
                                        },
                                        'values': {
                                            'definition': p_definition.entry.node,

                                            'types': $p.parameters.values.types,
                                            'imports': $p.parameters.values.imports,
                                            'signature': $p.parameters.values.signature,
                                            'signatures': $p.parameters.values.signatures,
                                            'list cursor': $p.parameters.values['list cursor'],
                                            'linked entry': $p.parameters.values['linked entry'],
                                            'current dictionary': $p.parameters.values['current dictionary'],
                                            'option constraints': $p.parameters.values['option constraints'],
                                            'current ordered dictionary': $p.parameters.values['current ordered dictionary'],
                                        },
                                    },
                                    'location 2 string': $p['location 2 string'],
                                },
                            )
                            return {
                                'definition': p_definition.entry,
                                'resolver': p_resolver,
                            }
                        },
                        'denseness benchmark': x.dictionary,
                    }
                )
                return ['group', p_properties]
            })
            case 'list': return _ea.ss($, ($) => {
                const p_definition = $p.parameters.values.definition[0] !== 'list'
                    ? _ea.deprecated_panic("not a 'list' but a '", $p.parameters.values.definition[0], "' @ ", $p['location 2 string'](loc))
                    : $p.parameters.values.definition[1]
                const p_result = $.result.map(($) => Type_Reference($, {
                    'location 2 string': $p['location 2 string'],
                    'parameters': {
                        'lookups': {
                            'types': _i_generic.dictionary_to_lookup($p.parameters.values.types.dictionary, null),
                        },
                        'values': {
                            'imports': $p.parameters.values.imports,
                        },
                    }
                }))
                const p_resolver = Node_Resolver(
                    $.resolver,
                    {
                        'parameters': {
                            'lookups': $p.parameters.lookups,
                            'values': {
                                'definition': p_definition.node,
                                'list cursor': p_result.transform( // optional value result ('result')
                                    ($) => _ea.set($),
                                    () => $p.parameters.values['list cursor']
                                ), //setting the cursor

                                'types': $p.parameters.values.types,
                                'imports': $p.parameters.values.imports,
                                'signature': $p.parameters.values.signature,
                                'signatures': $p.parameters.values.signatures,
                                'linked entry': $p.parameters.values['linked entry'],
                                'current dictionary': $p.parameters.values['current dictionary'],
                                'option constraints': $p.parameters.values['option constraints'],
                                'current ordered dictionary': $p.parameters.values['current ordered dictionary'],
                            },
                        },
                        'location 2 string': $p['location 2 string'],
                    },
                )
                return ['list', {
                    'result': p_result,
                    'definition': p_definition,
                    'resolver': p_resolver,
                }]
            })
            case 'nothing': return _ea.ss($, ($) => {
                const x = $p.parameters.values.definition[0] !== 'nothing'
                    ? _ea.deprecated_panic("not a 'nothing' but a '", $p.parameters.values.definition[0], "' @ ", $p['location 2 string'](loc))
                    : $p.parameters.values.definition[1]
                return ['nothing', null]
            })
            case 'number': return _ea.ss($, ($) => {
                const x = $p.parameters.values.definition[0] !== 'number'
                    ? _ea.deprecated_panic("not a 'number' but a '", $p.parameters.values.definition[0], "' @ ", $p['location 2 string'](loc))
                    : $p.parameters.values.definition[1]
                return ['number', null]
            })
            case 'optional': return _ea.ss($, ($) => {
                const x = $p.parameters.values.definition[0] !== 'optional'
                    ? _ea.deprecated_panic("not a 'optional' but a '", $p.parameters.values.definition[0], "' @ ", $p['location 2 string'](loc))
                    : $p.parameters.values.definition[1]

                const p_constraints: _i_out.Node_Resolver.SG.state_group.states.D.constraints = Option_Constraints($.constraints, {
                    'location 2 string': $p['location 2 string'],
                    'parameters': $p.parameters,
                })
                const p_resolver = Node_Resolver(
                    $.resolver,
                    {
                        'parameters': {
                            'lookups': {
                                'sibling property resolvers': $p.parameters.lookups['sibling property resolvers'],
                                'parent sibling property resolvers': $p.parameters.lookups['parent sibling property resolvers'],
                            },
                            'values': {
                                'definition': x,
                                'option constraints': _ea.set(p_constraints),

                                'types': $p.parameters.values.types,
                                'imports': $p.parameters.values.imports,
                                'signature': $p.parameters.values.signature,
                                'signatures': $p.parameters.values.signatures,
                                'list cursor': $p.parameters.values['list cursor'],
                                'linked entry': $p.parameters.values['linked entry'],
                                'current dictionary': $p.parameters.values['current dictionary'],
                                'current ordered dictionary': $p.parameters.values['current ordered dictionary'],
                            },
                        },
                        'location 2 string': $p['location 2 string'],
                    },
                )
                return ['optional', {
                    'constraints': p_constraints,
                    'resolver': p_resolver,
                }]
            })
            case 'reference': return _ea.ss($, ($): _i_out.Node_Resolver => {
                const p_definition = $p.parameters.values.definition[0] !== 'reference'
                    ? _ea.deprecated_panic("not a 'reference' but a '", $p.parameters.values.definition[0], "' @ ", $p['location 2 string'](loc))
                    : $p.parameters.values.definition[1]
                return ['reference', {
                    'definition': p_definition,
                    'type': _ea.cc($.type['state group'], ($): _i_out.Node_Resolver.SG.reference._type => {
                        switch ($[0]) {
                            case 'derived': return _ea.ss($, ($) => {
                                const p_definition_2 = p_definition.type[0] !== 'derived'
                                    ? _ea.deprecated_panic("not a 'derived' but a '", p_definition.type[0], "' @ ", $p['location 2 string'](loc))
                                    : p_definition.type[1]
                                return ['derived', {
                                    'value': Guaranteed_Value_Selection(
                                        $.value,
                                        {
                                            'location 2 string': $p['location 2 string'],
                                            'parameters': $p.parameters
                                        }
                                    )
                                }]
                            })
                            case 'selected': return _ea.ss($, ($) => {
                                const p_definition_2 = p_definition.type[0] !== 'selected'
                                    ? _ea.deprecated_panic("not a 'selected' but a '", p_definition.type[0], "' @ ", $p['location 2 string'](loc))
                                    : p_definition.type[1]
                                const p_lookup = Lookup_Selection(
                                    $.lookup,
                                    {
                                        'location 2 string': $p['location 2 string'],
                                        'parameters': $p.parameters,
                                    }
                                )
                                const p_constraints = Property_Constraints(
                                    $.constraints,
                                    {
                                        'location 2 string': $p['location 2 string'],
                                        'parameters': {
                                            'lookups': null,
                                            'values': {
                                                'node': p_lookup['resulting dictionary'].node
                                            }
                                        }
                                    }
                                )
                                return ['selected', {
                                    'definition': p_definition_2,
                                    'lookup': p_lookup,
                                    'constraints': p_constraints,
                                }]
                            })
                            default: return _ea.au($[0])
                        }
                    })
                }]
            })
            case 'state group': return _ea.ss($, ($): _i_out.Node_Resolver => {
                const p_definition = $p.parameters.values.definition[0] !== 'state group'
                    ? _ea.deprecated_panic("not a 'state group' but a '", $p.parameters.values.definition[0], "' @ ", $p['location 2 string'](loc))
                    : $p.parameters.values.definition[1]

                const p_states: _i_out.Node_Resolver.SG.state_group.states = _i_generic.resolve_dense_dictionary(
                    $.states,
                    {
                        'location 2 string': $p['location 2 string'],
                        'map': ($, $l) => {

                            const x2 = _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(p_definition, null),
                                {
                                    'reference': {
                                        'key': $.key,
                                        'location': $.location
                                    },
                                    'location 2 string': $p['location 2 string']
                                }
                            )
                            const p_constraints: _i_out.Node_Resolver.SG.state_group.states.D.constraints = Option_Constraints($.value.constraints, {
                                'location 2 string': $p['location 2 string'],
                                'parameters': $p.parameters,
                            })
                            const vr = Node_Resolver(
                                $.value['resolver'],
                                {
                                    'parameters': {
                                        'lookups': {
                                            'sibling property resolvers': $p.parameters.lookups['sibling property resolvers'],
                                            'parent sibling property resolvers': $p.parameters.lookups['parent sibling property resolvers'],
                                        },
                                        'values': {
                                            'definition': x2.entry.node,
                                            'option constraints': _ea.set(p_constraints),

                                            'types': $p.parameters.values.types,
                                            'imports': $p.parameters.values.imports,
                                            'signature': $p.parameters.values.signature,
                                            'signatures': $p.parameters.values.signatures,
                                            'list cursor': $p.parameters.values['list cursor'],
                                            'linked entry': $p.parameters.values['linked entry'],
                                            'current dictionary': $p.parameters.values['current dictionary'],
                                            'current ordered dictionary': $p.parameters.values['current ordered dictionary'],
                                        },
                                    },
                                    'location 2 string': $p['location 2 string'],
                                },
                            )
                            return {
                                'constraints': p_constraints,
                                //'referenced entry': x2.entry,
                                'resolver': vr,
                            }
                        },
                        'denseness benchmark': p_definition,
                    }
                )


                // case 'state group': return pa.ss($, ($): _i_generic.Resolved_Step<_i_out.Relative_Value_Selection.tail.L, _i_out.Type_Node> => pa.block(() => {
                //     return pa.block(() => {

                //         const sc_definition: _i_out.Type_Node.SG.state_group = pa.cc(current, ($) => {
                //             if ($[0] !== 'state group') {
                //                 return pa.panic(`not a 'state group' but a '${$[0]}' @ ${$p['location 2 string'](sg_loc)}`)
                //             }
                //             return $[1]
                //         })
                //         const p_type: _i_out.Relative_Value_Selection.tail.L.SG.state_group._type = pa.cc($['type'], ($) => Type_Reference(
                //             $,
                //             {
                //                 'location 2 string': l2s,
                //                 'parameters': ({
                //                     'lookups': ({
                //                         'imports': $p.parameters.lookups.imports,
                //                         'types': $p.parameters.lookups.types,
                //                     }),
                //                     'values': null,
                //                 }),
                //             }
                //         ))
                //         const p_states: _i_out.Relative_Value_Selection.tail.L.SG.state_group.states = pa.cc($['states'], ($) => _i_generic.resolve_dense_dictionary(
                //             $,
                //             {
                //                 'location 2 string': l2s,
                //                 'map': ($, $p) => {
                //                     const linked_entry = _i_generic.get_entry(
                //                         _i_generic.dictionary_to_lookup(sc_definition, null),
                //                         {
                //                             'location 2 string': l2s,
                //                             'reference': {
                //                                 'key': $.key,
                //                                 'location': $.location
                //                             },
                //                         }
                //                     )
                //                     return $.value.map(($) => Value_Selection_Tail(
                //                         $,
                //                         {
                //                             'location 2 string': l2s,
                //                             'parameters': {
                //                                 'lookups': params.lookups,
                //                                 'values': {
                //                                     'type': linked_entry.entry
                //                                 }
                //                             },
                //                         }
                //                     ))
                //                 },
                //                 'denseness benchmark': sc_definition,
                //             }
                //         ))
                //         return {
                //             'result': p_type['resulting node'],
                //             'element': ['state group', ({
                //                 'definition': sc_definition,
                //                 'states': p_states,
                //                 'type': p_type,
                //             })]
                //         }
                //     })
                // }))
                return ['state group', {
                    'definition': p_definition,
                    'states': p_states,
                }]
            })
            case 'text': return _ea.ss($, ($) => {
                const x = $p.parameters.values.definition[0] !== 'text'
                    ? _ea.deprecated_panic("not a 'text' but a '", $p.parameters.values.definition[0], "' @ ", $p['location 2 string'](loc))
                    : $p.parameters.values.definition[1]
                return ['text', null]
            })
            // case 'type parameter': return _ea.ss($, ($) => {

            //     const x = $p.parameters.values.definition[0] !== 'type parameter'
            //         ? _ea.deprecated_panic("not a 'type parameter' but a '", $p.parameters.values.definition[0], "' @ ", $p['location 2 string'](loc))
            //         : $p.parameters.values.definition[1]
            //     return ['type parameter', null]
            // })
            default: return _ea.au($[0])
        }
    })
    return p_type
}

export const Relative_Value_Selection: _i_signatures.Relative_Value_Selection = ($, $p) => _ea.block(() => {

    const l2s = $p['location 2 string']
    const params = $p['parameters']

    const p_path: _i_generic.Path<null, _i_out.Relative_Value_Selection.path.L, _i_out.Type_Node> = _i_generic.resolve_path(
        $.path,
        {
            'seed': $p.parameters.values.node,
            'map': ($, current) => {
                const sg_loc = $.location
                return _ea.cc($['state group'], ($): _i_generic.Resolved_Step<_i_out.Relative_Value_Selection.path.L, _i_out.Type_Node> => {
                    switch ($[0]) {
                        case 'component': return _ea.ss($, ($) => {

                            const sc_definition: _i_out.Type_Node.SG.component = _ea.cc(current, ($) => {
                                if ($[0] !== 'component') {
                                    return _ea.deprecated_panic(`not a 'component' but a '${$[0]}' @ ${$p['location 2 string'](sg_loc)}`)
                                }
                                return $[1]
                            })
                            return {
                                'element': ['component', null],
                                'result': _ea.cc(sc_definition, ($) => {
                                    switch ($[0]) {
                                        case 'external': return _ea.ss($, ($) => $.type.entry.node)
                                        case 'internal': return _ea.ss($, ($) => $.entry.node)
                                        case 'internal cyclic': return _ea.ss($, ($) => $.entry['get circular dependent']().node) //this is safe, the types have been resolved at this stage
                                        default: return _ea.au($[0])
                                    }
                                })
                            }
                        })
                        case 'group': return _ea.ss($, ($) => {
                            const sc_definition: _i_out.Type_Node.SG.group = _ea.cc(current, ($) => {
                                if ($[0] !== 'group') {
                                    return _ea.deprecated_panic(`not a 'group' but a '${$[0]}' @ ${$p['location 2 string'](sg_loc)}`)
                                }
                                return $[1]
                            })
                            const p_child: _i_generic.Acyclic_Entry_Reference<_i_out.Group.D> = _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(sc_definition.dictionary, null),
                                {
                                    'reference': $,
                                    'location 2 string': $p['location 2 string']
                                }
                            )
                            return {
                                'element': ['group', p_child],
                                'result': p_child.entry.node
                            }
                        })
                        case 'reference': return _ea.ss($, ($): _i_generic.Resolved_Step<_i_out.Relative_Value_Selection.path.L, _i_out.Type_Node> => {

                            const sc_definition: _i_out.Type_Node.SG.reference = _ea.cc(current, ($) => {
                                if ($[0] !== 'reference') {
                                    return _ea.deprecated_panic(`not a 'reference' but a '${$[0]}' @ ${$p['location 2 string'](sg_loc)}`)
                                }
                                return $[1]
                            })
                            const referent: _i_out.Type_Node_Reference = sc_definition.referent
                            const x: _i_out.Type_Node = _ea.cc(sc_definition.type, ($) => {
                                switch ($[0]) {
                                    case 'derived': return _ea.ss($, ($) => referent['resulting node'])
                                    case 'selected': return _ea.ss($, ($) => _ea.cc(referent['resulting node'], ($) => {
                                        switch ($[0]) {
                                            case 'dictionary': return _ea.ss($, ($) => $.node)
                                            default: return _ea.deprecated_panic("not a dictionary @ ", $p['location 2 string'](sg_loc))
                                        }
                                    }))
                                    default: return _ea.au($[0])
                                }
                            })
                            return {
                                'element': ['reference', {
                                    'definition': sc_definition
                                }],
                                'result': x
                            }
                        })
                        default: return _ea.au($[0])
                    }
                })
            }
        }
    )
    return {
        'path': p_path.list,
        'resulting node': p_path.result.data, // list result
    }
})

export const Possible_Value_Selection: _i_signatures.Optional_Value_Initialization = ($, $p) => _ea.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.cc($['state group'], ($) => {
        switch ($[0]) {
            case 'not set': return _ea.ss($, ($) => ['not set', null])
            case 'set': return _ea.ss($, ($) => ['set', Guaranteed_Value_Selection($, $p)])
            case 'selection': return _ea.ss($, ($): _i_out.Optional_Value_Initialization => {
                return ['selection', Possibly_Optional($, $p)]
            })
            default: return _ea.au($[0])
        }
    })
})

export const Possibly_Optional: _i_signatures.Possible_Value_Selection = ($, $p) => _ea.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.cc($['state group'], ($) => {
        switch ($[0]) {
            case 'parameter': return _ea.ss($, ($) => ['parameter', _i_generic.get_entry(
                _i_generic.dictionary_to_lookup($p.parameters.values.signature['resolved parameters'].values, null),
                {
                    'reference': $,
                    'location 2 string': $p['location 2 string']
                }
            )])
            case 'result': return _ea.ss($, ($) => ['result', _ea.cc($['state group'], ($): _i_out.Possible_Value_Selection.SG.result => {
                switch ($[0]) {
                    case 'state group': return _ea.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling: _i_out.Possible_Value_Selection.SG.result.SG.state_group.property = _ea.cc($['property'], ($) => _i_generic.get_entry(
                            $p.parameters.lookups['sibling property resolvers'],
                            {
                                'reference': $,
                                'location 2 string': $p['location 2 string']
                            }
                        ))
                        const p_state_group = _ea.cc($['state group'], ($) => p_sibling.entry.resolver[0] !== 'state group'
                            ? _ea.deprecated_panic("not a 'state group' but a '", p_sibling.entry.resolver[0], "' @ ", $p['location 2 string'](loc))
                            : p_sibling.entry.resolver[1])

                        const p_result = Type_Reference($.result, {
                            'location 2 string': $p['location 2 string'],
                            'parameters': {
                                'lookups': {
                                    'types': _i_generic.dictionary_to_lookup($p.parameters.values.types.dictionary, null),
                                },
                                'values': {
                                    'imports': $p.parameters.values.imports,
                                },
                            }
                        })
                        return ['state group', {
                            'property': p_sibling,
                            'state group': p_state_group,
                            'result': p_result,
                        }]
                    })
                    case 'optional value': return _ea.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling: _i_out.Possible_Value_Selection.SG.result.SG.optional_value.property = _ea.cc($['property'], ($) => _i_generic.get_entry(
                            $p.parameters.lookups['sibling property resolvers'],
                            {
                                'reference': $,
                                'location 2 string': $p['location 2 string']
                            }
                        ))
                        const p_optional_value = _ea.cc($['optional value'], ($) => p_sibling.entry.resolver[0] !== 'optional'
                            ? _ea.deprecated_panic("not a 'optional' but a '", p_sibling.entry.resolver[0], "' @ ", $p['location 2 string'](loc))
                            : p_sibling.entry.resolver[1])
                        const p_result = Type_Reference($.result, {
                            'location 2 string': $p['location 2 string'],
                            'parameters': {
                                'lookups': {
                                    'types': _i_generic.dictionary_to_lookup($p.parameters.values.types.dictionary, null),
                                },
                                'values': {
                                    'imports': $p.parameters.values.imports,
                                },
                            }
                        })
                        return ['optional value', {
                            'property': p_sibling,
                            'optional value': p_optional_value,
                            'result': p_result,
                        }]
                    })
                    default: return _ea.au($[0])
                }
            })])
            default: return _ea.au($[0])
        }
    })
})

export const Guaranteed_Value_Selection: _i_signatures.Guaranteed_Value_Selection = ($, $p) => _ea.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.block(() => {
        const start_location = $.start.location
        const p_start: _i_out.Guaranteed_Value_Selection.start = _ea.cc($.start['state group'], ($): _i_out.Guaranteed_Value_Selection.start => {
            switch ($[0]) {
                case 'constraint': return _ea.ss($, ($): _i_out.Guaranteed_Value_Selection.start => {
                    return ['constraint', _ea.cc($['state group'], ($): _i_out.Guaranteed_Value_Selection.start.SG.constraint => {
                        switch ($[0]) {
                            case 'component': return _ea.ss($, ($) => {
                                const loc = $['property'].location
                                const p_sibling = _ea.cc($['property'], ($) => _i_generic.get_entry(
                                    $p.parameters.lookups['sibling property resolvers'],
                                    {
                                        'reference': $,
                                        'location 2 string': $p['location 2 string']
                                    }
                                ))

                                const x_component = p_sibling.entry.resolver[0] !== 'component'
                                    ? _ea.deprecated_panic("not a 'component' but a '", p_sibling.entry.resolver[0], "' @ ", $p['location 2 string'](loc))
                                    : p_sibling.entry.resolver[1]

                                const p_constraint = _ea.cc($['constraint'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(x_component.constraints.dictionary, null),
                                    {
                                        'reference': $,
                                        'location 2 string': $p['location 2 string']
                                    }
                                ))
                                return ['component', {
                                    'property': p_sibling,
                                    'constraint': p_constraint
                                }]
                            })
                            case 'reference': return _ea.ss($, ($) => {
                                const loc = $['property'].location
                                const p_sibling = _ea.cc($['property'], ($) => _i_generic.get_entry(
                                    $p.parameters.lookups['sibling property resolvers'],
                                    {
                                        'reference': $,
                                        'location 2 string': $p['location 2 string']
                                    }
                                ))

                                const x_reference = p_sibling.entry.resolver[0] !== 'reference'
                                    ? _ea.deprecated_panic("not a 'reference' but a '", p_sibling.entry.resolver[0], "' @ ", $p['location 2 string'](loc))
                                    : p_sibling.entry.resolver[1]

                                const x_reference_selected = x_reference.type[0] !== 'selected'
                                    ? _ea.deprecated_panic("not a 'selected' but a '", x_reference.type[0], "' @ ", $p['location 2 string'](loc))
                                    : x_reference.type[1]

                                const p_constraint = _ea.cc($['constraint'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(x_reference_selected.constraints.dictionary, null),
                                    {
                                        'reference': $,
                                        'location 2 string': $p['location 2 string']
                                    }
                                ))
                                return ['reference', {
                                    'property': p_sibling,
                                    'constraint': p_constraint
                                }]
                            })
                            default: return _ea.au($[0])
                        }
                    })]
                })
                case 'list cursor': return _ea.ss($, ($) => ['list cursor', null])
                case 'linked entry': return _ea.ss($, ($) => ['linked entry', null])
                case 'option constraint': return _ea.ss($, ($): _i_out.Guaranteed_Value_Selection.start => {
                    const sc = $p.parameters.values['option constraints'].transform(
                        ($) => $,
                        () => _ea.deprecated_panic("not in an option @ ", $p['location 2 string'](start_location))
                    )
                    return ['option constraint', _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(sc, null),
                        {
                            'reference': $,
                            'location 2 string': $p['location 2 string'],
                        }
                    )]
                })
                case 'parameter': return _ea.ss($, ($) => ['parameter', _i_generic.get_entry(
                    _i_generic.dictionary_to_lookup($p.parameters.values.signature['resolved parameters'].values, null),
                    {
                        'reference': $,
                        'location 2 string': $p['location 2 string']
                    }
                )])
                case 'result': return _ea.ss($, ($) => ['result', _ea.cc($['state group'], ($): _i_out.Guaranteed_Value_Selection.start.SG.result => {
                    switch ($[0]) {
                        case 'list': return _ea.ss($, ($) => {
                            const loc = $['property'].location
                            const p_sibling: _i_out.Guaranteed_Value_Selection.start.SG.result.SG.list.property = _ea.cc($['property'], ($) => _i_generic.get_entry(
                                $p.parameters.lookups['sibling property resolvers'],
                                {
                                    'reference': $,
                                    'location 2 string': $p['location 2 string']
                                }
                            ))
                            const p_list_result_a = _ea.cc($['list result'], ($) => p_sibling.entry.resolver[0] !== 'list'
                                ? _ea.deprecated_panic("not a 'list' but a '", p_sibling.entry.resolver[0], "' @ ", $p['location 2 string'](loc))
                                : p_sibling.entry.resolver[1])
                            const p_list_result: _i_out.Guaranteed_Value_Selection.start.SG.result.SG.list.list_result = p_list_result_a.result.transform(
                                ($) => $,
                                () => _ea.deprecated_panic("there is no list result")
                            )
                            return ['list', {
                                'property': p_sibling,
                                'list result': p_list_result,
                            }]
                        })
                        case 'state group': return _ea.ss($, ($) => {
                            const loc = $['property'].location
                            const p_sibling: _i_out.Guaranteed_Value_Selection.start.SG.result.SG.state_group.property = _ea.cc($['property'], ($) => _i_generic.get_entry(
                                $p.parameters.lookups['sibling property resolvers'],
                                {
                                    'reference': $,
                                    'location 2 string': $p['location 2 string']
                                }
                            ))
                            const p_state_group = _ea.cc($['state group'], ($) => p_sibling.entry.resolver[0] !== 'state group'
                                ? _ea.deprecated_panic("not a 'state group' but a '", p_sibling.entry.resolver[0], "' @ ", $p['location 2 string'](loc))
                                : p_sibling.entry.resolver[1])
                            return ['state group', {
                                'property': p_sibling,
                                'state group': p_state_group,
                                'result': Type_Reference($.result, {
                                    'location 2 string': $p['location 2 string'],
                                    'parameters': {
                                        'lookups': {
                                            'types': _i_generic.dictionary_to_lookup($p.parameters.values.types.dictionary, null),
                                        },
                                        'values': {
                                            'imports': $p.parameters.values.imports,
                                        },
                                    }
                                })
                            }]
                        })
                        case 'optional value': return _ea.ss($, ($) => {
                            const loc = $['property'].location
                            const p_sibling: _i_out.Guaranteed_Value_Selection.start.SG.result.SG.optional_value.property = _ea.cc($['property'], ($) => _i_generic.get_entry(
                                $p.parameters.lookups['sibling property resolvers'],
                                {
                                    'reference': $,
                                    'location 2 string': $p['location 2 string']
                                }
                            ))
                            const p_optional_value = _ea.cc($['optional value'], ($) => p_sibling.entry.resolver[0] !== 'optional'
                                ? _ea.deprecated_panic("not a 'optional' but a '", p_sibling.entry.resolver[0], "' @ ", $p['location 2 string'](loc))
                                : p_sibling.entry.resolver[1])
                            return ['optional value', {
                                'property': p_sibling,
                                'optional value': p_optional_value,
                                'result': Type_Reference($.result, {
                                    'location 2 string': $p['location 2 string'],
                                    'parameters': {
                                        'lookups': {
                                            'types': _i_generic.dictionary_to_lookup($p.parameters.values.types.dictionary, null),
                                        },
                                        'values': {
                                            'imports': $p.parameters.values.imports,
                                        },
                                    }
                                })
                            }]
                        })
                        default: return _ea.au($[0])
                    }
                })])
                case 'sibling': return _ea.ss($, ($): _i_out.Guaranteed_Value_Selection.start => ['sibling', _i_generic.get_entry(
                    $p.parameters.lookups['sibling property resolvers'],
                    {
                        'reference': $,
                        'location 2 string': $p['location 2 string']
                    }
                )])
                case 'parent sibling': return _ea.ss($, ($): _i_out.Guaranteed_Value_Selection.start => ['parent sibling', _i_generic.get_entry(
                    $p.parameters.lookups['parent sibling property resolvers'],
                    {
                        'reference': $,
                        'location 2 string': $p['location 2 string']
                    }
                )])
                default: return _ea.au($[0])
            }
        })
        const p_tail = Relative_Value_Selection(
            $.tail,
            {
                'location 2 string': l2s,
                'parameters': {
                    'values': {
                        'node': _ea.block(() => {
                            const pvs = ($: _i_out.Possible_Value_Selection) => _ea.cc($, ($): _i_out.Type_Node => {
                                return _ea.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'parameter': return _ea.ss($, ($) => $.entry['data type']['resulting node'])
                                        case 'result': return _ea.ss($, ($) => _ea.cc($, ($) => {
                                            switch ($[0]) {
                                                case 'state group': return _ea.ss($, ($) => $.result['resulting node'])
                                                case 'optional value': return _ea.ss($, ($) => $.result['resulting node'])
                                                default: return _ea.au($[0])
                                            }
                                        }))
                                        default: return _ea.au($[0])
                                    }
                                })
                            })
                            const start_loc = $.start.location
                            const gvs_start = ($: _i_out.Guaranteed_Value_Selection.start) => _ea.cc($, ($): _i_out.Type_Node => {
                                switch ($[0]) {
                                    case 'constraint': return _ea.ss($, ($) => _ea.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'component': return _ea.ss($, ($) => _ea.cc($.constraint.entry.constraint.type, ($) => {
                                                switch ($[0]) {
                                                    case 'state': return _ea.ss($, ($) => $.state.entry.node)
                                                    case 'optional value': return _ea.ss($, ($) => $['selected optional value'])
                                                    default: return _ea.au($[0])
                                                }
                                            }))
                                            case 'reference': return _ea.ss($, ($) => _ea.cc($.constraint.entry.constraint.type, ($) => {
                                                switch ($[0]) {
                                                    case 'state': return _ea.ss($, ($) => $.state.entry.node)
                                                    case 'optional value': return _ea.ss($, ($) => $['selected optional value'])

                                                    default: return _ea.au($[0])
                                                }
                                            }))

                                            default: return _ea.au($[0])
                                        }
                                    }))
                                    case 'parameter': return _ea.ss($, ($) => $.entry['data type']['resulting node'])
                                    case 'result': return _ea.ss($, ($) => _ea.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'state group': return _ea.ss($, ($) => $.result['resulting node'])
                                            case 'optional value': return _ea.ss($, ($) => $.result['resulting node'])
                                            case 'list': return _ea.ss($, ($) => $['list result']['resulting node'])
                                            default: return _ea.au($[0])
                                        }
                                    }))
                                    case 'list cursor': return _ea.ss($, ($) => $p.parameters.values['list cursor'].transform(
                                        ($) => $['resulting node'],
                                        () => _ea.deprecated_panic("there is no cursor")
                                    ))
                                    case 'linked entry': return _ea.ss($, ($) => $p.parameters.values['linked entry'].transform(
                                        ($) => $['resulting dictionary'].node,
                                        () => _ea.deprecated_panic(`there is no linked entry @ ${$p['location 2 string'](start_loc)}`)
                                    ))
                                    case 'option constraint': return _ea.ss($, ($) => _ea.cc($.entry, ($) => {
                                        switch ($[0]) {
                                            case 'state': return _ea.ss($, ($) => $.state.entry.node)
                                            case 'assert is set': return _ea.ss($, ($) => pvs($))
                                            default: return _ea.au($[0])
                                        }
                                    }))
                                    case 'sibling': return _ea.ss($, ($) => $.entry.definition.node)
                                    case 'parent sibling': return _ea.ss($, ($) => $.entry.definition.node)
                                    default: return _ea.au($[0])
                                }
                            })
                            return gvs_start(p_start)
                        })
                    },
                    'lookups': null,
                }
            }
        )
        const p_resulting_type: _i_out.Type_Node = p_tail['resulting node']
        return ({
            'start': p_start,
            'tail': p_tail,
            'resulting node': p_resulting_type,
        })
    })
})

export const Type_Specification: _i_signatures.Type_Specification = ($, $p) => _ea.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return {
        'schema': Schema_Tree($.schema, {
            'location 2 string': l2s,
            'parameters': {
                'lookups': {
                    'sibling schemas': _ea.list_literal([]),
                },
                'values': params.values,
            }
        }),
        'schema path': $['schema path'].list.map(($) => $.element),
        'type': $.type,
    }
})