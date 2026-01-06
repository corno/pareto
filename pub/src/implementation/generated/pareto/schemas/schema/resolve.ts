import * as _ea from 'pareto-core-refiner'
import * as _edev from 'pareto-core-dev'

import * as _i_generic from 'pareto-core-refiner/dist/resolve'
import * as _i_out from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/schema/data_types/resolve"


export const r_Benchmark: _i_signatures._T_Benchmark = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_selection: _i_out._T_Benchmark.selection = _ea.deprecated_cc($['selection'], ($) => r_Guaranteed_Value_Selection(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': params['lookups'],
                    'values': params['values'],
                }),
            }
        ))
        const p_resulting_dictionary: _i_out._T_Benchmark.resulting_dictionary = _ea.deprecated_cc($['resulting dictionary'], ($) => _edev.implement_me("resulting dictionary"))
        const p_dense: _i_out._T_Benchmark.dense = _ea.deprecated_cc($['dense'], ($) => $)
        return ({
            'dense': p_dense,
            'resulting dictionary': p_resulting_dictionary,
            'selection': p_selection,
        })
    })
})
export const r_Constraint: _i_signatures._T_Constraint = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_selection: _i_out._T_Constraint.selection = _ea.deprecated_cc($['selection'], ($) => r_Relative_Value_Selection(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': params['lookups'],
                    'values': params['values'],
                }),
            }
        ))
        const p_type: _i_out._T_Constraint._type = _ea.deprecated_cc($['type'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Constraint._type => {
            switch ($[0]) {
                case 'optional value': return _ea.ss($, ($) => ['optional value', _ea.deprecated_block(() => {
                    const c_optional = _edev.implement_me("zz")
                    return _ea.deprecated_block(() => {
                        const p_selected_optional_value: _i_out._T_Constraint._type.SG.optional_value.selected_optional_value = _ea.deprecated_cc($['selected optional value'], ($) => c_optional)
                        return ({
                            'selected optional value': p_selected_optional_value,
                        })
                    })
                })])
                case 'state': return _ea.ss($, ($) => ['state', _ea.deprecated_block(() => {
                    const c_state_group = _edev.implement_me("zz")
                    return _ea.deprecated_block(() => {
                        const p_selected_state_group: _i_out._T_Constraint._type.SG.state.selected_state_group = _ea.deprecated_cc($['selected state group'], ($) => c_state_group)
                        const p_state: _i_out._T_Constraint._type.SG.state.state = _ea.deprecated_cc($['state'], ($) => _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(
                                p_selected_state_group,
                                null
                            ),
                            {
                                'location 2 string': l2s,
                                'reference': $,
                            }
                        ))
                        return ({
                            'selected state group': p_selected_state_group,
                            'state': p_state,
                        })
                    })
                })])
                default: return _ea.au($[0])
            }
        }))
        return ({
            'selection': p_selection,
            'type': p_type,
        })
    })
})
export const r_Dictionary: _i_signatures._T_Dictionary = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_node: _i_out._T_Dictionary.node = _ea.deprecated_cc($['node'], ($) => r_Type_Node(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': ({
                        'noncircular sibling types': params['lookups']['noncircular sibling types'],
                        'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                    }),
                    'values': ({
                        'globals': params['values']['globals'],
                        'imports': params['values']['imports'],
                        'type parameters': params['values']['type parameters'],
                    }),
                }),
            }
        ))
        const p_ordered: _i_out._T_Dictionary.ordered = _ea.deprecated_cc($['ordered'], ($) => $)
        return ({
            'node': p_node,
            'ordered': p_ordered,
        })
    })
})
export const r_Globals: _i_signatures._T_Globals = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_complexity: _i_out._T_Globals.complexity = _ea.deprecated_cc($['complexity'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Globals.complexity => {
            switch ($[0]) {
                case 'constrained': return _ea.ss($, ($) => ['constrained', _ea.deprecated_block(() => {
                    return null
                })])
                case 'unconstrained': return _ea.ss($, ($) => ['unconstrained', _ea.deprecated_block(() => {
                    return null
                })])
                default: return _ea.au($[0])
            }
        }))
        const p_text_types: _i_out._T_Globals.text_types = _ea.deprecated_cc($['text types'], ($) => _ea.deprecated_block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _ea.deprecated_block(() => {
                        return _ea.deprecated_cc($['value'], ($) => r_Text_Type(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': null,
                                    'values': null,
                                }),
                            }
                        ))
                    }),
                }
            )
        }))
        const p_number_types: _i_out._T_Globals.number_types = _ea.deprecated_cc($['number types'], ($) => _ea.deprecated_block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _ea.deprecated_block(() => {
                        return _ea.deprecated_cc($['value'], ($) => r_Number_Type(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': null,
                                    'values': null,
                                }),
                            }
                        ))
                    }),
                }
            )
        }))
        return ({
            'complexity': p_complexity,
            'number types': p_number_types,
            'text types': p_text_types,
        })
    })
})
export const r_Group: _i_signatures._T_Group = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _ea.deprecated_block(() => {
                    return _ea.deprecated_cc($['value'], ($) => _ea.deprecated_block(() => {
                        const p_description: _i_out._T_Group.D.description = _ea.deprecated_cc($['description'], ($) => $.map(($) => _ea.deprecated_block(() => {
                            return $
                        })))
                        const p_node: _i_out._T_Group.D.node = _ea.deprecated_cc($['node'], ($) => r_Type_Node(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': ({
                                        'noncircular sibling types': params['lookups']['noncircular sibling types'],
                                        'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                                    }),
                                    'values': ({
                                        'globals': params['values']['globals'],
                                        'imports': params['values']['imports'],
                                        'type parameters': params['values']['type parameters'],
                                    }),
                                }),
                            }
                        ))
                        return ({
                            'description': p_description,
                            'node': p_node,
                        })
                    }))
                }),
            }
        )
    })
})
export const r_Guaranteed_Value_Selection: _i_signatures._T_Guaranteed_Value_Selection = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_start: _i_out._T_Guaranteed_Value_Selection.start = _ea.deprecated_cc($['start'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Guaranteed_Value_Selection.start => {
            switch ($[0]) {
                case 'constraint': return _ea.ss($, ($) => ['constraint', _ea.deprecated_block(() => {
                    return _ea.deprecated_cc($['state group'], ($): _i_out._T_Guaranteed_Value_Selection.start.SG.constraint => {
                        switch ($[0]) {
                            case 'component': return _ea.ss($, ($) => ['component', _ea.deprecated_block(() => {
                                return _ea.deprecated_block(() => {
                                    const p_property: _i_out._T_Guaranteed_Value_Selection.start.SG.constraint.SG.component.property = _ea.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                        params['lookups']['sibling property resolvers'],
                                        {
                                            'location 2 string': l2s,
                                            'reference': $,
                                        }
                                    ))
                                    const p_constraint: _i_out._T_Guaranteed_Value_Selection.start.SG.constraint.SG.component.constraint = _ea.deprecated_cc($['constraint'], ($) => _i_generic.get_entry(
                                        _i_generic.dictionary_to_lookup(
                                            _edev.implement_me("zz"),
                                            null
                                        ),
                                        {
                                            'location 2 string': l2s,
                                            'reference': $,
                                        }
                                    ))
                                    return ({
                                        'constraint': p_constraint,
                                        'property': p_property,
                                    })
                                })
                            })])
                            case 'reference': return _ea.ss($, ($) => ['reference', _ea.deprecated_block(() => {
                                return _ea.deprecated_block(() => {
                                    const p_property: _i_out._T_Guaranteed_Value_Selection.start.SG.constraint.SG.reference.property = _ea.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                        params['lookups']['sibling property resolvers'],
                                        {
                                            'location 2 string': l2s,
                                            'reference': $,
                                        }
                                    ))
                                    const p_constraint: _i_out._T_Guaranteed_Value_Selection.start.SG.constraint.SG.reference.constraint = _ea.deprecated_cc($['constraint'], ($) => _i_generic.get_entry(
                                        _i_generic.dictionary_to_lookup(
                                            _edev.implement_me("zz"),
                                            null
                                        ),
                                        {
                                            'location 2 string': l2s,
                                            'reference': $,
                                        }
                                    ))
                                    return ({
                                        'constraint': p_constraint,
                                        'property': p_property,
                                    })
                                })
                            })])
                            default: return _ea.au($[0])
                        }
                    })
                })])
                case 'linked entry': return _ea.ss($, ($) => ['linked entry', _ea.deprecated_block(() => {
                    return null
                })])
                case 'list cursor': return _ea.ss($, ($) => ['list cursor', _ea.deprecated_block(() => {
                    return null
                })])
                case 'option constraint': return _ea.ss($, ($) => ['option constraint', _ea.deprecated_block(() => {
                    const c_oc = params['values']['option constraints'].transform(
                        ($) => $,
                        () => _ea.fixme_abort('ABORT SELECTION')
                    )
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            c_oc,
                            null
                        ),
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    )
                })])
                case 'parameter': return _ea.ss($, ($) => ['parameter', _ea.deprecated_block(() => {
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            params['values']['signature']['resolved parameters']['values'],
                            null
                        ),
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    )
                })])
                case 'parent sibling': return _ea.ss($, ($) => ['parent sibling', _ea.deprecated_block(() => {
                    return _i_generic.get_entry(
                        params['lookups']['parent sibling property resolvers'],
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    )
                })])
                case 'result': return _ea.ss($, ($) => ['result', _ea.deprecated_block(() => {
                    return _ea.deprecated_cc($['state group'], ($): _i_out._T_Guaranteed_Value_Selection.start.SG.result => {
                        switch ($[0]) {
                            case 'list': return _ea.ss($, ($) => ['list', _ea.deprecated_block(() => {
                                return _ea.deprecated_block(() => {
                                    const p_property: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.list.property = _ea.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                        params['lookups']['sibling property resolvers'],
                                        {
                                            'location 2 string': l2s,
                                            'reference': $,
                                        }
                                    ))
                                    const p_list_result: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.list.list_result = _ea.deprecated_cc($['list result'], ($) => _edev.implement_me("zz"))
                                    return ({
                                        'list result': p_list_result,
                                        'property': p_property,
                                    })
                                })
                            })])
                            case 'optional value': return _ea.ss($, ($) => ['optional value', _ea.deprecated_block(() => {
                                return _ea.deprecated_block(() => {
                                    const p_property: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.optional_value.property = _ea.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                        params['lookups']['sibling property resolvers'],
                                        {
                                            'location 2 string': l2s,
                                            'reference': $,
                                        }
                                    ))
                                    const p_optional_value: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.optional_value.optional_value = _ea.deprecated_cc($['optional value'], ($) => _edev.implement_me("zz"))
                                    const p_result: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.optional_value.result = _ea.deprecated_cc($['result'], ($) => r_Type_Reference(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': ({
                                                    'types': _i_generic.dictionary_to_lookup(
                                                        params['values']['types']['dictionary'],
                                                        null
                                                    ),
                                                }),
                                                'values': ({
                                                    'imports': params['values']['imports'],
                                                }),
                                            }),
                                        }
                                    ))
                                    return ({
                                        'optional value': p_optional_value,
                                        'property': p_property,
                                        'result': p_result,
                                    })
                                })
                            })])
                            case 'state group': return _ea.ss($, ($) => ['state group', _ea.deprecated_block(() => {
                                return _ea.deprecated_block(() => {
                                    const p_property: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.state_group.property = _ea.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                        params['lookups']['sibling property resolvers'],
                                        {
                                            'location 2 string': l2s,
                                            'reference': $,
                                        }
                                    ))
                                    const p_state_group: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.state_group.state_group = _ea.deprecated_cc($['state group'], ($) => _edev.implement_me("zz"))
                                    const p_result: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.state_group.result = _ea.deprecated_cc($['result'], ($) => r_Type_Reference(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': ({
                                                    'types': _i_generic.dictionary_to_lookup(
                                                        params['values']['types']['dictionary'],
                                                        null
                                                    ),
                                                }),
                                                'values': ({
                                                    'imports': params['values']['imports'],
                                                }),
                                            }),
                                        }
                                    ))
                                    return ({
                                        'property': p_property,
                                        'result': p_result,
                                        'state group': p_state_group,
                                    })
                                })
                            })])
                            default: return _ea.au($[0])
                        }
                    })
                })])
                case 'sibling': return _ea.ss($, ($) => ['sibling', _ea.deprecated_block(() => {
                    return _i_generic.get_entry(
                        params['lookups']['sibling property resolvers'],
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    )
                })])
                default: return _ea.au($[0])
            }
        }))
        const p_tail: _i_out._T_Guaranteed_Value_Selection.tail = _ea.deprecated_cc($['tail'], ($) => r_Relative_Value_Selection(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': ({
                        'node': _edev.implement_me("zz"),
                    }),
                }),
            }
        ))
        const p_resulting_node: _i_out._T_Guaranteed_Value_Selection.resulting_node = _ea.deprecated_cc($['resulting node'], ($) => p_tail['resulting node'])
        return ({
            'resulting node': p_resulting_node,
            'start': p_start,
            'tail': p_tail,
        })
    })
})
export const r_Imports: _i_signatures._T_Imports = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _ea.deprecated_block(() => {
                    return _ea.deprecated_cc($['value'], ($) => _ea.deprecated_block(() => {
                        const p_schema_set_child: _i_out._T_Imports.D.schema_set_child = _ea.deprecated_cc($['schema set child'], ($) => _i_generic.get_entry_from_stack(
                            params['lookups']['sibling schemas'],
                            {
                                'location 2 string': l2s,
                                'reference': $,
                            }
                        ))
                        const p_schema: _i_out._T_Imports.D.schema = _ea.deprecated_cc($['schema'], ($) => _edev.implement_me("zz"))
                        return ({
                            'schema': p_schema,
                            'schema set child': p_schema_set_child,
                        })
                    }))
                }),
            }
        )
    })
})
export const r_Lookup_Selection: _i_signatures._T_Lookup_Selection = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_type: _i_out._T_Lookup_Selection._type = _ea.deprecated_cc($['type'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Lookup_Selection._type => {
            switch ($[0]) {
                case 'dictionary': return _ea.ss($, ($) => ['dictionary', _ea.deprecated_block(() => {
                    return _ea.deprecated_block(() => {
                        const p_selection: _i_out._T_Lookup_Selection._type.SG.dictionary.selection = _ea.deprecated_cc($['selection'], ($) => r_Guaranteed_Value_Selection(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': params['lookups'],
                                    'values': params['values'],
                                }),
                            }
                        ))
                        const p_selected_dictionary: _i_out._T_Lookup_Selection._type.SG.dictionary.selected_dictionary = _ea.deprecated_cc($['selected dictionary'], ($) => _edev.implement_me("zz"))
                        return ({
                            'selected dictionary': p_selected_dictionary,
                            'selection': p_selection,
                        })
                    })
                })])
                case 'not circular dependent siblings': return _ea.ss($, ($) => ['not circular dependent siblings', _ea.deprecated_block(() => {
                    const c_cd = params['values']['current ordered dictionary'].transform(
                        ($) => $,
                        () => _ea.fixme_abort('ABORT SELECTION')
                    )
                    return c_cd
                })])
                case 'parameter': return _ea.ss($, ($) => ['parameter', _ea.deprecated_block(() => {
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            params['values']['signature']['resolved parameters']['lookups'],
                            null
                        ),
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    )
                })])
                case 'possibly circular dependent siblings': return _ea.ss($, ($) => ['possibly circular dependent siblings', _ea.deprecated_block(() => {
                    const c_cd = params['values']['current dictionary'].transform(
                        ($) => $,
                        () => _ea.fixme_abort('ABORT SELECTION')
                    )
                    return c_cd
                })])
                default: return _ea.au($[0])
            }
        }))
        const p_resulting_dictionary: _i_out._T_Lookup_Selection.resulting_dictionary = _ea.deprecated_cc($['resulting dictionary'], ($) => _edev.implement_me("zz"))
        return ({
            'resulting dictionary': p_resulting_dictionary,
            'type': p_type,
        })
    })
})
export const r_Node_Resolver: _i_signatures._T_Node_Resolver = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_cc($['state group'], ($): _i_out._T_Node_Resolver => {
        switch ($[0]) {
            case 'boolean': return _ea.ss($, ($) => ['boolean', _ea.deprecated_block(() => {
                const c_definition = _edev.implement_me("zz")
                return null
            })])
            case 'component': return _ea.ss($, ($) => ['component', _ea.deprecated_block(() => {
                const c_definition = _edev.implement_me("zz")
                return _ea.deprecated_block(() => {
                    const p_location: _i_out._T_Node_Resolver.SG.component.location = _ea.deprecated_cc($['location'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Node_Resolver.SG.component.location => {
                        switch ($[0]) {
                            case 'external': return _ea.ss($, ($) => ['external', _ea.deprecated_block(() => {
                                const c_import = params['values']['imports'].transform(
                                    ($) => $,
                                    () => _ea.fixme_abort('ABORT SELECTION')
                                )
                                return _ea.deprecated_block(() => {
                                    const p_import: _i_out._T_Node_Resolver.SG.component.location.SG.external._import = _ea.deprecated_cc($['import'], ($) => _i_generic.get_entry(
                                        _i_generic.dictionary_to_lookup(
                                            c_import,
                                            null
                                        ),
                                        {
                                            'location 2 string': l2s,
                                            'reference': $,
                                        }
                                    ))
                                    const p_type: _i_out._T_Node_Resolver.SG.component.location.SG.external._type = _ea.deprecated_cc($['type'], ($) => _i_generic.get_entry(
                                        _i_generic.dictionary_to_lookup(
                                            _edev.implement_me("zz"),
                                            null
                                        ),
                                        {
                                            'location 2 string': l2s,
                                            'reference': $,
                                        }
                                    ))
                                    return ({
                                        'import': p_import,
                                        'type': p_type,
                                    })
                                })
                            })])
                            case 'internal': return _ea.ss($, ($) => ['internal', _ea.deprecated_block(() => {
                                return _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        params['values']['signatures']['dictionary'],
                                        null
                                    ),
                                    {
                                        'location 2 string': l2s,
                                        'reference': $,
                                    }
                                )
                            })])
                            default: return _ea.au($[0])
                        }
                    }))
                    const p_signature: _i_out._T_Node_Resolver.SG.component.signature = _ea.deprecated_cc($['signature'], ($) => _edev.implement_me("zz"))
                    const p_arguments: _i_out._T_Node_Resolver.SG.component._arguments = _ea.deprecated_cc($['arguments'], ($) => $.map(($) => _ea.deprecated_block(() => {
                        return _ea.deprecated_block(() => {
                            const p_values: _i_out._T_Node_Resolver.SG.component._arguments.O.values = _ea.deprecated_cc($['values'], ($) => $.map(($) => _ea.deprecated_block(() => {
                                return _ea.deprecated_block(() => {
                                    const benchmark = p_signature['resolved parameters']['values']
                                    return _i_generic.resolve_dictionary(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'map': ($, $p) => _ea.deprecated_block(() => {
                                                const linked_entry = _edev.implement_me("zz")
                                                return _ea.deprecated_cc($['value'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Node_Resolver.SG.component._arguments.O.values.O.D => {
                                                    switch ($[0]) {
                                                        case 'optional': return _ea.ss($, ($) => ['optional', _ea.deprecated_block(() => {
                                                            return r_Optional_Value_Initialization(
                                                                $,
                                                                {
                                                                    'location 2 string': l2s,
                                                                    'parameters': ({
                                                                        'lookups': params['lookups'],
                                                                        'values': params['values'],
                                                                    }),
                                                                }
                                                            )
                                                        })])
                                                        case 'parameter': return _ea.ss($, ($) => ['parameter', _ea.deprecated_block(() => {
                                                            return _i_generic.get_entry(
                                                                _i_generic.dictionary_to_lookup(
                                                                    params['values']['signature']['resolved parameters']['values'],
                                                                    null
                                                                ),
                                                                {
                                                                    'location 2 string': l2s,
                                                                    'reference': $,
                                                                }
                                                            )
                                                        })])
                                                        case 'required': return _ea.ss($, ($) => ['required', _ea.deprecated_block(() => {
                                                            return r_Guaranteed_Value_Selection(
                                                                $,
                                                                {
                                                                    'location 2 string': l2s,
                                                                    'parameters': ({
                                                                        'lookups': params['lookups'],
                                                                        'values': params['values'],
                                                                    }),
                                                                }
                                                            )
                                                        })])
                                                        default: return _ea.au($[0])
                                                    }
                                                }))
                                            }),
                                        }
                                    )
                                })
                            })))
                            const p_lookups: _i_out._T_Node_Resolver.SG.component._arguments.O.lookups = _ea.deprecated_cc($['lookups'], ($) => $.map(($) => _ea.deprecated_block(() => {
                                return _ea.deprecated_block(() => {
                                    const benchmark = p_signature['resolved parameters']['lookups']
                                    return _i_generic.resolve_dictionary(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'map': ($, $p) => _ea.deprecated_block(() => {
                                                const linked_entry = _edev.implement_me("zz")
                                                return _ea.deprecated_cc($['value'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D => {
                                                    switch ($[0]) {
                                                        case 'empty stack': return _ea.ss($, ($) => ['empty stack', _ea.deprecated_block(() => {
                                                            return null
                                                        })])
                                                        case 'not set': return _ea.ss($, ($) => ['not set', _ea.deprecated_block(() => {
                                                            return null
                                                        })])
                                                        case 'selection': return _ea.ss($, ($) => ['selection', _ea.deprecated_block(() => {
                                                            return r_Lookup_Selection(
                                                                $,
                                                                {
                                                                    'location 2 string': l2s,
                                                                    'parameters': ({
                                                                        'lookups': params['lookups'],
                                                                        'values': params['values'],
                                                                    }),
                                                                }
                                                            )
                                                        })])
                                                        case 'stack': return _ea.ss($, ($) => ['stack', _ea.deprecated_block(() => {
                                                            return _ea.deprecated_block(() => {
                                                                const p_stack: _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D.SG.stack.stack = _ea.deprecated_cc($['stack'], ($) => r_Lookup_Selection(
                                                                    $,
                                                                    {
                                                                        'location 2 string': l2s,
                                                                        'parameters': ({
                                                                            'lookups': params['lookups'],
                                                                            'values': params['values'],
                                                                        }),
                                                                    }
                                                                ))
                                                                const p_element: _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D.SG.stack.element = _ea.deprecated_cc($['element'], ($) => r_Lookup_Selection(
                                                                    $,
                                                                    {
                                                                        'location 2 string': l2s,
                                                                        'parameters': ({
                                                                            'lookups': params['lookups'],
                                                                            'values': params['values'],
                                                                        }),
                                                                    }
                                                                ))
                                                                return ({
                                                                    'element': p_element,
                                                                    'stack': p_stack,
                                                                })
                                                            })
                                                        })])
                                                        default: return _ea.au($[0])
                                                    }
                                                }))
                                            }),
                                        }
                                    )
                                })
                            })))
                            return ({
                                'lookups': p_lookups,
                                'values': p_values,
                            })
                        })
                    })))
                    const p_constraints: _i_out._T_Node_Resolver.SG.component.constraints = _ea.deprecated_cc($['constraints'], ($) => r_Property_Constraints(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': ({
                                    'node': p_signature['type']['node'],
                                }),
                            }),
                        }
                    ))
                    return ({
                        'arguments': p_arguments,
                        'constraints': p_constraints,
                        'location': p_location,
                        'signature': p_signature,
                    })
                })
            })])
            case 'dictionary': return _ea.ss($, ($) => ['dictionary', _ea.deprecated_block(() => {
                const c_definition = _edev.implement_me("zz")
                return _ea.deprecated_block(() => {
                    const p_definition: _i_out._T_Node_Resolver.SG.dictionary.definition = _ea.deprecated_cc($['definition'], ($) => c_definition)
                    const p_benchmark: _i_out._T_Node_Resolver.SG.dictionary.benchmark = _ea.deprecated_cc($['benchmark'], ($) => $.map(($) => _ea.deprecated_block(() => {
                        return r_Benchmark(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': params['lookups'],
                                    'values': params['values'],
                                }),
                            }
                        )
                    })))
                    const p_resolver: _i_out._T_Node_Resolver.SG.dictionary.resolver = _ea.deprecated_cc($['resolver'], ($) => r_Node_Resolver(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': params['lookups'],
                                'values': ({
                                    'current dictionary': _ea.optional.set(p_definition),
                                    'current ordered dictionary': _ea.optional.set(p_definition),
                                    'definition': p_definition['node'],
                                    'imports': params['values']['imports'],
                                    'linked entry': _edev.implement_me("zz"),
                                    'list cursor': params['values']['list cursor'],
                                    'option constraints': params['values']['option constraints'],
                                    'signature': params['values']['signature'],
                                    'signatures': params['values']['signatures'],
                                    'types': params['values']['types'],
                                }),
                            }),
                        }
                    ))
                    return ({
                        'benchmark': p_benchmark,
                        'definition': p_definition,
                        'resolver': p_resolver,
                    })
                })
            })])
            case 'group': return _ea.ss($, ($) => ['group', _ea.deprecated_block(() => {
                const c_definition = _edev.implement_me("zz")
                return r_Node_Resolver_Group(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': ({
                                'parent sibling property resolvers': params['lookups']['sibling property resolvers'],
                                'sibling property resolvers': params['lookups']['sibling property resolvers'],
                            }),
                            'values': ({
                                'current dictionary': params['values']['current dictionary'],
                                'current ordered dictionary': params['values']['current ordered dictionary'],
                                'definition': c_definition,
                                'imports': params['values']['imports'],
                                'linked entry': params['values']['linked entry'],
                                'list cursor': params['values']['list cursor'],
                                'option constraints': params['values']['option constraints'],
                                'signature': params['values']['signature'],
                                'signatures': params['values']['signatures'],
                                'types': params['values']['types'],
                            }),
                        }),
                    }
                )
            })])
            case 'list': return _ea.ss($, ($) => ['list', _ea.deprecated_block(() => {
                const c_definition = _edev.implement_me("zz")
                return _ea.deprecated_block(() => {
                    const p_definition: _i_out._T_Node_Resolver.SG.list.definition = _ea.deprecated_cc($['definition'], ($) => c_definition)
                    const p_result: _i_out._T_Node_Resolver.SG.list.result = _ea.deprecated_cc($['result'], ($) => $.map(($) => _ea.deprecated_block(() => {
                        return r_Node_Resolver_List_Result(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': ({
                                        'types': _i_generic.dictionary_to_lookup(
                                            params['values']['types']['dictionary'],
                                            null
                                        ),
                                    }),
                                    'values': ({
                                        'imports': params['values']['imports'],
                                    }),
                                }),
                            }
                        )
                    })))
                    const p_resolver: _i_out._T_Node_Resolver.SG.list.resolver = _ea.deprecated_cc($['resolver'], ($) => r_Node_Resolver(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': params['lookups'],
                                'values': ({
                                    'current dictionary': params['values']['current dictionary'],
                                    'current ordered dictionary': params['values']['current ordered dictionary'],
                                    'definition': c_definition['node'],
                                    'imports': params['values']['imports'],
                                    'linked entry': params['values']['linked entry'],
                                    'list cursor': _ea.optional.set(_edev.implement_me("zz")),
                                    'option constraints': params['values']['option constraints'],
                                    'signature': params['values']['signature'],
                                    'signatures': params['values']['signatures'],
                                    'types': params['values']['types'],
                                }),
                            }),
                        }
                    ))
                    return ({
                        'definition': p_definition,
                        'resolver': p_resolver,
                        'result': p_result,
                    })
                })
            })])
            case 'nothing': return _ea.ss($, ($) => ['nothing', _ea.deprecated_block(() => {
                const c_definition = _edev.implement_me("zz")
                return null
            })])
            case 'number': return _ea.ss($, ($) => ['number', _ea.deprecated_block(() => {
                const c_definition = _edev.implement_me("zz")
                return null
            })])
            case 'optional': return _ea.ss($, ($) => ['optional', _ea.deprecated_block(() => {
                const c_definition = _edev.implement_me("zz")
                return _ea.deprecated_block(() => {
                    const p_constraints: _i_out._T_Node_Resolver.SG.optional.constraints = _ea.deprecated_cc($['constraints'], ($) => r_Option_Constraints(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': params['lookups'],
                                'values': params['values'],
                            }),
                        }
                    ))
                    const p_resolver: _i_out._T_Node_Resolver.SG.optional.resolver = _ea.deprecated_cc($['resolver'], ($) => r_Node_Resolver(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': params['lookups'],
                                'values': ({
                                    'current dictionary': params['values']['current dictionary'],
                                    'current ordered dictionary': params['values']['current ordered dictionary'],
                                    'definition': c_definition,
                                    'imports': params['values']['imports'],
                                    'linked entry': params['values']['linked entry'],
                                    'list cursor': params['values']['list cursor'],
                                    'option constraints': params['values']['option constraints'],
                                    'signature': params['values']['signature'],
                                    'signatures': params['values']['signatures'],
                                    'types': params['values']['types'],
                                }),
                            }),
                        }
                    ))
                    return ({
                        'constraints': p_constraints,
                        'resolver': p_resolver,
                    })
                })
            })])
            case 'reference': return _ea.ss($, ($) => ['reference', _ea.deprecated_block(() => {
                const c_definition = _edev.implement_me("zz")
                return _ea.deprecated_block(() => {
                    const p_definition: _i_out._T_Node_Resolver.SG.reference.definition = _ea.deprecated_cc($['definition'], ($) => c_definition)
                    const p_type: _i_out._T_Node_Resolver.SG.reference._type = _ea.deprecated_cc($['type'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Node_Resolver.SG.reference._type => {
                        switch ($[0]) {
                            case 'derived': return _ea.ss($, ($) => ['derived', _ea.deprecated_block(() => {
                                const c_definition = _edev.implement_me("zz")
                                return _ea.deprecated_block(() => {
                                    const p_value: _i_out._T_Node_Resolver.SG.reference._type.SG.derived.value = _ea.deprecated_cc($['value'], ($) => r_Guaranteed_Value_Selection(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': params['lookups'],
                                                'values': params['values'],
                                            }),
                                        }
                                    ))
                                    return ({
                                        'value': p_value,
                                    })
                                })
                            })])
                            case 'selected': return _ea.ss($, ($) => ['selected', _ea.deprecated_block(() => {
                                const c_definition = _edev.implement_me("zz")
                                return _ea.deprecated_block(() => {
                                    const p_definition: _i_out._T_Node_Resolver.SG.reference._type.SG.selected.definition = _ea.deprecated_cc($['definition'], ($) => c_definition)
                                    const p_lookup: _i_out._T_Node_Resolver.SG.reference._type.SG.selected.lookup = _ea.deprecated_cc($['lookup'], ($) => r_Lookup_Selection(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': params['lookups'],
                                                'values': params['values'],
                                            }),
                                        }
                                    ))
                                    const p_constraints: _i_out._T_Node_Resolver.SG.reference._type.SG.selected.constraints = _ea.deprecated_cc($['constraints'], ($) => r_Property_Constraints(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': null,
                                                'values': ({
                                                    'node': p_lookup['resulting dictionary']['node'],
                                                }),
                                            }),
                                        }
                                    ))
                                    return ({
                                        'constraints': p_constraints,
                                        'definition': p_definition,
                                        'lookup': p_lookup,
                                    })
                                })
                            })])
                            default: return _ea.au($[0])
                        }
                    }))
                    return ({
                        'definition': p_definition,
                        'type': p_type,
                    })
                })
            })])
            case 'state group': return _ea.ss($, ($) => ['state group', _ea.deprecated_block(() => {
                const c_definition = _edev.implement_me("zz")
                return _ea.deprecated_block(() => {
                    const p_definition: _i_out._T_Node_Resolver.SG.state_group.definition = _ea.deprecated_cc($['definition'], ($) => c_definition)
                    const p_states: _i_out._T_Node_Resolver.SG.state_group.states = _ea.deprecated_cc($['states'], ($) => _ea.deprecated_block(() => {
                        const benchmark = c_definition
                        return _i_generic.resolve_dictionary(
                            $,
                            {
                                'location 2 string': l2s,
                                'map': ($, $p) => _ea.deprecated_block(() => {
                                    const linked_entry = _edev.implement_me("zz")
                                    return _ea.deprecated_cc($['value'], ($) => _ea.deprecated_block(() => {
                                        const p_constraints: _i_out._T_Node_Resolver.SG.state_group.states.D.constraints = _ea.deprecated_cc($['constraints'], ($) => r_Option_Constraints(
                                            $,
                                            {
                                                'location 2 string': l2s,
                                                'parameters': ({
                                                    'lookups': params['lookups'],
                                                    'values': params['values'],
                                                }),
                                            }
                                        ))
                                        const p_resolver: _i_out._T_Node_Resolver.SG.state_group.states.D.resolver = _ea.deprecated_cc($['resolver'], ($) => r_Node_Resolver(
                                            $,
                                            {
                                                'location 2 string': l2s,
                                                'parameters': ({
                                                    'lookups': params['lookups'],
                                                    'values': ({
                                                        'current dictionary': params['values']['current dictionary'],
                                                        'current ordered dictionary': params['values']['current ordered dictionary'],
                                                        'definition': linked_entry['node'],
                                                        'imports': params['values']['imports'],
                                                        'linked entry': params['values']['linked entry'],
                                                        'list cursor': params['values']['list cursor'],
                                                        'option constraints': params['values']['option constraints'],
                                                        'signature': params['values']['signature'],
                                                        'signatures': params['values']['signatures'],
                                                        'types': params['values']['types'],
                                                    }),
                                                }),
                                            }
                                        ))
                                        return ({
                                            'constraints': p_constraints,
                                            'resolver': p_resolver,
                                        })
                                    }))
                                }),
                            }
                        )
                    }))
                    return ({
                        'definition': p_definition,
                        'states': p_states,
                    })
                })
            })])
            case 'text': return _ea.ss($, ($) => ['text', _ea.deprecated_block(() => {
                const c_definition = _edev.implement_me("zz")
                return null
            })])
            default: return _ea.au($[0])
        }
    })
})
export const r_Node_Resolver_Group: _i_signatures._T_Node_Resolver_Group = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const benchmark = params['values']['definition']
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _ea.deprecated_block(() => {
                    const linked_entry = _edev.implement_me("zz")
                    return _ea.deprecated_cc($['value'], ($) => _ea.deprecated_block(() => {
                        const p_definition: _i_out._T_Node_Resolver_Group.D.definition = _ea.deprecated_cc($['definition'], ($) => linked_entry)
                        const p_resolver: _i_out._T_Node_Resolver_Group.D.resolver = _ea.deprecated_cc($['resolver'], ($) => r_Node_Resolver(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': ({
                                        'parent sibling property resolvers': params['lookups']['sibling property resolvers'],
                                        'sibling property resolvers': $p['not circular dependent siblings'],
                                    }),
                                    'values': ({
                                        'current dictionary': params['values']['current dictionary'],
                                        'current ordered dictionary': params['values']['current ordered dictionary'],
                                        'definition': linked_entry['node'],
                                        'imports': params['values']['imports'],
                                        'linked entry': params['values']['linked entry'],
                                        'list cursor': params['values']['list cursor'],
                                        'option constraints': params['values']['option constraints'],
                                        'signature': params['values']['signature'],
                                        'signatures': params['values']['signatures'],
                                        'types': params['values']['types'],
                                    }),
                                }),
                            }
                        ))
                        return ({
                            'definition': p_definition,
                            'resolver': p_resolver,
                        })
                    }))
                }),
            }
        )
    })
})
export const r_Node_Resolver_List_Result: _i_signatures._T_Node_Resolver_List_Result = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return r_Type_Reference(
        $,
        {
            'location 2 string': l2s,
            'parameters': ({
                'lookups': ({
                    'types': params['lookups']['types'],
                }),
                'values': ({
                    'imports': params['values']['imports'],
                }),
            }),
        }
    )
})
export const r_Number_Type: _i_signatures._T_Number_Type = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_precision: _i_out._T_Number_Type.precision = _ea.deprecated_cc($['precision'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Number_Type.precision => {
            switch ($[0]) {
                case 'approximation': return _ea.ss($, ($) => ['approximation', _ea.deprecated_block(() => {
                    return _ea.deprecated_block(() => {
                        const p_significant_digits: _i_out._T_Number_Type.precision.SG.approximation.significant_digits = _ea.deprecated_cc($['significant digits'], ($) => $)
                        return ({
                            'significant digits': p_significant_digits,
                        })
                    })
                })])
                case 'exact': return _ea.ss($, ($) => ['exact', _ea.deprecated_block(() => {
                    return _ea.deprecated_block(() => {
                        const p_decimal_separator_offset: _i_out._T_Number_Type.precision.SG.exact.decimal_separator_offset = _ea.deprecated_cc($['decimal separator offset'], ($) => $.map(($) => _ea.deprecated_block(() => {
                            return $
                        })))
                        const p_type: _i_out._T_Number_Type.precision.SG.exact._type = _ea.deprecated_cc($['type'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Number_Type.precision.SG.exact._type => {
                            switch ($[0]) {
                                case 'integer': return _ea.ss($, ($) => ['integer', _ea.deprecated_block(() => {
                                    return null
                                })])
                                case 'natural': return _ea.ss($, ($) => ['natural', _ea.deprecated_block(() => {
                                    return null
                                })])
                                case 'positive natural': return _ea.ss($, ($) => ['positive natural', _ea.deprecated_block(() => {
                                    return null
                                })])
                                default: return _ea.au($[0])
                            }
                        }))
                        return ({
                            'decimal separator offset': p_decimal_separator_offset,
                            'type': p_type,
                        })
                    })
                })])
                default: return _ea.au($[0])
            }
        }))
        return ({
            'precision': p_precision,
        })
    })
})
export const r_Option_Constraints: _i_signatures._T_Option_Constraints = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _ea.deprecated_block(() => {
                    return _ea.deprecated_cc($['value'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Option_Constraints.D => {
                        switch ($[0]) {
                            case 'assert is set': return _ea.ss($, ($) => ['assert is set', _ea.deprecated_block(() => {
                                return r_Possible_Value_Selection(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'lookups': params['lookups'],
                                            'values': params['values'],
                                        }),
                                    }
                                )
                            })])
                            case 'state': return _ea.ss($, ($) => ['state', _ea.deprecated_block(() => {
                                return _ea.deprecated_block(() => {
                                    const p_selection: _i_out._T_Option_Constraints.D.SG.state.selection = _ea.deprecated_cc($['selection'], ($) => r_Guaranteed_Value_Selection(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': params['lookups'],
                                                'values': params['values'],
                                            }),
                                        }
                                    ))
                                    const p_selected_state_group: _i_out._T_Option_Constraints.D.SG.state.selected_state_group = _ea.deprecated_cc($['selected state group'], ($) => _edev.implement_me("zz"))
                                    const p_state: _i_out._T_Option_Constraints.D.SG.state.state = _ea.deprecated_cc($['state'], ($) => _i_generic.get_entry(
                                        _i_generic.dictionary_to_lookup(
                                            p_selected_state_group,
                                            null
                                        ),
                                        {
                                            'location 2 string': l2s,
                                            'reference': $,
                                        }
                                    ))
                                    return ({
                                        'selected state group': p_selected_state_group,
                                        'selection': p_selection,
                                        'state': p_state,
                                    })
                                })
                            })])
                            default: return _ea.au($[0])
                        }
                    }))
                }),
            }
        )
    })
})
export const r_Optional_Value_Initialization: _i_signatures._T_Optional_Value_Initialization = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_cc($['state group'], ($): _i_out._T_Optional_Value_Initialization => {
        switch ($[0]) {
            case 'not set': return _ea.ss($, ($) => ['not set', _ea.deprecated_block(() => {
                return null
            })])
            case 'selection': return _ea.ss($, ($) => ['selection', _ea.deprecated_block(() => {
                return r_Possible_Value_Selection(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': params['lookups'],
                            'values': params['values'],
                        }),
                    }
                )
            })])
            case 'set': return _ea.ss($, ($) => ['set', _ea.deprecated_block(() => {
                return r_Guaranteed_Value_Selection(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': params['lookups'],
                            'values': params['values'],
                        }),
                    }
                )
            })])
            default: return _ea.au($[0])
        }
    })
})
export const r_Possible_Value_Selection: _i_signatures._T_Possible_Value_Selection = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_cc($['state group'], ($): _i_out._T_Possible_Value_Selection => {
        switch ($[0]) {
            case 'parameter': return _ea.ss($, ($) => ['parameter', _ea.deprecated_block(() => {
                return _i_generic.get_entry(
                    _i_generic.dictionary_to_lookup(
                        params['values']['signature']['resolved parameters']['values'],
                        null
                    ),
                    {
                        'location 2 string': l2s,
                        'reference': $,
                    }
                )
            })])
            case 'result': return _ea.ss($, ($) => ['result', _ea.deprecated_block(() => {
                return _ea.deprecated_cc($['state group'], ($): _i_out._T_Possible_Value_Selection.SG.result => {
                    switch ($[0]) {
                        case 'optional value': return _ea.ss($, ($) => ['optional value', _ea.deprecated_block(() => {
                            return _ea.deprecated_block(() => {
                                const p_property: _i_out._T_Possible_Value_Selection.SG.result.SG.optional_value.property = _ea.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                    params['lookups']['sibling property resolvers'],
                                    {
                                        'location 2 string': l2s,
                                        'reference': $,
                                    }
                                ))
                                const p_optional_value: _i_out._T_Possible_Value_Selection.SG.result.SG.optional_value.optional_value = _ea.deprecated_cc($['optional value'], ($) => _edev.implement_me("zz"))
                                const p_result: _i_out._T_Possible_Value_Selection.SG.result.SG.optional_value.result = _ea.deprecated_cc($['result'], ($) => r_Type_Reference(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'lookups': ({
                                                'types': _i_generic.dictionary_to_lookup(
                                                    params['values']['types']['dictionary'],
                                                    null
                                                ),
                                            }),
                                            'values': ({
                                                'imports': params['values']['imports'],
                                            }),
                                        }),
                                    }
                                ))
                                return ({
                                    'optional value': p_optional_value,
                                    'property': p_property,
                                    'result': p_result,
                                })
                            })
                        })])
                        case 'state group': return _ea.ss($, ($) => ['state group', _ea.deprecated_block(() => {
                            return _ea.deprecated_block(() => {
                                const p_property: _i_out._T_Possible_Value_Selection.SG.result.SG.state_group.property = _ea.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                    params['lookups']['sibling property resolvers'],
                                    {
                                        'location 2 string': l2s,
                                        'reference': $,
                                    }
                                ))
                                const p_state_group: _i_out._T_Possible_Value_Selection.SG.result.SG.state_group.state_group = _ea.deprecated_cc($['state group'], ($) => _edev.implement_me("zz"))
                                const p_result: _i_out._T_Possible_Value_Selection.SG.result.SG.state_group.result = _ea.deprecated_cc($['result'], ($) => r_Type_Reference(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'lookups': ({
                                                'types': _i_generic.dictionary_to_lookup(
                                                    params['values']['types']['dictionary'],
                                                    null
                                                ),
                                            }),
                                            'values': ({
                                                'imports': params['values']['imports'],
                                            }),
                                        }),
                                    }
                                ))
                                return ({
                                    'property': p_property,
                                    'result': p_result,
                                    'state group': p_state_group,
                                })
                            })
                        })])
                        default: return _ea.au($[0])
                    }
                })
            })])
            default: return _ea.au($[0])
        }
    })
})
export const r_Presence: _i_signatures._T_Presence = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_cc($['state group'], ($): _i_out._T_Presence => {
        switch ($[0]) {
            case 'optional': return _ea.ss($, ($) => ['optional', _ea.deprecated_block(() => {
                return null
            })])
            case 'required': return _ea.ss($, ($) => ['required', _ea.deprecated_block(() => {
                return null
            })])
            default: return _ea.au($[0])
        }
    })
})
export const r_Property_Constraint: _i_signatures._T_Property_Constraint = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_start: _i_out._T_Property_Constraint.start = _ea.deprecated_cc($['start'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Property_Constraint.start => {
            switch ($[0]) {
                case 'property': return _ea.ss($, ($) => ['property', _ea.deprecated_block(() => {
                    return null
                })])
                case 'sibling': return _ea.ss($, ($) => ['sibling', _ea.deprecated_block(() => {
                    return r_Reference_To_Property_Constraint(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': ({
                                    'property constraints': params['lookups']['property constraints'],
                                }),
                                'values': null,
                            }),
                        }
                    )
                })])
                default: return _ea.au($[0])
            }
        }))
        const p_constraint: _i_out._T_Property_Constraint.constraint = _ea.deprecated_cc($['constraint'], ($) => r_Constraint(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': ({
                        'node': _edev.implement_me("zz"),
                    }),
                }),
            }
        ))
        return ({
            'constraint': p_constraint,
            'start': p_start,
        })
    })
})
export const r_Property_Constraints: _i_signatures._T_Property_Constraints = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _ea.deprecated_block(() => {
                    return _ea.deprecated_cc($['value'], ($) => r_Property_Constraint(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': ({
                                    'property constraints': $p['not circular dependent siblings'],
                                }),
                                'values': null,
                            }),
                        }
                    ))
                }),
            }
        )
    })
})
export const r_Reference_To_Property_Constraint: _i_signatures._T_Reference_To_Property_Constraint = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _i_generic.get_entry(
        params['lookups']['property constraints'],
        {
            'location 2 string': l2s,
            'reference': $,
        }
    )
})
export const r_Relative_Value_Selection: _i_signatures._T_Relative_Value_Selection = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_path: _i_out._T_Relative_Value_Selection.path = _ea.deprecated_cc($['path'], ($) => $['list'].map(($) => _ea.deprecated_cc($['element'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Relative_Value_Selection.path.L => {
            switch ($[0]) {
                case 'component': return _ea.ss($, ($) => ['component', _ea.deprecated_block(() => {
                    const c_definition = _edev.implement_me("zz")
                    return null
                })])
                case 'group': return _ea.ss($, ($) => ['group', _ea.deprecated_block(() => {
                    const c_definition = _edev.implement_me("zz")
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            c_definition['dictionary'],
                            null
                        ),
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    )
                })])
                case 'reference': return _ea.ss($, ($) => ['reference', _ea.deprecated_block(() => {
                    const c_definition = _edev.implement_me("zz")
                    return _ea.deprecated_block(() => {
                        const p_definition: _i_out._T_Relative_Value_Selection.path.L.SG.reference.definition = _ea.deprecated_cc($['definition'], ($) => c_definition)
                        return ({
                            'definition': p_definition,
                        })
                    })
                })])
                default: return _ea.au($[0])
            }
        }))))
        const p_resulting_node: _i_out._T_Relative_Value_Selection.resulting_node = _ea.deprecated_cc($['resulting node'], ($) => _edev.implement_me("zz"))
        return ({
            'path': p_path,
            'resulting node': p_resulting_node,
        })
    })
})
export const r_Resolve_Logic: _i_signatures._T_Resolve_Logic = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_signatures: _i_out._T_Resolve_Logic.signatures = _ea.deprecated_cc($['signatures'], ($) => _ea.deprecated_block(() => {
            const p_types: _i_out._T_Resolve_Logic.signatures.types = _ea.deprecated_cc($['types'], ($) => r_Signatures(
                $,
                {
                    'location 2 string': l2s,
                    'parameters': ({
                        'lookups': null,
                        'values': ({
                            'imports': params['values']['imports'],
                            'types': params['values']['types'],
                        }),
                    }),
                }
            ))
            return ({
                'types': p_types,
            })
        }))
        const p_resolvers: _i_out._T_Resolve_Logic.resolvers = _ea.deprecated_cc($['resolvers'], ($) => r_Resolvers(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': ({
                        'imports': params['values']['imports'],
                        'signatures': p_signatures['types'],
                        'types': params['values']['types'],
                    }),
                }),
            }
        ))
        return ({
            'resolvers': p_resolvers,
            'signatures': p_signatures,
        })
    })
})
export const r_Resolvers: _i_signatures._T_Resolvers = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const benchmark = params['values']['signatures']
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _ea.deprecated_block(() => {
                    const linked_entry = _edev.implement_me("zz")
                    return _ea.deprecated_cc($['value'], ($) => _ea.deprecated_block(() => {
                        const p_signature: _i_out._T_Resolvers.D.signature = _ea.deprecated_cc($['signature'], ($) => linked_entry)
                        const p_type_resolver: _i_out._T_Resolvers.D.type_resolver = _ea.deprecated_cc($['type resolver'], ($) => r_Node_Resolver(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': ({
                                        'parent sibling property resolvers': _ea.optional.not_set(),
                                        'sibling property resolvers': _ea.optional.not_set(),
                                    }),
                                    'values': ({
                                        'current dictionary': _ea.optional.not_set(),
                                        'current ordered dictionary': _ea.optional.not_set(),
                                        'definition': linked_entry['type']['node'],
                                        'imports': _ea.optional.set(params['values']['imports']),
                                        'linked entry': _ea.optional.not_set(),
                                        'list cursor': _ea.optional.not_set(),
                                        'option constraints': _ea.optional.not_set(),
                                        'signature': p_signature,
                                        'signatures': params['values']['signatures'],
                                        'types': params['values']['types'],
                                    }),
                                }),
                            }
                        ))
                        return ({
                            'signature': p_signature,
                            'type resolver': p_type_resolver,
                        })
                    }))
                }),
            }
        )
    })
})
export const r_Schema: _i_signatures._T_Schema = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_imports: _i_out._T_Schema.imports = _ea.deprecated_cc($['imports'], ($) => r_Imports(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': ({
                        'sibling schemas': params['lookups']['sibling schemas'],
                    }),
                    'values': null,
                }),
            }
        ))
        const p_globals: _i_out._T_Schema.globals = _ea.deprecated_cc($['globals'], ($) => r_Globals(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': null,
                }),
            }
        ))
        const p_types: _i_out._T_Schema.types = _ea.deprecated_cc($['types'], ($) => r_Types(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': ({
                        'globals': _ea.optional.set(p_globals),
                        'imports': _ea.optional.set(p_imports),
                    }),
                }),
            }
        ))
        const p_complexity: _i_out._T_Schema.complexity = _ea.deprecated_cc($['complexity'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Schema.complexity => {
            switch ($[0]) {
                case 'constrained': return _ea.ss($, ($) => ['constrained', _ea.deprecated_block(() => {
                    return r_Resolve_Logic(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': ({
                                    'imports': p_imports,
                                    'types': p_types,
                                }),
                            }),
                        }
                    )
                })])
                case 'unconstrained': return _ea.ss($, ($) => ['unconstrained', _ea.deprecated_block(() => {
                    return null
                })])
                default: return _ea.au($[0])
            }
        }))
        return ({
            'complexity': p_complexity,
            'globals': p_globals,
            'imports': p_imports,
            'types': p_types,
        })
    })
})
export const r_Schema_Tree: _i_signatures._T_Schema_Tree = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_cc($['state group'], ($): _i_out._T_Schema_Tree => {
        switch ($[0]) {
            case 'schema': return _ea.ss($, ($) => ['schema', _ea.deprecated_block(() => {
                return r_Schema(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': ({
                                'sibling schemas': params['lookups']['sibling schemas'],
                            }),
                            'values': null,
                        }),
                    }
                )
            })])
            case 'set': return _ea.ss($, ($) => ['set', _ea.deprecated_block(() => {
                return r_Schemas(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': ({
                                'sibling schemas': params['lookups']['sibling schemas'],
                            }),
                            'values': null,
                        }),
                    }
                )
            })])
            default: return _ea.au($[0])
        }
    })
})
export const r_Schemas: _i_signatures._T_Schemas = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _ea.deprecated_block(() => {
                    return _ea.deprecated_cc($['value'], ($) => r_Schema_Tree(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': ({
                                    'sibling schemas': _edev.implement_me("zz"),
                                }),
                                'values': null,
                            }),
                        }
                    ))
                }),
            }
        )
    })
})
export const r_Signature: _i_signatures._T_Signature = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_type: _i_out._T_Signature._type = _ea.deprecated_cc($['type'], ($) => params['values']['type'])
        const p_parameters: _i_out._T_Signature.parameters = _ea.deprecated_cc($['parameters'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Signature.parameters => {
            switch ($[0]) {
                case 'local': return _ea.ss($, ($) => ['local', _ea.deprecated_block(() => {
                    return r_Signature_Parameters(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': ({
                                    'imports': params['values']['imports'],
                                    'types': params['values']['types'],
                                }),
                            }),
                        }
                    )
                })])
                case 'same as': return _ea.ss($, ($) => ['same as', _ea.deprecated_block(() => {
                    return _i_generic.get_entry(
                        params['lookups']['sibling signatures'],
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    )
                })])
                default: return _ea.au($[0])
            }
        }))
        const p_resolved_parameters: _i_out._T_Signature.resolved_parameters = _ea.deprecated_cc($['resolved parameters'], ($) => _edev.implement_me("zz"))
        return ({
            'parameters': p_parameters,
            'resolved parameters': p_resolved_parameters,
            'type': p_type,
        })
    })
})
export const r_Signature_Parameters: _i_signatures._T_Signature_Parameters = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_values: _i_out._T_Signature_Parameters.values = _ea.deprecated_cc($['values'], ($) => _ea.deprecated_block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _ea.deprecated_block(() => {
                        return _ea.deprecated_cc($['value'], ($) => _ea.deprecated_block(() => {
                            const p_data_type: _i_out._T_Signature_Parameters.values.D.data_type = _ea.deprecated_cc($['data type'], ($) => r_Type_Reference(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': ({
                                            'types': _i_generic.dictionary_to_lookup(
                                                params['values']['types']['dictionary'],
                                                null
                                            ),
                                        }),
                                        'values': ({
                                            'imports': _ea.optional.set(params['values']['imports']),
                                        }),
                                    }),
                                }
                            ))
                            const p_presence: _i_out._T_Signature_Parameters.values.D.presence = _ea.deprecated_cc($['presence'], ($) => r_Presence(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': null,
                                        'values': null,
                                    }),
                                }
                            ))
                            return ({
                                'data type': p_data_type,
                                'presence': p_presence,
                            })
                        }))
                    }),
                }
            )
        }))
        const p_lookups: _i_out._T_Signature_Parameters.lookups = _ea.deprecated_cc($['lookups'], ($) => _ea.deprecated_block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _ea.deprecated_block(() => {
                        return _ea.deprecated_cc($['value'], ($) => _ea.deprecated_block(() => {
                            const p_referent: _i_out._T_Signature_Parameters.lookups.D.referent = _ea.deprecated_cc($['referent'], ($) => r_Type_Reference(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': ({
                                            'types': _i_generic.dictionary_to_lookup(
                                                params['values']['types']['dictionary'],
                                                null
                                            ),
                                        }),
                                        'values': ({
                                            'imports': _ea.optional.set(params['values']['imports']),
                                        }),
                                    }),
                                }
                            ))
                            const p_dictionary: _i_out._T_Signature_Parameters.lookups.D.dictionary = _ea.deprecated_cc($['dictionary'], ($) => _edev.implement_me("zz"))
                            const p_type: _i_out._T_Signature_Parameters.lookups.D._type = _ea.deprecated_cc($['type'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Signature_Parameters.lookups.D._type => {
                                switch ($[0]) {
                                    case 'acyclic': return _ea.ss($, ($) => ['acyclic', _ea.deprecated_block(() => {
                                        return null
                                    })])
                                    case 'cyclic': return _ea.ss($, ($) => ['cyclic', _ea.deprecated_block(() => {
                                        return null
                                    })])
                                    case 'stack': return _ea.ss($, ($) => ['stack', _ea.deprecated_block(() => {
                                        return null
                                    })])
                                    default: return _ea.au($[0])
                                }
                            }))
                            const p_presence: _i_out._T_Signature_Parameters.lookups.D.presence = _ea.deprecated_cc($['presence'], ($) => r_Presence(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': null,
                                        'values': null,
                                    }),
                                }
                            ))
                            return ({
                                'dictionary': p_dictionary,
                                'presence': p_presence,
                                'referent': p_referent,
                                'type': p_type,
                            })
                        }))
                    }),
                }
            )
        }))
        return ({
            'lookups': p_lookups,
            'values': p_values,
        })
    })
})
export const r_Signatures: _i_signatures._T_Signatures = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const benchmark = params['values']['types']
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _ea.deprecated_block(() => {
                    const linked_entry = _edev.implement_me("zz")
                    return _ea.deprecated_cc($['value'], ($) => r_Signature(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': ({
                                    'sibling signatures': $p['not circular dependent siblings'],
                                }),
                                'values': ({
                                    'imports': params['values']['imports'],
                                    'type': linked_entry,
                                    'types': params['values']['types'],
                                }),
                            }),
                        }
                    ))
                }),
            }
        )
    })
})
export const r_Text_Type: _i_signatures._T_Text_Type = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_type: _i_out._T_Text_Type._type = _ea.deprecated_cc($['type'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Text_Type._type => {
            switch ($[0]) {
                case 'multi line': return _ea.ss($, ($) => ['multi line', _ea.deprecated_block(() => {
                    return null
                })])
                case 'single line': return _ea.ss($, ($) => ['single line', _ea.deprecated_block(() => {
                    return null
                })])
                default: return _ea.au($[0])
            }
        }))
        return ({
            'type': p_type,
        })
    })
})
export const r_Type: _i_signatures._T_Type = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_type_parameters: _i_out._T_Type.type_parameters = _ea.deprecated_cc($['type parameters'], ($) => r_Type_Parameters(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': null,
                }),
            }
        ))
        const p_node: _i_out._T_Type.node = _ea.deprecated_cc($['node'], ($) => r_Type_Node(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': ({
                        'noncircular sibling types': params['lookups']['noncircular sibling types'],
                        'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                    }),
                    'values': ({
                        'globals': params['values']['globals'],
                        'imports': params['values']['imports'],
                        'type parameters': p_type_parameters,
                    }),
                }),
            }
        ))
        return ({
            'node': p_node,
            'type parameters': p_type_parameters,
        })
    })
})
export const r_Type_Node: _i_signatures._T_Type_Node = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_cc($['state group'], ($): _i_out._T_Type_Node => {
        switch ($[0]) {
            case 'boolean': return _ea.ss($, ($) => ['boolean', _ea.deprecated_block(() => {
                return null
            })])
            case 'component': return _ea.ss($, ($) => ['component', _ea.deprecated_block(() => {
                return _ea.deprecated_cc($['state group'], ($): _i_out._T_Type_Node.SG.component => {
                    switch ($[0]) {
                        case 'external': return _ea.ss($, ($) => ['external', _ea.deprecated_block(() => {
                            const c_import = params['values']['imports'].transform(
                                ($) => $,
                                () => _ea.fixme_abort('ABORT SELECTION')
                            )
                            return _ea.deprecated_block(() => {
                                const p_import: _i_out._T_Type_Node.SG.component.SG.external._import = _ea.deprecated_cc($['import'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        c_import,
                                        null
                                    ),
                                    {
                                        'location 2 string': l2s,
                                        'reference': $,
                                    }
                                ))
                                const p_type: _i_out._T_Type_Node.SG.component.SG.external._type = _ea.deprecated_cc($['type'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        p_import['entry']['schema']['types']['dictionary'],
                                        null
                                    ),
                                    {
                                        'location 2 string': l2s,
                                        'reference': $,
                                    }
                                ))
                                return ({
                                    'import': p_import,
                                    'type': p_type,
                                })
                            })
                        })])
                        case 'internal': return _ea.ss($, ($) => ['internal', _ea.deprecated_block(() => {
                            return _i_generic.get_entry(
                                params['lookups']['noncircular sibling types'],
                                {
                                    'location 2 string': l2s,
                                    'reference': $,
                                }
                            )
                        })])
                        case 'internal cyclic': return _ea.ss($, ($) => ['internal cyclic', _ea.deprecated_block(() => {
                            return _i_generic.get_possibly_circular_dependent_sibling_entry(
                                params['lookups']['possibly circular dependent sibling types'],
                                {
                                    'location 2 string': l2s,
                                    'reference': $,
                                }
                            )
                        })])
                        default: return _ea.au($[0])
                    }
                })
            })])
            case 'dictionary': return _ea.ss($, ($) => ['dictionary', _ea.deprecated_block(() => {
                return r_Dictionary(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': ({
                                'noncircular sibling types': params['lookups']['noncircular sibling types'],
                                'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                            }),
                            'values': ({
                                'globals': params['values']['globals'],
                                'imports': params['values']['imports'],
                                'type parameters': params['values']['type parameters'],
                            }),
                        }),
                    }
                )
            })])
            case 'group': return _ea.ss($, ($) => ['group', _ea.deprecated_block(() => {
                return r_Group(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': ({
                                'noncircular sibling types': params['lookups']['noncircular sibling types'],
                                'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                            }),
                            'values': ({
                                'globals': params['values']['globals'],
                                'imports': params['values']['imports'],
                                'type parameters': params['values']['type parameters'],
                            }),
                        }),
                    }
                )
            })])
            case 'list': return _ea.ss($, ($) => ['list', _ea.deprecated_block(() => {
                return _ea.deprecated_block(() => {
                    const p_node: _i_out._T_Type_Node.SG.list.node = _ea.deprecated_cc($['node'], ($) => r_Type_Node(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': params['lookups'],
                                'values': params['values'],
                            }),
                        }
                    ))
                    return ({
                        'node': p_node,
                    })
                })
            })])
            case 'nothing': return _ea.ss($, ($) => ['nothing', _ea.deprecated_block(() => {
                return null
            })])
            case 'number': return _ea.ss($, ($) => ['number', _ea.deprecated_block(() => {
                return _ea.deprecated_cc($['state group'], ($): _i_out._T_Type_Node.SG._number => {
                    switch ($[0]) {
                        case 'global': return _ea.ss($, ($) => ['global', _ea.deprecated_block(() => {
                            const c_globals = params['values']['globals'].transform(
                                ($) => $,
                                () => _ea.fixme_abort('ABORT SELECTION')
                            )
                            return _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(
                                    c_globals['number types'],
                                    null
                                ),
                                {
                                    'location 2 string': l2s,
                                    'reference': $,
                                }
                            )
                        })])
                        case 'local': return _ea.ss($, ($) => ['local', _ea.deprecated_block(() => {
                            return r_Number_Type(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': null,
                                        'values': null,
                                    }),
                                }
                            )
                        })])
                        default: return _ea.au($[0])
                    }
                })
            })])
            case 'optional': return _ea.ss($, ($) => ['optional', _ea.deprecated_block(() => {
                return r_Type_Node(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': params['lookups'],
                            'values': params['values'],
                        }),
                    }
                )
            })])
            case 'reference': return _ea.ss($, ($) => ['reference', _ea.deprecated_block(() => {
                return _ea.deprecated_block(() => {
                    const p_referent: _i_out._T_Type_Node.SG.reference.referent = _ea.deprecated_cc($['referent'], ($) => r_Type_Node_Reference(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': ({
                                    'types': params['lookups']['noncircular sibling types'],
                                }),
                                'values': ({
                                    'imports': params['values']['imports'],
                                }),
                            }),
                        }
                    ))
                    const p_type: _i_out._T_Type_Node.SG.reference._type = _ea.deprecated_cc($['type'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Type_Node.SG.reference._type => {
                        switch ($[0]) {
                            case 'derived': return _ea.ss($, ($) => ['derived', _ea.deprecated_block(() => {
                                return null
                            })])
                            case 'selected': return _ea.ss($, ($) => ['selected', _ea.deprecated_block(() => {
                                const c_dictionary = _edev.implement_me("zz")
                                return _ea.deprecated_block(() => {
                                    const p_dictionary: _i_out._T_Type_Node.SG.reference._type.SG.selected.dictionary = _ea.deprecated_cc($['dictionary'], ($) => c_dictionary)
                                    const p_dependency: _i_out._T_Type_Node.SG.reference._type.SG.selected.dependency = _ea.deprecated_cc($['dependency'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Type_Node.SG.reference._type.SG.selected.dependency => {
                                        switch ($[0]) {
                                            case 'acyclic': return _ea.ss($, ($) => ['acyclic', _ea.deprecated_block(() => {
                                                return null
                                            })])
                                            case 'cyclic': return _ea.ss($, ($) => ['cyclic', _ea.deprecated_block(() => {
                                                return null
                                            })])
                                            case 'stack': return _ea.ss($, ($) => ['stack', _ea.deprecated_block(() => {
                                                return null
                                            })])
                                            default: return _ea.au($[0])
                                        }
                                    }))
                                    return ({
                                        'dependency': p_dependency,
                                        'dictionary': p_dictionary,
                                    })
                                })
                            })])
                            default: return _ea.au($[0])
                        }
                    }))
                    return ({
                        'referent': p_referent,
                        'type': p_type,
                    })
                })
            })])
            case 'state group': return _ea.ss($, ($) => ['state group', _ea.deprecated_block(() => {
                return _ea.deprecated_block(() => {
                    return _i_generic.resolve_dictionary(
                        $,
                        {
                            'location 2 string': l2s,
                            'map': ($, $p) => _ea.deprecated_block(() => {
                                return _ea.deprecated_cc($['value'], ($) => _ea.deprecated_block(() => {
                                    const p_node: _i_out._T_Type_Node.SG.state_group.D.node = _ea.deprecated_cc($['node'], ($) => r_Type_Node(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'lookups': params['lookups'],
                                                'values': params['values'],
                                            }),
                                        }
                                    ))
                                    const p_description: _i_out._T_Type_Node.SG.state_group.D.description = _ea.deprecated_cc($['description'], ($) => $.map(($) => _ea.deprecated_block(() => {
                                        return $
                                    })))
                                    return ({
                                        'description': p_description,
                                        'node': p_node,
                                    })
                                }))
                            }),
                        }
                    )
                })
            })])
            case 'text': return _ea.ss($, ($) => ['text', _ea.deprecated_block(() => {
                return _ea.deprecated_cc($['state group'], ($): _i_out._T_Type_Node.SG.text => {
                    switch ($[0]) {
                        case 'global': return _ea.ss($, ($) => ['global', _ea.deprecated_block(() => {
                            const c_globals = params['values']['globals'].transform(
                                ($) => $,
                                () => _ea.fixme_abort('ABORT SELECTION')
                            )
                            return _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(
                                    c_globals['text types'],
                                    null
                                ),
                                {
                                    'location 2 string': l2s,
                                    'reference': $,
                                }
                            )
                        })])
                        case 'local': return _ea.ss($, ($) => ['local', _ea.deprecated_block(() => {
                            return r_Text_Type(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': null,
                                        'values': null,
                                    }),
                                }
                            )
                        })])
                        default: return _ea.au($[0])
                    }
                })
            })])
            default: return _ea.au($[0])
        }
    })
})
export const r_Type_Node_Reference: _i_signatures._T_Type_Node_Reference = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_type_location: _i_out._T_Type_Node_Reference.type_location = _ea.deprecated_cc($['type location'], ($) => r_Type_Reference(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': params['lookups'],
                    'values': params['values'],
                }),
            }
        ))
        const p_tail: _i_out._T_Type_Node_Reference.tail = _ea.deprecated_cc($['tail'], ($) => $['list'].map(($) => _ea.deprecated_cc($['element'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Type_Node_Reference.tail.L => {
            switch ($[0]) {
                case 'dictionary': return _ea.ss($, ($) => ['dictionary', _ea.deprecated_block(() => {
                    const c_definition = _edev.implement_me("zz")
                    return null
                })])
                case 'group': return _ea.ss($, ($) => ['group', _ea.deprecated_block(() => {
                    const c_definition = _edev.implement_me("zz")
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            c_definition['dictionary'],
                            null
                        ),
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    )
                })])
                case 'list': return _ea.ss($, ($) => ['list', _ea.deprecated_block(() => {
                    const c_definition = _edev.implement_me("zz")
                    return null
                })])
                case 'optional': return _ea.ss($, ($) => ['optional', _ea.deprecated_block(() => {
                    const c_definition = _edev.implement_me("zz")
                    return null
                })])
                case 'state group': return _ea.ss($, ($) => ['state group', _ea.deprecated_block(() => {
                    const c_definition = _edev.implement_me("zz")
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            c_definition,
                            null
                        ),
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    )
                })])
                default: return _ea.au($[0])
            }
        }))))
        const p_resulting_node: _i_out._T_Type_Node_Reference.resulting_node = _ea.deprecated_cc($['resulting node'], ($) => _edev.implement_me("zz"))
        return ({
            'resulting node': p_resulting_node,
            'tail': p_tail,
            'type location': p_type_location,
        })
    })
})
export const r_Type_Parameters: _i_signatures._T_Type_Parameters = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _ea.deprecated_block(() => {
                    return _ea.deprecated_cc($['value'], ($) => null)
                }),
            }
        )
    })
})
export const r_Type_Reference: _i_signatures._T_Type_Reference = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_location: _i_out._T_Type_Reference.location = _ea.deprecated_cc($['location'], ($) => _ea.deprecated_cc($['state group'], ($): _i_out._T_Type_Reference.location => {
            switch ($[0]) {
                case 'external': return _ea.ss($, ($) => ['external', _ea.deprecated_block(() => {
                    const c_import = params['values']['imports'].transform(
                        ($) => $,
                        () => _ea.fixme_abort('ABORT SELECTION')
                    )
                    return _ea.deprecated_block(() => {
                        const p_import: _i_out._T_Type_Reference.location.SG.external._import = _ea.deprecated_cc($['import'], ($) => _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(
                                c_import,
                                null
                            ),
                            {
                                'location 2 string': l2s,
                                'reference': $,
                            }
                        ))
                        const p_type: _i_out._T_Type_Reference.location.SG.external._type = _ea.deprecated_cc($['type'], ($) => _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(
                                p_import['entry']['schema']['types']['dictionary'],
                                null
                            ),
                            {
                                'location 2 string': l2s,
                                'reference': $,
                            }
                        ))
                        return ({
                            'import': p_import,
                            'type': p_type,
                        })
                    })
                })])
                case 'internal': return _ea.ss($, ($) => ['internal', _ea.deprecated_block(() => {
                    return _i_generic.get_entry(
                        params['lookups']['types'],
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    )
                })])
                default: return _ea.au($[0])
            }
        }))
        const p_resulting_node: _i_out._T_Type_Reference.resulting_node = _ea.deprecated_cc($['resulting node'], ($) => _edev.implement_me("zz"))
        return ({
            'location': p_location,
            'resulting node': p_resulting_node,
        })
    })
})
export const r_Type_Specification: _i_signatures._T_Type_Specification = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        const p_schema: _i_out._T_Type_Specification.schema = _ea.deprecated_cc($['schema'], ($) => r_Schema_Tree(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': ({
                        'sibling schemas': _ea.list.literal([
                        ]),
                    }),
                    'values': null,
                }),
            }
        ))
        const p_schema_path: _i_out._T_Type_Specification.schema_path = _ea.deprecated_cc($['schema path'], ($) => $['list'].map(($) => _ea.deprecated_cc($['element'], ($) => $)))
        const p_type: _i_out._T_Type_Specification._type = _ea.deprecated_cc($['type'], ($) => $)
        return ({
            'schema': p_schema,
            'schema path': p_schema_path,
            'type': p_type,
        })
    })
})
export const r_Types: _i_signatures._T_Types = ($, $p) => _ea.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _ea.deprecated_block(() => {
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _ea.deprecated_block(() => {
                    return _ea.deprecated_cc($['value'], ($) => r_Type(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': ({
                                    'noncircular sibling types': $p['not circular dependent siblings'],
                                    'possibly circular dependent sibling types': $p['possibly circular dependent siblings'],
                                }),
                                'values': ({
                                    'globals': params['values']['globals'],
                                    'imports': params['values']['imports'],
                                }),
                            }),
                        }
                    ))
                }),
            }
        )
    })
})
