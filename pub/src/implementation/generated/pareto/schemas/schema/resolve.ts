import * as _p from 'pareto-core-refiner'
import * as _pdev from 'pareto-core-dev'

import * as _i_generic from "pareto-core-internals/dist/algorithm_types/refiner/resolve"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/schema/data_types/resolve"


export const r_Type: _i_signatures._T_Type = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_type_parameters: _i_out._T_Type.type_parameters = _p.deprecated_cc($['type parameters'], ($) => r_Type_Parameters(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': null,
                    'lookups': null,
                }),
            }
        ))
        const p_node: _i_out._T_Type.node = _p.deprecated_cc($['node'], ($) => r_Type_Node(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': ({
                        'globals': params['values']['globals'],
                        'type parameters': p_type_parameters,
                        'imports': params['values']['imports'],
                    }),
                    'lookups': ({
                        'noncircular sibling types': params['lookups']['noncircular sibling types'],
                        'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                    }),
                }),
            }
        ))
        return ({
            'type parameters': p_type_parameters,
            'node': p_node,
        })
    })
})
export const r_Types: _i_signatures._T_Types = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    return _p.deprecated_cc($['value'], ($) => r_Type(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': ({
                                    'globals': params['values']['globals'],
                                    'imports': params['values']['imports'],
                                }),
                                'lookups': ({
                                    'noncircular sibling types': $p['not circular dependent siblings'],
                                    'possibly circular dependent sibling types': $p['possibly circular dependent siblings'],
                                }),
                            }),
                        }
                    ))
                }),
                'location 2 string': l2s,
            }
        )
    })
})
export const r_Globals: _i_signatures._T_Globals = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_complexity: _i_out._T_Globals.complexity = _p.deprecated_cc($['complexity'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Globals.complexity => {
            switch ($[0]) {
                case 'unconstrained': return _p.ss($, ($) => ['unconstrained', _p.deprecated_block(() => {
                    return null
                })])
                case 'constrained': return _p.ss($, ($) => ['constrained', _p.deprecated_block(() => {
                    return null
                })])
                default: return _p.au($[0])
            }
        }))
        const p_text_types: _i_out._T_Globals.text_types = _p.deprecated_cc($['text types'], ($) => _p.deprecated_block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _p.deprecated_block(() => {
                        return _p.deprecated_cc($['value'], ($) => r_Text_Type(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': null,
                                    'lookups': null,
                                }),
                            }
                        ))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_number_types: _i_out._T_Globals.number_types = _p.deprecated_cc($['number types'], ($) => _p.deprecated_block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _p.deprecated_block(() => {
                        return _p.deprecated_cc($['value'], ($) => r_Number_Type(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': null,
                                    'lookups': null,
                                }),
                            }
                        ))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        return ({
            'complexity': p_complexity,
            'text types': p_text_types,
            'number types': p_number_types,
        })
    })
})
export const r_Number_Type: _i_signatures._T_Number_Type = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_precision: _i_out._T_Number_Type.precision = _p.deprecated_cc($['precision'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Number_Type.precision => {
            switch ($[0]) {
                case 'approximation': return _p.ss($, ($) => ['approximation', _p.deprecated_block(() => {
                    return _p.deprecated_block(() => {
                        const p_significant_digits: _i_out._T_Number_Type.precision.SG.approximation.significant_digits = _p.deprecated_cc($['significant digits'], ($) => $)
                        return ({
                            'significant digits': p_significant_digits,
                        })
                    })
                })])
                case 'exact': return _p.ss($, ($) => ['exact', _p.deprecated_block(() => {
                    return _p.deprecated_block(() => {
                        const p_decimal_separator_offset: _i_out._T_Number_Type.precision.SG.exact.decimal_separator_offset = _p.deprecated_cc($['decimal separator offset'], ($) => $.__o_map(($) => _p.deprecated_block(() => {
                            return $
                        })))
                        const p_type: _i_out._T_Number_Type.precision.SG.exact._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Number_Type.precision.SG.exact._type => {
                            switch ($[0]) {
                                case 'integer': return _p.ss($, ($) => ['integer', _p.deprecated_block(() => {
                                    return null
                                })])
                                case 'natural': return _p.ss($, ($) => ['natural', _p.deprecated_block(() => {
                                    return null
                                })])
                                case 'positive natural': return _p.ss($, ($) => ['positive natural', _p.deprecated_block(() => {
                                    return null
                                })])
                                default: return _p.au($[0])
                            }
                        }))
                        return ({
                            'decimal separator offset': p_decimal_separator_offset,
                            'type': p_type,
                        })
                    })
                })])
                default: return _p.au($[0])
            }
        }))
        return ({
            'precision': p_precision,
        })
    })
})
export const r_Text_Type: _i_signatures._T_Text_Type = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_type: _i_out._T_Text_Type._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Text_Type._type => {
            switch ($[0]) {
                case 'multi line': return _p.ss($, ($) => ['multi line', _p.deprecated_block(() => {
                    return null
                })])
                case 'single line': return _p.ss($, ($) => ['single line', _p.deprecated_block(() => {
                    return null
                })])
                default: return _p.au($[0])
            }
        }))
        return ({
            'type': p_type,
        })
    })
})
export const r_Type_Reference: _i_signatures._T_Type_Reference = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_location: _i_out._T_Type_Reference.location = _p.deprecated_cc($['location'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Type_Reference.location => {
            switch ($[0]) {
                case 'internal': return _p.ss($, ($) => ['internal', _p.deprecated_block(() => {
                    return _i_generic.get_entry(
                        params['lookups']['types'],
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    )
                })])
                case 'external': return _p.ss($, ($) => ['external', _p.deprecated_block(() => {
                    const c_import = params['values']['imports'].__decide(
                        ($) => $,
                        () => _p.fixme_abort('ABORT SELECTION')
                    )
                    return _p.deprecated_block(() => {
                        const p_import: _i_out._T_Type_Reference.location.SG.external._import = _p.deprecated_cc($['import'], ($) => _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(
                                c_import,
                                null
                            ),
                            {
                                'reference': $,
                                'location 2 string': l2s,
                            }
                        ))
                        const p_type: _i_out._T_Type_Reference.location.SG.external._type = _p.deprecated_cc($['type'], ($) => _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(
                                p_import['entry']['schema']['types']['dictionary'],
                                null
                            ),
                            {
                                'reference': $,
                                'location 2 string': l2s,
                            }
                        ))
                        return ({
                            'import': p_import,
                            'type': p_type,
                        })
                    })
                })])
                default: return _p.au($[0])
            }
        }))
        const p_resulting_node: _i_out._T_Type_Reference.resulting_node = _p.deprecated_cc($['resulting node'], ($) => _pdev.implement_me("marker tbd"))
        return ({
            'location': p_location,
            'resulting node': p_resulting_node,
        })
    })
})
export const r_Type_Node_Reference: _i_signatures._T_Type_Node_Reference = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_type_location: _i_out._T_Type_Node_Reference.type_location = _p.deprecated_cc($['type location'], ($) => r_Type_Reference(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': params['values'],
                    'lookups': params['lookups'],
                }),
            }
        ))
        const p_tail: _i_out._T_Type_Node_Reference.tail = _p.deprecated_cc($['tail'], ($) => $['list'].map(($) => _p.deprecated_cc($['element'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Type_Node_Reference.tail.L => {
            switch ($[0]) {
                case 'dictionary': return _p.ss($, ($) => ['dictionary', _p.deprecated_block(() => {
                    const c_definition = _pdev.implement_me("marker tbd")
                    return null
                })])
                case 'group': return _p.ss($, ($) => ['group', _p.deprecated_block(() => {
                    const c_definition = _pdev.implement_me("marker tbd")
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            c_definition['dictionary'],
                            null
                        ),
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    )
                })])
                case 'list': return _p.ss($, ($) => ['list', _p.deprecated_block(() => {
                    const c_definition = _pdev.implement_me("marker tbd")
                    return null
                })])
                case 'optional': return _p.ss($, ($) => ['optional', _p.deprecated_block(() => {
                    const c_definition = _pdev.implement_me("marker tbd")
                    return null
                })])
                case 'state group': return _p.ss($, ($) => ['state group', _p.deprecated_block(() => {
                    const c_definition = _pdev.implement_me("marker tbd")
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            c_definition,
                            null
                        ),
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    )
                })])
                default: return _p.au($[0])
            }
        }))))
        const p_resulting_node: _i_out._T_Type_Node_Reference.resulting_node = _p.deprecated_cc($['resulting node'], ($) => _pdev.implement_me("marker tbd"))
        return ({
            'type location': p_type_location,
            'tail': p_tail,
            'resulting node': p_resulting_node,
        })
    })
})
export const r_Group: _i_signatures._T_Group = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    return _p.deprecated_cc($['value'], ($) => _p.deprecated_block(() => {
                        const p_description: _i_out._T_Group.D.description = _p.deprecated_cc($['description'], ($) => $.__o_map(($) => _p.deprecated_block(() => {
                            return $
                        })))
                        const p_node: _i_out._T_Group.D.node = _p.deprecated_cc($['node'], ($) => r_Type_Node(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': ({
                                        'globals': params['values']['globals'],
                                        'type parameters': params['values']['type parameters'],
                                        'imports': params['values']['imports'],
                                    }),
                                    'lookups': ({
                                        'noncircular sibling types': params['lookups']['noncircular sibling types'],
                                        'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
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
                'location 2 string': l2s,
            }
        )
    })
})
export const r_Dictionary: _i_signatures._T_Dictionary = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_node: _i_out._T_Dictionary.node = _p.deprecated_cc($['node'], ($) => r_Type_Node(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': ({
                        'globals': params['values']['globals'],
                        'type parameters': params['values']['type parameters'],
                        'imports': params['values']['imports'],
                    }),
                    'lookups': ({
                        'noncircular sibling types': params['lookups']['noncircular sibling types'],
                        'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                    }),
                }),
            }
        ))
        const p_ordered: _i_out._T_Dictionary.ordered = _p.deprecated_cc($['ordered'], ($) => $)
        return ({
            'node': p_node,
            'ordered': p_ordered,
        })
    })
})
export const r_Type_Node: _i_signatures._T_Type_Node = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_cc($['state group'], ($): _i_out._T_Type_Node => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => ['boolean', _p.deprecated_block(() => {
                return null
            })])
            case 'component': return _p.ss($, ($) => ['component', _p.deprecated_block(() => {
                return _p.deprecated_cc($['state group'], ($): _i_out._T_Type_Node.SG.component => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => ['external', _p.deprecated_block(() => {
                            const c_import = params['values']['imports'].__decide(
                                ($) => $,
                                () => _p.fixme_abort('ABORT SELECTION')
                            )
                            return _p.deprecated_block(() => {
                                const p_import: _i_out._T_Type_Node.SG.component.SG.external._import = _p.deprecated_cc($['import'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        c_import,
                                        null
                                    ),
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                ))
                                const p_type: _i_out._T_Type_Node.SG.component.SG.external._type = _p.deprecated_cc($['type'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        p_import['entry']['schema']['types']['dictionary'],
                                        null
                                    ),
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                ))
                                return ({
                                    'import': p_import,
                                    'type': p_type,
                                })
                            })
                        })])
                        case 'internal': return _p.ss($, ($) => ['internal', _p.deprecated_block(() => {
                            return _i_generic.get_entry(
                                params['lookups']['noncircular sibling types'],
                                {
                                    'reference': $,
                                    'location 2 string': l2s,
                                }
                            )
                        })])
                        case 'internal cyclic': return _p.ss($, ($) => ['internal cyclic', _p.deprecated_block(() => {
                            return _i_generic.get_possibly_circular_dependent_sibling_entry(
                                params['lookups']['possibly circular dependent sibling types'],
                                {
                                    'reference': $,
                                    'location 2 string': l2s,
                                }
                            )
                        })])
                        default: return _p.au($[0])
                    }
                })
            })])
            case 'dictionary': return _p.ss($, ($) => ['dictionary', _p.deprecated_block(() => {
                return r_Dictionary(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'values': ({
                                'globals': params['values']['globals'],
                                'type parameters': params['values']['type parameters'],
                                'imports': params['values']['imports'],
                            }),
                            'lookups': ({
                                'noncircular sibling types': params['lookups']['noncircular sibling types'],
                                'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                            }),
                        }),
                    }
                )
            })])
            case 'group': return _p.ss($, ($) => ['group', _p.deprecated_block(() => {
                return r_Group(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'values': ({
                                'globals': params['values']['globals'],
                                'type parameters': params['values']['type parameters'],
                                'imports': params['values']['imports'],
                            }),
                            'lookups': ({
                                'noncircular sibling types': params['lookups']['noncircular sibling types'],
                                'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                            }),
                        }),
                    }
                )
            })])
            case 'list': return _p.ss($, ($) => ['list', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    const p_node: _i_out._T_Type_Node.SG.list.node = _p.deprecated_cc($['node'], ($) => r_Type_Node(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': params['values'],
                                'lookups': params['lookups'],
                            }),
                        }
                    ))
                    return ({
                        'node': p_node,
                    })
                })
            })])
            case 'nothing': return _p.ss($, ($) => ['nothing', _p.deprecated_block(() => {
                return null
            })])
            case 'number': return _p.ss($, ($) => ['number', _p.deprecated_block(() => {
                return _p.deprecated_cc($['state group'], ($): _i_out._T_Type_Node.SG._number => {
                    switch ($[0]) {
                        case 'global': return _p.ss($, ($) => ['global', _p.deprecated_block(() => {
                            const c_globals = params['values']['globals'].__decide(
                                ($) => $,
                                () => _p.fixme_abort('ABORT SELECTION')
                            )
                            return _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(
                                    c_globals['number types'],
                                    null
                                ),
                                {
                                    'reference': $,
                                    'location 2 string': l2s,
                                }
                            )
                        })])
                        case 'local': return _p.ss($, ($) => ['local', _p.deprecated_block(() => {
                            return r_Number_Type(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'values': null,
                                        'lookups': null,
                                    }),
                                }
                            )
                        })])
                        default: return _p.au($[0])
                    }
                })
            })])
            case 'optional': return _p.ss($, ($) => ['optional', _p.deprecated_block(() => {
                return r_Type_Node(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'values': params['values'],
                            'lookups': params['lookups'],
                        }),
                    }
                )
            })])
            case 'reference': return _p.ss($, ($) => ['reference', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    const p_referent: _i_out._T_Type_Node.SG.reference.referent = _p.deprecated_cc($['referent'], ($) => r_Type_Node_Reference(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': ({
                                    'imports': params['values']['imports'],
                                }),
                                'lookups': ({
                                    'types': params['lookups']['noncircular sibling types'],
                                }),
                            }),
                        }
                    ))
                    const p_type: _i_out._T_Type_Node.SG.reference._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Type_Node.SG.reference._type => {
                        switch ($[0]) {
                            case 'derived': return _p.ss($, ($) => ['derived', _p.deprecated_block(() => {
                                return null
                            })])
                            case 'selected': return _p.ss($, ($) => ['selected', _p.deprecated_block(() => {
                                const c_dictionary = _pdev.implement_me("marker tbd")
                                return _p.deprecated_block(() => {
                                    const p_dictionary: _i_out._T_Type_Node.SG.reference._type.SG.selected.dictionary = _p.deprecated_cc($['dictionary'], ($) => c_dictionary)
                                    const p_dependency: _i_out._T_Type_Node.SG.reference._type.SG.selected.dependency = _p.deprecated_cc($['dependency'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Type_Node.SG.reference._type.SG.selected.dependency => {
                                        switch ($[0]) {
                                            case 'acyclic': return _p.ss($, ($) => ['acyclic', _p.deprecated_block(() => {
                                                return null
                                            })])
                                            case 'cyclic': return _p.ss($, ($) => ['cyclic', _p.deprecated_block(() => {
                                                return null
                                            })])
                                            case 'stack': return _p.ss($, ($) => ['stack', _p.deprecated_block(() => {
                                                return null
                                            })])
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    return ({
                                        'dictionary': p_dictionary,
                                        'dependency': p_dependency,
                                    })
                                })
                            })])
                            default: return _p.au($[0])
                        }
                    }))
                    return ({
                        'referent': p_referent,
                        'type': p_type,
                    })
                })
            })])
            case 'state group': return _p.ss($, ($) => ['state group', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    return _i_generic.resolve_dictionary(
                        $,
                        {
                            'map': ($, $p) => _p.deprecated_block(() => {
                                return _p.deprecated_cc($['value'], ($) => _p.deprecated_block(() => {
                                    const p_node: _i_out._T_Type_Node.SG.state_group.D.node = _p.deprecated_cc($['node'], ($) => r_Type_Node(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'values': params['values'],
                                                'lookups': params['lookups'],
                                            }),
                                        }
                                    ))
                                    const p_description: _i_out._T_Type_Node.SG.state_group.D.description = _p.deprecated_cc($['description'], ($) => $.__o_map(($) => _p.deprecated_block(() => {
                                        return $
                                    })))
                                    return ({
                                        'node': p_node,
                                        'description': p_description,
                                    })
                                }))
                            }),
                            'location 2 string': l2s,
                        }
                    )
                })
            })])
            case 'text': return _p.ss($, ($) => ['text', _p.deprecated_block(() => {
                return _p.deprecated_cc($['state group'], ($): _i_out._T_Type_Node.SG.text => {
                    switch ($[0]) {
                        case 'global': return _p.ss($, ($) => ['global', _p.deprecated_block(() => {
                            const c_globals = params['values']['globals'].__decide(
                                ($) => $,
                                () => _p.fixme_abort('ABORT SELECTION')
                            )
                            return _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(
                                    c_globals['text types'],
                                    null
                                ),
                                {
                                    'reference': $,
                                    'location 2 string': l2s,
                                }
                            )
                        })])
                        case 'local': return _p.ss($, ($) => ['local', _p.deprecated_block(() => {
                            return r_Text_Type(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'values': null,
                                        'lookups': null,
                                    }),
                                }
                            )
                        })])
                        default: return _p.au($[0])
                    }
                })
            })])
            default: return _p.au($[0])
        }
    })
})
export const r_Type_Parameters: _i_signatures._T_Type_Parameters = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    return _p.deprecated_cc($['value'], ($) => null)
                }),
                'location 2 string': l2s,
            }
        )
    })
})
export const r_Relative_Value_Selection: _i_signatures._T_Relative_Value_Selection = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_path: _i_out._T_Relative_Value_Selection.path = _p.deprecated_cc($['path'], ($) => $['list'].map(($) => _p.deprecated_cc($['element'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Relative_Value_Selection.path.L => {
            switch ($[0]) {
                case 'component': return _p.ss($, ($) => ['component', _p.deprecated_block(() => {
                    const c_definition = _pdev.implement_me("marker tbd")
                    return null
                })])
                case 'group': return _p.ss($, ($) => ['group', _p.deprecated_block(() => {
                    const c_definition = _pdev.implement_me("marker tbd")
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            c_definition['dictionary'],
                            null
                        ),
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    )
                })])
                case 'reference': return _p.ss($, ($) => ['reference', _p.deprecated_block(() => {
                    const c_definition = _pdev.implement_me("marker tbd")
                    return _p.deprecated_block(() => {
                        const p_definition: _i_out._T_Relative_Value_Selection.path.L.SG.reference.definition = _p.deprecated_cc($['definition'], ($) => c_definition)
                        return ({
                            'definition': p_definition,
                        })
                    })
                })])
                default: return _p.au($[0])
            }
        }))))
        const p_resulting_node: _i_out._T_Relative_Value_Selection.resulting_node = _p.deprecated_cc($['resulting node'], ($) => _pdev.implement_me("marker tbd"))
        return ({
            'path': p_path,
            'resulting node': p_resulting_node,
        })
    })
})
export const r_Presence: _i_signatures._T_Presence = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_cc($['state group'], ($): _i_out._T_Presence => {
        switch ($[0]) {
            case 'optional': return _p.ss($, ($) => ['optional', _p.deprecated_block(() => {
                return null
            })])
            case 'required': return _p.ss($, ($) => ['required', _p.deprecated_block(() => {
                return null
            })])
            default: return _p.au($[0])
        }
    })
})
export const r_Signature_Parameters: _i_signatures._T_Signature_Parameters = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_values: _i_out._T_Signature_Parameters.values = _p.deprecated_cc($['values'], ($) => _p.deprecated_block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _p.deprecated_block(() => {
                        return _p.deprecated_cc($['value'], ($) => _p.deprecated_block(() => {
                            const p_data_type: _i_out._T_Signature_Parameters.values.D.data_type = _p.deprecated_cc($['data type'], ($) => r_Type_Reference(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'values': ({
                                            'imports': _p.optional.set(params['values']['imports']),
                                        }),
                                        'lookups': ({
                                            'types': _i_generic.dictionary_to_lookup(
                                                params['values']['types']['dictionary'],
                                                null
                                            ),
                                        }),
                                    }),
                                }
                            ))
                            const p_presence: _i_out._T_Signature_Parameters.values.D.presence = _p.deprecated_cc($['presence'], ($) => r_Presence(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'values': null,
                                        'lookups': null,
                                    }),
                                }
                            ))
                            return ({
                                'data type': p_data_type,
                                'presence': p_presence,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_lookups: _i_out._T_Signature_Parameters.lookups = _p.deprecated_cc($['lookups'], ($) => _p.deprecated_block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _p.deprecated_block(() => {
                        return _p.deprecated_cc($['value'], ($) => _p.deprecated_block(() => {
                            const p_referent: _i_out._T_Signature_Parameters.lookups.D.referent = _p.deprecated_cc($['referent'], ($) => r_Type_Reference(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'values': ({
                                            'imports': _p.optional.set(params['values']['imports']),
                                        }),
                                        'lookups': ({
                                            'types': _i_generic.dictionary_to_lookup(
                                                params['values']['types']['dictionary'],
                                                null
                                            ),
                                        }),
                                    }),
                                }
                            ))
                            const p_dictionary: _i_out._T_Signature_Parameters.lookups.D.dictionary = _p.deprecated_cc($['dictionary'], ($) => _pdev.implement_me("marker tbd"))
                            const p_type: _i_out._T_Signature_Parameters.lookups.D._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Signature_Parameters.lookups.D._type => {
                                switch ($[0]) {
                                    case 'cyclic': return _p.ss($, ($) => ['cyclic', _p.deprecated_block(() => {
                                        return null
                                    })])
                                    case 'acyclic': return _p.ss($, ($) => ['acyclic', _p.deprecated_block(() => {
                                        return null
                                    })])
                                    case 'stack': return _p.ss($, ($) => ['stack', _p.deprecated_block(() => {
                                        return null
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            const p_presence: _i_out._T_Signature_Parameters.lookups.D.presence = _p.deprecated_cc($['presence'], ($) => r_Presence(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'values': null,
                                        'lookups': null,
                                    }),
                                }
                            ))
                            return ({
                                'referent': p_referent,
                                'dictionary': p_dictionary,
                                'type': p_type,
                                'presence': p_presence,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        return ({
            'values': p_values,
            'lookups': p_lookups,
        })
    })
})
export const r_Signature: _i_signatures._T_Signature = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_type: _i_out._T_Signature._type = _p.deprecated_cc($['type'], ($) => params['values']['type'])
        const p_parameters: _i_out._T_Signature.parameters = _p.deprecated_cc($['parameters'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Signature.parameters => {
            switch ($[0]) {
                case 'local': return _p.ss($, ($) => ['local', _p.deprecated_block(() => {
                    return r_Signature_Parameters(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': ({
                                    'types': params['values']['types'],
                                    'imports': params['values']['imports'],
                                }),
                                'lookups': null,
                            }),
                        }
                    )
                })])
                case 'same as': return _p.ss($, ($) => ['same as', _p.deprecated_block(() => {
                    return _i_generic.get_entry(
                        params['lookups']['sibling signatures'],
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    )
                })])
                default: return _p.au($[0])
            }
        }))
        const p_resolved_parameters: _i_out._T_Signature.resolved_parameters = _p.deprecated_cc($['resolved parameters'], ($) => _pdev.implement_me("marker tbd"))
        return ({
            'type': p_type,
            'parameters': p_parameters,
            'resolved parameters': p_resolved_parameters,
        })
    })
})
export const r_Signatures: _i_signatures._T_Signatures = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const benchmark = params['values']['types']
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    const linked_entry = _pdev.implement_me("marker tbd")
                    return _p.deprecated_cc($['value'], ($) => r_Signature(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': ({
                                    'types': params['values']['types'],
                                    'type': linked_entry,
                                    'imports': params['values']['imports'],
                                }),
                                'lookups': ({
                                    'sibling signatures': $p['not circular dependent siblings'],
                                }),
                            }),
                        }
                    ))
                }),
                'location 2 string': l2s,
            }
        )
    })
})
export const r_Optional_Value_Initialization: _i_signatures._T_Optional_Value_Initialization = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_cc($['state group'], ($): _i_out._T_Optional_Value_Initialization => {
        switch ($[0]) {
            case 'not set': return _p.ss($, ($) => ['not set', _p.deprecated_block(() => {
                return null
            })])
            case 'set': return _p.ss($, ($) => ['set', _p.deprecated_block(() => {
                return r_Guaranteed_Value_Selection(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'values': params['values'],
                            'lookups': params['lookups'],
                        }),
                    }
                )
            })])
            case 'selection': return _p.ss($, ($) => ['selection', _p.deprecated_block(() => {
                return r_Possible_Value_Selection(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'values': params['values'],
                            'lookups': params['lookups'],
                        }),
                    }
                )
            })])
            default: return _p.au($[0])
        }
    })
})
export const r_Possible_Value_Selection: _i_signatures._T_Possible_Value_Selection = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_cc($['state group'], ($): _i_out._T_Possible_Value_Selection => {
        switch ($[0]) {
            case 'parameter': return _p.ss($, ($) => ['parameter', _p.deprecated_block(() => {
                return _i_generic.get_entry(
                    _i_generic.dictionary_to_lookup(
                        params['values']['signature']['resolved parameters']['values'],
                        null
                    ),
                    {
                        'reference': $,
                        'location 2 string': l2s,
                    }
                )
            })])
            case 'result': return _p.ss($, ($) => ['result', _p.deprecated_block(() => {
                return _p.deprecated_cc($['state group'], ($): _i_out._T_Possible_Value_Selection.SG.result => {
                    switch ($[0]) {
                        case 'state group': return _p.ss($, ($) => ['state group', _p.deprecated_block(() => {
                            return _p.deprecated_block(() => {
                                const p_property: _i_out._T_Possible_Value_Selection.SG.result.SG.state_group.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                    params['lookups']['sibling property resolvers'],
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                ))
                                const p_state_group: _i_out._T_Possible_Value_Selection.SG.result.SG.state_group.state_group = _p.deprecated_cc($['state group'], ($) => _pdev.implement_me("marker tbd"))
                                const p_result: _i_out._T_Possible_Value_Selection.SG.result.SG.state_group.result = _p.deprecated_cc($['result'], ($) => r_Type_Reference(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'values': ({
                                                'imports': params['values']['imports'],
                                            }),
                                            'lookups': ({
                                                'types': _i_generic.dictionary_to_lookup(
                                                    params['values']['types']['dictionary'],
                                                    null
                                                ),
                                            }),
                                        }),
                                    }
                                ))
                                return ({
                                    'property': p_property,
                                    'state group': p_state_group,
                                    'result': p_result,
                                })
                            })
                        })])
                        case 'optional value': return _p.ss($, ($) => ['optional value', _p.deprecated_block(() => {
                            return _p.deprecated_block(() => {
                                const p_property: _i_out._T_Possible_Value_Selection.SG.result.SG.optional_value.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                    params['lookups']['sibling property resolvers'],
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                ))
                                const p_optional_value: _i_out._T_Possible_Value_Selection.SG.result.SG.optional_value.optional_value = _p.deprecated_cc($['optional value'], ($) => _pdev.implement_me("marker tbd"))
                                const p_result: _i_out._T_Possible_Value_Selection.SG.result.SG.optional_value.result = _p.deprecated_cc($['result'], ($) => r_Type_Reference(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'values': ({
                                                'imports': params['values']['imports'],
                                            }),
                                            'lookups': ({
                                                'types': _i_generic.dictionary_to_lookup(
                                                    params['values']['types']['dictionary'],
                                                    null
                                                ),
                                            }),
                                        }),
                                    }
                                ))
                                return ({
                                    'property': p_property,
                                    'optional value': p_optional_value,
                                    'result': p_result,
                                })
                            })
                        })])
                        default: return _p.au($[0])
                    }
                })
            })])
            default: return _p.au($[0])
        }
    })
})
export const r_Guaranteed_Value_Selection: _i_signatures._T_Guaranteed_Value_Selection = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_start: _i_out._T_Guaranteed_Value_Selection.start = _p.deprecated_cc($['start'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Guaranteed_Value_Selection.start => {
            switch ($[0]) {
                case 'list cursor': return _p.ss($, ($) => ['list cursor', _p.deprecated_block(() => {
                    return null
                })])
                case 'linked entry': return _p.ss($, ($) => ['linked entry', _p.deprecated_block(() => {
                    return null
                })])
                case 'sibling': return _p.ss($, ($) => ['sibling', _p.deprecated_block(() => {
                    return _i_generic.get_entry(
                        params['lookups']['sibling property resolvers'],
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    )
                })])
                case 'parent sibling': return _p.ss($, ($) => ['parent sibling', _p.deprecated_block(() => {
                    return _i_generic.get_entry(
                        params['lookups']['parent sibling property resolvers'],
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    )
                })])
                case 'option constraint': return _p.ss($, ($) => ['option constraint', _p.deprecated_block(() => {
                    const c_oc = params['values']['option constraints'].__decide(
                        ($) => $,
                        () => _p.fixme_abort('ABORT SELECTION')
                    )
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            c_oc,
                            null
                        ),
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    )
                })])
                case 'constraint': return _p.ss($, ($) => ['constraint', _p.deprecated_block(() => {
                    return _p.deprecated_cc($['state group'], ($): _i_out._T_Guaranteed_Value_Selection.start.SG.constraint => {
                        switch ($[0]) {
                            case 'component': return _p.ss($, ($) => ['component', _p.deprecated_block(() => {
                                return _p.deprecated_block(() => {
                                    const p_property: _i_out._T_Guaranteed_Value_Selection.start.SG.constraint.SG.component.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                        params['lookups']['sibling property resolvers'],
                                        {
                                            'reference': $,
                                            'location 2 string': l2s,
                                        }
                                    ))
                                    const p_constraint: _i_out._T_Guaranteed_Value_Selection.start.SG.constraint.SG.component.constraint = _p.deprecated_cc($['constraint'], ($) => _i_generic.get_entry(
                                        _i_generic.dictionary_to_lookup(
                                            _pdev.implement_me("marker tbd"),
                                            null
                                        ),
                                        {
                                            'reference': $,
                                            'location 2 string': l2s,
                                        }
                                    ))
                                    return ({
                                        'property': p_property,
                                        'constraint': p_constraint,
                                    })
                                })
                            })])
                            case 'reference': return _p.ss($, ($) => ['reference', _p.deprecated_block(() => {
                                return _p.deprecated_block(() => {
                                    const p_property: _i_out._T_Guaranteed_Value_Selection.start.SG.constraint.SG.reference.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                        params['lookups']['sibling property resolvers'],
                                        {
                                            'reference': $,
                                            'location 2 string': l2s,
                                        }
                                    ))
                                    const p_constraint: _i_out._T_Guaranteed_Value_Selection.start.SG.constraint.SG.reference.constraint = _p.deprecated_cc($['constraint'], ($) => _i_generic.get_entry(
                                        _i_generic.dictionary_to_lookup(
                                            _pdev.implement_me("marker tbd"),
                                            null
                                        ),
                                        {
                                            'reference': $,
                                            'location 2 string': l2s,
                                        }
                                    ))
                                    return ({
                                        'property': p_property,
                                        'constraint': p_constraint,
                                    })
                                })
                            })])
                            default: return _p.au($[0])
                        }
                    })
                })])
                case 'parameter': return _p.ss($, ($) => ['parameter', _p.deprecated_block(() => {
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            params['values']['signature']['resolved parameters']['values'],
                            null
                        ),
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    )
                })])
                case 'result': return _p.ss($, ($) => ['result', _p.deprecated_block(() => {
                    return _p.deprecated_cc($['state group'], ($): _i_out._T_Guaranteed_Value_Selection.start.SG.result => {
                        switch ($[0]) {
                            case 'list': return _p.ss($, ($) => ['list', _p.deprecated_block(() => {
                                return _p.deprecated_block(() => {
                                    const p_property: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.list.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                        params['lookups']['sibling property resolvers'],
                                        {
                                            'reference': $,
                                            'location 2 string': l2s,
                                        }
                                    ))
                                    const p_list_result: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.list.list_result = _p.deprecated_cc($['list result'], ($) => _pdev.implement_me("marker tbd"))
                                    return ({
                                        'property': p_property,
                                        'list result': p_list_result,
                                    })
                                })
                            })])
                            case 'state group': return _p.ss($, ($) => ['state group', _p.deprecated_block(() => {
                                return _p.deprecated_block(() => {
                                    const p_property: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.state_group.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                        params['lookups']['sibling property resolvers'],
                                        {
                                            'reference': $,
                                            'location 2 string': l2s,
                                        }
                                    ))
                                    const p_state_group: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.state_group.state_group = _p.deprecated_cc($['state group'], ($) => _pdev.implement_me("marker tbd"))
                                    const p_result: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.state_group.result = _p.deprecated_cc($['result'], ($) => r_Type_Reference(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'values': ({
                                                    'imports': params['values']['imports'],
                                                }),
                                                'lookups': ({
                                                    'types': _i_generic.dictionary_to_lookup(
                                                        params['values']['types']['dictionary'],
                                                        null
                                                    ),
                                                }),
                                            }),
                                        }
                                    ))
                                    return ({
                                        'property': p_property,
                                        'state group': p_state_group,
                                        'result': p_result,
                                    })
                                })
                            })])
                            case 'optional value': return _p.ss($, ($) => ['optional value', _p.deprecated_block(() => {
                                return _p.deprecated_block(() => {
                                    const p_property: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.optional_value.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                                        params['lookups']['sibling property resolvers'],
                                        {
                                            'reference': $,
                                            'location 2 string': l2s,
                                        }
                                    ))
                                    const p_optional_value: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.optional_value.optional_value = _p.deprecated_cc($['optional value'], ($) => _pdev.implement_me("marker tbd"))
                                    const p_result: _i_out._T_Guaranteed_Value_Selection.start.SG.result.SG.optional_value.result = _p.deprecated_cc($['result'], ($) => r_Type_Reference(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'values': ({
                                                    'imports': params['values']['imports'],
                                                }),
                                                'lookups': ({
                                                    'types': _i_generic.dictionary_to_lookup(
                                                        params['values']['types']['dictionary'],
                                                        null
                                                    ),
                                                }),
                                            }),
                                        }
                                    ))
                                    return ({
                                        'property': p_property,
                                        'optional value': p_optional_value,
                                        'result': p_result,
                                    })
                                })
                            })])
                            default: return _p.au($[0])
                        }
                    })
                })])
                default: return _p.au($[0])
            }
        }))
        const p_tail: _i_out._T_Guaranteed_Value_Selection.tail = _p.deprecated_cc($['tail'], ($) => r_Relative_Value_Selection(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': ({
                        'node': _pdev.implement_me("marker tbd"),
                    }),
                    'lookups': null,
                }),
            }
        ))
        const p_resulting_node: _i_out._T_Guaranteed_Value_Selection.resulting_node = _p.deprecated_cc($['resulting node'], ($) => p_tail['resulting node'])
        return ({
            'start': p_start,
            'tail': p_tail,
            'resulting node': p_resulting_node,
        })
    })
})
export const r_Lookup_Selection: _i_signatures._T_Lookup_Selection = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_type: _i_out._T_Lookup_Selection._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Lookup_Selection._type => {
            switch ($[0]) {
                case 'dictionary': return _p.ss($, ($) => ['dictionary', _p.deprecated_block(() => {
                    return _p.deprecated_block(() => {
                        const p_selection: _i_out._T_Lookup_Selection._type.SG.dictionary.selection = _p.deprecated_cc($['selection'], ($) => r_Guaranteed_Value_Selection(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': params['values'],
                                    'lookups': params['lookups'],
                                }),
                            }
                        ))
                        const p_selected_dictionary: _i_out._T_Lookup_Selection._type.SG.dictionary.selected_dictionary = _p.deprecated_cc($['selected dictionary'], ($) => _pdev.implement_me("marker tbd"))
                        return ({
                            'selection': p_selection,
                            'selected dictionary': p_selected_dictionary,
                        })
                    })
                })])
                case 'parameter': return _p.ss($, ($) => ['parameter', _p.deprecated_block(() => {
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            params['values']['signature']['resolved parameters']['lookups'],
                            null
                        ),
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    )
                })])
                case 'not circular dependent siblings': return _p.ss($, ($) => ['not circular dependent siblings', _p.deprecated_block(() => {
                    const c_cd = params['values']['current ordered dictionary'].__decide(
                        ($) => $,
                        () => _p.fixme_abort('ABORT SELECTION')
                    )
                    return c_cd
                })])
                case 'possibly circular dependent siblings': return _p.ss($, ($) => ['possibly circular dependent siblings', _p.deprecated_block(() => {
                    const c_cd = params['values']['current dictionary'].__decide(
                        ($) => $,
                        () => _p.fixme_abort('ABORT SELECTION')
                    )
                    return c_cd
                })])
                default: return _p.au($[0])
            }
        }))
        const p_resulting_dictionary: _i_out._T_Lookup_Selection.resulting_dictionary = _p.deprecated_cc($['resulting dictionary'], ($) => _pdev.implement_me("marker tbd"))
        return ({
            'type': p_type,
            'resulting dictionary': p_resulting_dictionary,
        })
    })
})
export const r_Resolvers: _i_signatures._T_Resolvers = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const benchmark = params['values']['signatures']
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    const linked_entry = _pdev.implement_me("marker tbd")
                    return _p.deprecated_cc($['value'], ($) => _p.deprecated_block(() => {
                        const p_signature: _i_out._T_Resolvers.D.signature = _p.deprecated_cc($['signature'], ($) => linked_entry)
                        const p_type_resolver: _i_out._T_Resolvers.D.type_resolver = _p.deprecated_cc($['type resolver'], ($) => r_Node_Resolver(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': ({
                                        'option constraints': _p.optional.not_set(),
                                        'list cursor': _p.optional.not_set(),
                                        'linked entry': _p.optional.not_set(),
                                        'current ordered dictionary': _p.optional.not_set(),
                                        'current dictionary': _p.optional.not_set(),
                                        'signature': p_signature,
                                        'definition': linked_entry['type']['node'],
                                        'signatures': params['values']['signatures'],
                                        'imports': _p.optional.set(params['values']['imports']),
                                        'types': params['values']['types'],
                                    }),
                                    'lookups': ({
                                        'sibling property resolvers': _p.optional.not_set(),
                                        'parent sibling property resolvers': _p.optional.not_set(),
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
                'location 2 string': l2s,
            }
        )
    })
})
export const r_Constraint: _i_signatures._T_Constraint = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_selection: _i_out._T_Constraint.selection = _p.deprecated_cc($['selection'], ($) => r_Relative_Value_Selection(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': params['values'],
                    'lookups': params['lookups'],
                }),
            }
        ))
        const p_type: _i_out._T_Constraint._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Constraint._type => {
            switch ($[0]) {
                case 'state': return _p.ss($, ($) => ['state', _p.deprecated_block(() => {
                    const c_state_group = _pdev.implement_me("marker tbd")
                    return _p.deprecated_block(() => {
                        const p_selected_state_group: _i_out._T_Constraint._type.SG.state.selected_state_group = _p.deprecated_cc($['selected state group'], ($) => c_state_group)
                        const p_state: _i_out._T_Constraint._type.SG.state.state = _p.deprecated_cc($['state'], ($) => _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(
                                p_selected_state_group,
                                null
                            ),
                            {
                                'reference': $,
                                'location 2 string': l2s,
                            }
                        ))
                        return ({
                            'selected state group': p_selected_state_group,
                            'state': p_state,
                        })
                    })
                })])
                case 'optional value': return _p.ss($, ($) => ['optional value', _p.deprecated_block(() => {
                    const c_optional = _pdev.implement_me("marker tbd")
                    return _p.deprecated_block(() => {
                        const p_selected_optional_value: _i_out._T_Constraint._type.SG.optional_value.selected_optional_value = _p.deprecated_cc($['selected optional value'], ($) => c_optional)
                        return ({
                            'selected optional value': p_selected_optional_value,
                        })
                    })
                })])
                default: return _p.au($[0])
            }
        }))
        return ({
            'selection': p_selection,
            'type': p_type,
        })
    })
})
export const r_Option_Constraints: _i_signatures._T_Option_Constraints = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    return _p.deprecated_cc($['value'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Option_Constraints.D => {
                        switch ($[0]) {
                            case 'state': return _p.ss($, ($) => ['state', _p.deprecated_block(() => {
                                return _p.deprecated_block(() => {
                                    const p_selection: _i_out._T_Option_Constraints.D.SG.state.selection = _p.deprecated_cc($['selection'], ($) => r_Guaranteed_Value_Selection(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'values': params['values'],
                                                'lookups': params['lookups'],
                                            }),
                                        }
                                    ))
                                    const p_selected_state_group: _i_out._T_Option_Constraints.D.SG.state.selected_state_group = _p.deprecated_cc($['selected state group'], ($) => _pdev.implement_me("marker tbd"))
                                    const p_state: _i_out._T_Option_Constraints.D.SG.state.state = _p.deprecated_cc($['state'], ($) => _i_generic.get_entry(
                                        _i_generic.dictionary_to_lookup(
                                            p_selected_state_group,
                                            null
                                        ),
                                        {
                                            'reference': $,
                                            'location 2 string': l2s,
                                        }
                                    ))
                                    return ({
                                        'selection': p_selection,
                                        'selected state group': p_selected_state_group,
                                        'state': p_state,
                                    })
                                })
                            })])
                            case 'assert is set': return _p.ss($, ($) => ['assert is set', _p.deprecated_block(() => {
                                return r_Possible_Value_Selection(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'values': params['values'],
                                            'lookups': params['lookups'],
                                        }),
                                    }
                                )
                            })])
                            default: return _p.au($[0])
                        }
                    }))
                }),
                'location 2 string': l2s,
            }
        )
    })
})
export const r_Property_Constraint: _i_signatures._T_Property_Constraint = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_start: _i_out._T_Property_Constraint.start = _p.deprecated_cc($['start'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Property_Constraint.start => {
            switch ($[0]) {
                case 'property': return _p.ss($, ($) => ['property', _p.deprecated_block(() => {
                    return null
                })])
                case 'sibling': return _p.ss($, ($) => ['sibling', _p.deprecated_block(() => {
                    return r_Reference_To_Property_Constraint(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': ({
                                    'property constraints': params['lookups']['property constraints'],
                                }),
                            }),
                        }
                    )
                })])
                default: return _p.au($[0])
            }
        }))
        const p_constraint: _i_out._T_Property_Constraint.constraint = _p.deprecated_cc($['constraint'], ($) => r_Constraint(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': ({
                        'node': _pdev.implement_me("marker tbd"),
                    }),
                    'lookups': null,
                }),
            }
        ))
        return ({
            'start': p_start,
            'constraint': p_constraint,
        })
    })
})
export const r_Property_Constraints: _i_signatures._T_Property_Constraints = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    return _p.deprecated_cc($['value'], ($) => r_Property_Constraint(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': ({
                                    'property constraints': $p['not circular dependent siblings'],
                                }),
                            }),
                        }
                    ))
                }),
                'location 2 string': l2s,
            }
        )
    })
})
export const r_Reference_To_Property_Constraint: _i_signatures._T_Reference_To_Property_Constraint = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _i_generic.get_entry(
        params['lookups']['property constraints'],
        {
            'reference': $,
            'location 2 string': l2s,
        }
    )
})
export const r_Node_Resolver_Group: _i_signatures._T_Node_Resolver_Group = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const benchmark = params['values']['definition']
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    const linked_entry = _pdev.implement_me("marker tbd")
                    return _p.deprecated_cc($['value'], ($) => _p.deprecated_block(() => {
                        const p_definition: _i_out._T_Node_Resolver_Group.D.definition = _p.deprecated_cc($['definition'], ($) => linked_entry)
                        const p_resolver: _i_out._T_Node_Resolver_Group.D.resolver = _p.deprecated_cc($['resolver'], ($) => r_Node_Resolver(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': ({
                                        'definition': linked_entry['node'],
                                        'types': params['values']['types'],
                                        'imports': params['values']['imports'],
                                        'signature': params['values']['signature'],
                                        'signatures': params['values']['signatures'],
                                        'list cursor': params['values']['list cursor'],
                                        'linked entry': params['values']['linked entry'],
                                        'current dictionary': params['values']['current dictionary'],
                                        'option constraints': params['values']['option constraints'],
                                        'current ordered dictionary': params['values']['current ordered dictionary'],
                                    }),
                                    'lookups': ({
                                        'sibling property resolvers': $p['not circular dependent siblings'],
                                        'parent sibling property resolvers': params['lookups']['sibling property resolvers'],
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
                'location 2 string': l2s,
            }
        )
    })
})
export const r_Node_Resolver_List_Result: _i_signatures._T_Node_Resolver_List_Result = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return r_Type_Reference(
        $,
        {
            'location 2 string': l2s,
            'parameters': ({
                'values': ({
                    'imports': params['values']['imports'],
                }),
                'lookups': ({
                    'types': params['lookups']['types'],
                }),
            }),
        }
    )
})
export const r_Benchmark: _i_signatures._T_Benchmark = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_selection: _i_out._T_Benchmark.selection = _p.deprecated_cc($['selection'], ($) => r_Guaranteed_Value_Selection(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': params['values'],
                    'lookups': params['lookups'],
                }),
            }
        ))
        const p_resulting_dictionary: _i_out._T_Benchmark.resulting_dictionary = _p.deprecated_cc($['resulting dictionary'], ($) => _pdev.implement_me("marker tbd"))
        const p_dense: _i_out._T_Benchmark.dense = _p.deprecated_cc($['dense'], ($) => $)
        return ({
            'selection': p_selection,
            'resulting dictionary': p_resulting_dictionary,
            'dense': p_dense,
        })
    })
})
export const r_Node_Resolver: _i_signatures._T_Node_Resolver = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_cc($['state group'], ($): _i_out._T_Node_Resolver => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => ['boolean', _p.deprecated_block(() => {
                const c_definition = _pdev.implement_me("marker tbd")
                return null
            })])
            case 'component': return _p.ss($, ($) => ['component', _p.deprecated_block(() => {
                const c_definition = _pdev.implement_me("marker tbd")
                return _p.deprecated_block(() => {
                    const p_location: _i_out._T_Node_Resolver.SG.component.location = _p.deprecated_cc($['location'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Node_Resolver.SG.component.location => {
                        switch ($[0]) {
                            case 'external': return _p.ss($, ($) => ['external', _p.deprecated_block(() => {
                                const c_import = params['values']['imports'].__decide(
                                    ($) => $,
                                    () => _p.fixme_abort('ABORT SELECTION')
                                )
                                return _p.deprecated_block(() => {
                                    const p_import: _i_out._T_Node_Resolver.SG.component.location.SG.external._import = _p.deprecated_cc($['import'], ($) => _i_generic.get_entry(
                                        _i_generic.dictionary_to_lookup(
                                            c_import,
                                            null
                                        ),
                                        {
                                            'reference': $,
                                            'location 2 string': l2s,
                                        }
                                    ))
                                    const p_type: _i_out._T_Node_Resolver.SG.component.location.SG.external._type = _p.deprecated_cc($['type'], ($) => _i_generic.get_entry(
                                        _i_generic.dictionary_to_lookup(
                                            _pdev.implement_me("marker tbd"),
                                            null
                                        ),
                                        {
                                            'reference': $,
                                            'location 2 string': l2s,
                                        }
                                    ))
                                    return ({
                                        'import': p_import,
                                        'type': p_type,
                                    })
                                })
                            })])
                            case 'internal': return _p.ss($, ($) => ['internal', _p.deprecated_block(() => {
                                return _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        params['values']['signatures']['dictionary'],
                                        null
                                    ),
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                )
                            })])
                            default: return _p.au($[0])
                        }
                    }))
                    const p_signature: _i_out._T_Node_Resolver.SG.component.signature = _p.deprecated_cc($['signature'], ($) => _pdev.implement_me("marker tbd"))
                    const p_arguments: _i_out._T_Node_Resolver.SG.component._arguments = _p.deprecated_cc($['arguments'], ($) => $.__o_map(($) => _p.deprecated_block(() => {
                        return _p.deprecated_block(() => {
                            const p_values: _i_out._T_Node_Resolver.SG.component._arguments.O.values = _p.deprecated_cc($['values'], ($) => $.__o_map(($) => _p.deprecated_block(() => {
                                return _p.deprecated_block(() => {
                                    const benchmark = p_signature['resolved parameters']['values']
                                    return _i_generic.resolve_dictionary(
                                        $,
                                        {
                                            'map': ($, $p) => _p.deprecated_block(() => {
                                                const linked_entry = _pdev.implement_me("marker tbd")
                                                return _p.deprecated_cc($['value'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Node_Resolver.SG.component._arguments.O.values.O.D => {
                                                    switch ($[0]) {
                                                        case 'optional': return _p.ss($, ($) => ['optional', _p.deprecated_block(() => {
                                                            return r_Optional_Value_Initialization(
                                                                $,
                                                                {
                                                                    'location 2 string': l2s,
                                                                    'parameters': ({
                                                                        'values': params['values'],
                                                                        'lookups': params['lookups'],
                                                                    }),
                                                                }
                                                            )
                                                        })])
                                                        case 'required': return _p.ss($, ($) => ['required', _p.deprecated_block(() => {
                                                            return r_Guaranteed_Value_Selection(
                                                                $,
                                                                {
                                                                    'location 2 string': l2s,
                                                                    'parameters': ({
                                                                        'values': params['values'],
                                                                        'lookups': params['lookups'],
                                                                    }),
                                                                }
                                                            )
                                                        })])
                                                        case 'parameter': return _p.ss($, ($) => ['parameter', _p.deprecated_block(() => {
                                                            return _i_generic.get_entry(
                                                                _i_generic.dictionary_to_lookup(
                                                                    params['values']['signature']['resolved parameters']['values'],
                                                                    null
                                                                ),
                                                                {
                                                                    'reference': $,
                                                                    'location 2 string': l2s,
                                                                }
                                                            )
                                                        })])
                                                        default: return _p.au($[0])
                                                    }
                                                }))
                                            }),
                                            'location 2 string': l2s,
                                        }
                                    )
                                })
                            })))
                            const p_lookups: _i_out._T_Node_Resolver.SG.component._arguments.O.lookups = _p.deprecated_cc($['lookups'], ($) => $.__o_map(($) => _p.deprecated_block(() => {
                                return _p.deprecated_block(() => {
                                    const benchmark = p_signature['resolved parameters']['lookups']
                                    return _i_generic.resolve_dictionary(
                                        $,
                                        {
                                            'map': ($, $p) => _p.deprecated_block(() => {
                                                const linked_entry = _pdev.implement_me("marker tbd")
                                                return _p.deprecated_cc($['value'], ($) => _p.deprecated_cc(
                                                    $['state group'], ($): _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D => {
                                                        switch ($[0]) {
                                                            case 'empty stack': return _p.ss($, ($) => ['empty stack', _p.deprecated_block(() => {
                                                                return null
                                                            })])
                                                            case 'not set': return _p.ss($, ($) => ['not set', _p.deprecated_block(() => {
                                                                return null
                                                            })])
                                                            case 'selection': return _p.ss($, ($) => ['selection', _p.deprecated_block(() => {
                                                                return r_Lookup_Selection(
                                                                    $,
                                                                    {
                                                                        'location 2 string': l2s,
                                                                        'parameters': ({
                                                                            'values': params['values'],
                                                                            'lookups': params['lookups'],
                                                                        }),
                                                                    }
                                                                )
                                                            })])
                                                            case 'stack': return _p.ss($, ($) => ['stack', _p.deprecated_block(() => {
                                                                return _p.deprecated_block(() => {
                                                                    const p_stack: _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D.SG.stack.stack = _p.deprecated_cc(
                                                                        $['stack'], ($) => r_Lookup_Selection(
                                                                            $,
                                                                            {
                                                                                'location 2 string': l2s,
                                                                                'parameters': ({
                                                                                    'values': params['values'],
                                                                                    'lookups': params['lookups'],
                                                                                }),
                                                                            }
                                                                        )
                                                                    )
                                                                    const p_element: _i_out._T_Node_Resolver.SG.component._arguments.O.lookups.O.D.SG.stack.element = _p.deprecated_cc(
                                                                        $['element'], ($) => r_Lookup_Selection(
                                                                            $,
                                                                            {
                                                                                'location 2 string': l2s,
                                                                                'parameters': ({
                                                                                    'values': params['values'],
                                                                                    'lookups': params['lookups'],
                                                                                }),
                                                                            }
                                                                        )
                                                                    )
                                                                    return ({
                                                                        'stack': p_stack,
                                                                        'element': p_element,
                                                                    })
                                                                })
                                                            })])
                                                            default: return _p.au($[0])
                                                        }
                                                    }))
                                            }),
                                            'location 2 string': l2s,
                                        }
                                    )
                                })
                            })))
                            return ({
                                'values': p_values,
                                'lookups': p_lookups,
                            })
                        })
                    })))
                    const p_constraints: _i_out._T_Node_Resolver.SG.component.constraints = _p.deprecated_cc($['constraints'], ($) => r_Property_Constraints(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': ({
                                    'node': p_signature['type']['node'],
                                }),
                                'lookups': null,
                            }),
                        }
                    ))
                    return ({
                        'location': p_location,
                        'signature': p_signature,
                        'arguments': p_arguments,
                        'constraints': p_constraints,
                    })
                })
            })])
            case 'dictionary': return _p.ss($, ($) => ['dictionary', _p.deprecated_block(() => {
                const c_definition = _pdev.implement_me("marker tbd")
                return _p.deprecated_block(() => {
                    const p_definition: _i_out._T_Node_Resolver.SG.dictionary.definition = _p.deprecated_cc($['definition'], ($) => c_definition)
                    const p_benchmark: _i_out._T_Node_Resolver.SG.dictionary.benchmark = _p.deprecated_cc($['benchmark'], ($) => $.__o_map(($) => _p.deprecated_block(() => {
                        return r_Benchmark(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': params['values'],
                                    'lookups': params['lookups'],
                                }),
                            }
                        )
                    })))
                    const p_resolver: _i_out._T_Node_Resolver.SG.dictionary.resolver = _p.deprecated_cc($['resolver'], ($) => r_Node_Resolver(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': ({
                                    'linked entry': _pdev.implement_me("marker tbd"),
                                    'definition': p_definition['node'],
                                    'current dictionary': _p.optional.set(p_definition),
                                    'current ordered dictionary': _p.optional.set(p_definition),
                                    'types': params['values']['types'],
                                    'imports': params['values']['imports'],
                                    'signature': params['values']['signature'],
                                    'signatures': params['values']['signatures'],
                                    'list cursor': params['values']['list cursor'],
                                    'option constraints': params['values']['option constraints'],
                                }),
                                'lookups': params['lookups'],
                            }),
                        }
                    ))
                    return ({
                        'definition': p_definition,
                        'benchmark': p_benchmark,
                        'resolver': p_resolver,
                    })
                })
            })])
            case 'group': return _p.ss($, ($) => ['group', _p.deprecated_block(() => {
                const c_definition = _pdev.implement_me("marker tbd")
                return r_Node_Resolver_Group(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'values': ({
                                'definition': c_definition,
                                'types': params['values']['types'],
                                'imports': params['values']['imports'],
                                'signature': params['values']['signature'],
                                'signatures': params['values']['signatures'],
                                'list cursor': params['values']['list cursor'],
                                'linked entry': params['values']['linked entry'],
                                'current dictionary': params['values']['current dictionary'],
                                'option constraints': params['values']['option constraints'],
                                'current ordered dictionary': params['values']['current ordered dictionary'],
                            }),
                            'lookups': ({
                                'sibling property resolvers': params['lookups']['sibling property resolvers'],
                                'parent sibling property resolvers': params['lookups']['sibling property resolvers'],
                            }),
                        }),
                    }
                )
            })])
            case 'list': return _p.ss($, ($) => ['list', _p.deprecated_block(() => {
                const c_definition = _pdev.implement_me("marker tbd")
                return _p.deprecated_block(() => {
                    const p_definition: _i_out._T_Node_Resolver.SG.list.definition = _p.deprecated_cc($['definition'], ($) => c_definition)
                    const p_result: _i_out._T_Node_Resolver.SG.list.result = _p.deprecated_cc($['result'], ($) => $.__o_map(($) => _p.deprecated_block(() => {
                        return r_Node_Resolver_List_Result(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': ({
                                        'imports': params['values']['imports'],
                                    }),
                                    'lookups': ({
                                        'types': _i_generic.dictionary_to_lookup(
                                            params['values']['types']['dictionary'],
                                            null
                                        ),
                                    }),
                                }),
                            }
                        )
                    })))
                    const p_resolver: _i_out._T_Node_Resolver.SG.list.resolver = _p.deprecated_cc($['resolver'], ($) => r_Node_Resolver(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': ({
                                    'list cursor': _p.optional.set(_pdev.implement_me("marker tbd")),
                                    'definition': c_definition['node'],
                                    'types': params['values']['types'],
                                    'imports': params['values']['imports'],
                                    'signature': params['values']['signature'],
                                    'signatures': params['values']['signatures'],
                                    'linked entry': params['values']['linked entry'],
                                    'current dictionary': params['values']['current dictionary'],
                                    'option constraints': params['values']['option constraints'],
                                    'current ordered dictionary': params['values']['current ordered dictionary'],
                                }),
                                'lookups': params['lookups'],
                            }),
                        }
                    ))
                    return ({
                        'definition': p_definition,
                        'result': p_result,
                        'resolver': p_resolver,
                    })
                })
            })])
            case 'nothing': return _p.ss($, ($) => ['nothing', _p.deprecated_block(() => {
                const c_definition = _pdev.implement_me("marker tbd")
                return null
            })])
            case 'number': return _p.ss($, ($) => ['number', _p.deprecated_block(() => {
                const c_definition = _pdev.implement_me("marker tbd")
                return null
            })])
            case 'optional': return _p.ss($, ($) => ['optional', _p.deprecated_block(() => {
                const c_definition = _pdev.implement_me("marker tbd")
                return _p.deprecated_block(() => {
                    const p_constraints: _i_out._T_Node_Resolver.SG.optional.constraints = _p.deprecated_cc($['constraints'], ($) => r_Option_Constraints(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': params['values'],
                                'lookups': params['lookups'],
                            }),
                        }
                    ))
                    const p_resolver: _i_out._T_Node_Resolver.SG.optional.resolver = _p.deprecated_cc($['resolver'], ($) => r_Node_Resolver(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': ({
                                    'definition': c_definition,
                                    'types': params['values']['types'],
                                    'imports': params['values']['imports'],
                                    'signature': params['values']['signature'],
                                    'signatures': params['values']['signatures'],
                                    'list cursor': params['values']['list cursor'],
                                    'linked entry': params['values']['linked entry'],
                                    'current dictionary': params['values']['current dictionary'],
                                    'option constraints': params['values']['option constraints'],
                                    'current ordered dictionary': params['values']['current ordered dictionary'],
                                }),
                                'lookups': params['lookups'],
                            }),
                        }
                    ))
                    return ({
                        'constraints': p_constraints,
                        'resolver': p_resolver,
                    })
                })
            })])
            case 'reference': return _p.ss($, ($) => ['reference', _p.deprecated_block(() => {
                const c_definition = _pdev.implement_me("marker tbd")
                return _p.deprecated_block(() => {
                    const p_definition: _i_out._T_Node_Resolver.SG.reference.definition = _p.deprecated_cc($['definition'], ($) => c_definition)
                    const p_type: _i_out._T_Node_Resolver.SG.reference._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Node_Resolver.SG.reference._type => {
                        switch ($[0]) {
                            case 'derived': return _p.ss($, ($) => ['derived', _p.deprecated_block(() => {
                                const c_definition = _pdev.implement_me("marker tbd")
                                return _p.deprecated_block(() => {
                                    const p_value: _i_out._T_Node_Resolver.SG.reference._type.SG.derived.value = _p.deprecated_cc($['value'], ($) => r_Guaranteed_Value_Selection(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'values': params['values'],
                                                'lookups': params['lookups'],
                                            }),
                                        }
                                    ))
                                    return ({
                                        'value': p_value,
                                    })
                                })
                            })])
                            case 'selected': return _p.ss($, ($) => ['selected', _p.deprecated_block(() => {
                                const c_definition = _pdev.implement_me("marker tbd")
                                return _p.deprecated_block(() => {
                                    const p_definition: _i_out._T_Node_Resolver.SG.reference._type.SG.selected.definition = _p.deprecated_cc($['definition'], ($) => c_definition)
                                    const p_lookup: _i_out._T_Node_Resolver.SG.reference._type.SG.selected.lookup = _p.deprecated_cc($['lookup'], ($) => r_Lookup_Selection(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'values': params['values'],
                                                'lookups': params['lookups'],
                                            }),
                                        }
                                    ))
                                    const p_constraints: _i_out._T_Node_Resolver.SG.reference._type.SG.selected.constraints = _p.deprecated_cc($['constraints'], ($) => r_Property_Constraints(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'values': ({
                                                    'node': p_lookup['resulting dictionary']['node'],
                                                }),
                                                'lookups': null,
                                            }),
                                        }
                                    ))
                                    return ({
                                        'definition': p_definition,
                                        'lookup': p_lookup,
                                        'constraints': p_constraints,
                                    })
                                })
                            })])
                            default: return _p.au($[0])
                        }
                    }))
                    return ({
                        'definition': p_definition,
                        'type': p_type,
                    })
                })
            })])
            case 'state group': return _p.ss($, ($) => ['state group', _p.deprecated_block(() => {
                const c_definition = _pdev.implement_me("marker tbd")
                return _p.deprecated_block(() => {
                    const p_definition: _i_out._T_Node_Resolver.SG.state_group.definition = _p.deprecated_cc($['definition'], ($) => c_definition)
                    const p_states: _i_out._T_Node_Resolver.SG.state_group.states = _p.deprecated_cc($['states'], ($) => _p.deprecated_block(() => {
                        const benchmark = c_definition
                        return _i_generic.resolve_dictionary(
                            $,
                            {
                                'map': ($, $p) => _p.deprecated_block(() => {
                                    const linked_entry = _pdev.implement_me("marker tbd")
                                    return _p.deprecated_cc($['value'], ($) => _p.deprecated_block(() => {
                                        const p_constraints: _i_out._T_Node_Resolver.SG.state_group.states.D.constraints = _p.deprecated_cc($['constraints'], ($) => r_Option_Constraints(
                                            $,
                                            {
                                                'location 2 string': l2s,
                                                'parameters': ({
                                                    'values': params['values'],
                                                    'lookups': params['lookups'],
                                                }),
                                            }
                                        ))
                                        const p_resolver: _i_out._T_Node_Resolver.SG.state_group.states.D.resolver = _p.deprecated_cc($['resolver'], ($) => r_Node_Resolver(
                                            $,
                                            {
                                                'location 2 string': l2s,
                                                'parameters': ({
                                                    'values': ({
                                                        'definition': linked_entry['node'],
                                                        'types': params['values']['types'],
                                                        'imports': params['values']['imports'],
                                                        'signature': params['values']['signature'],
                                                        'signatures': params['values']['signatures'],
                                                        'list cursor': params['values']['list cursor'],
                                                        'linked entry': params['values']['linked entry'],
                                                        'current dictionary': params['values']['current dictionary'],
                                                        'option constraints': params['values']['option constraints'],
                                                        'current ordered dictionary': params['values']['current ordered dictionary'],
                                                    }),
                                                    'lookups': params['lookups'],
                                                }),
                                            }
                                        ))
                                        return ({
                                            'constraints': p_constraints,
                                            'resolver': p_resolver,
                                        })
                                    }))
                                }),
                                'location 2 string': l2s,
                            }
                        )
                    }))
                    return ({
                        'definition': p_definition,
                        'states': p_states,
                    })
                })
            })])
            case 'text': return _p.ss($, ($) => ['text', _p.deprecated_block(() => {
                const c_definition = _pdev.implement_me("marker tbd")
                return null
            })])
            default: return _p.au($[0])
        }
    })
})
export const r_Resolve_Logic: _i_signatures._T_Resolve_Logic = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_signatures: _i_out._T_Resolve_Logic.signatures = _p.deprecated_cc($['signatures'], ($) => _p.deprecated_block(() => {
            const p_types: _i_out._T_Resolve_Logic.signatures.types = _p.deprecated_cc($['types'], ($) => r_Signatures(
                $,
                {
                    'location 2 string': l2s,
                    'parameters': ({
                        'values': ({
                            'types': params['values']['types'],
                            'imports': params['values']['imports'],
                        }),
                        'lookups': null,
                    }),
                }
            ))
            return ({
                'types': p_types,
            })
        }))
        const p_resolvers: _i_out._T_Resolve_Logic.resolvers = _p.deprecated_cc($['resolvers'], ($) => r_Resolvers(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': ({
                        'signatures': p_signatures['types'],
                        'types': params['values']['types'],
                        'imports': params['values']['imports'],
                    }),
                    'lookups': null,
                }),
            }
        ))
        return ({
            'signatures': p_signatures,
            'resolvers': p_resolvers,
        })
    })
})
export const r_Schemas: _i_signatures._T_Schemas = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    return _p.deprecated_cc($['value'], ($) => r_Schema_Tree(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': ({
                                    'sibling schemas': _pdev.implement_me("marker tbd"),
                                }),
                            }),
                        }
                    ))
                }),
                'location 2 string': l2s,
            }
        )
    })
})
export const r_Type_Specification: _i_signatures._T_Type_Specification = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_schema: _i_out._T_Type_Specification.schema = _p.deprecated_cc($['schema'], ($) => r_Schema_Tree(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': null,
                    'lookups': ({
                        'sibling schemas': _p.list.literal([
                        ]),
                    }),
                }),
            }
        ))
        const p_schema_path: _i_out._T_Type_Specification.schema_path = _p.deprecated_cc($['schema path'], ($) => $['list'].map(($) => _p.deprecated_cc($['element'], ($) => $)))
        const p_type: _i_out._T_Type_Specification._type = _p.deprecated_cc($['type'], ($) => $)
        return ({
            'schema': p_schema,
            'schema path': p_schema_path,
            'type': p_type,
        })
    })
})
export const r_Schema_Tree: _i_signatures._T_Schema_Tree = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_cc($['state group'], ($): _i_out._T_Schema_Tree => {
        switch ($[0]) {
            case 'schema': return _p.ss($, ($) => ['schema', _p.deprecated_block(() => {
                return r_Schema(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'values': null,
                            'lookups': ({
                                'sibling schemas': params['lookups']['sibling schemas'],
                            }),
                        }),
                    }
                )
            })])
            case 'set': return _p.ss($, ($) => ['set', _p.deprecated_block(() => {
                return r_Schemas(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'values': null,
                            'lookups': ({
                                'sibling schemas': params['lookups']['sibling schemas'],
                            }),
                        }),
                    }
                )
            })])
            default: return _p.au($[0])
        }
    })
})
export const r_Schema: _i_signatures._T_Schema = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_imports: _i_out._T_Schema.imports = _p.deprecated_cc($['imports'], ($) => r_Imports(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': null,
                    'lookups': ({
                        'sibling schemas': params['lookups']['sibling schemas'],
                    }),
                }),
            }
        ))
        const p_globals: _i_out._T_Schema.globals = _p.deprecated_cc($['globals'], ($) => r_Globals(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': null,
                    'lookups': null,
                }),
            }
        ))
        const p_types: _i_out._T_Schema.types = _p.deprecated_cc($['types'], ($) => r_Types(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': ({
                        'globals': _p.optional.set(p_globals),
                        'imports': _p.optional.set(p_imports),
                    }),
                    'lookups': null,
                }),
            }
        ))
        const p_complexity: _i_out._T_Schema.complexity = _p.deprecated_cc($['complexity'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Schema.complexity => {
            switch ($[0]) {
                case 'constrained': return _p.ss($, ($) => ['constrained', _p.deprecated_block(() => {
                    return r_Resolve_Logic(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': ({
                                    'imports': p_imports,
                                    'types': p_types,
                                }),
                                'lookups': null,
                            }),
                        }
                    )
                })])
                case 'unconstrained': return _p.ss($, ($) => ['unconstrained', _p.deprecated_block(() => {
                    return null
                })])
                default: return _p.au($[0])
            }
        }))
        return ({
            'imports': p_imports,
            'globals': p_globals,
            'types': p_types,
            'complexity': p_complexity,
        })
    })
})
export const r_Imports: _i_signatures._T_Imports = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    return _p.deprecated_cc($['value'], ($) => _p.deprecated_block(() => {
                        const p_schema_set_child: _i_out._T_Imports.D.schema_set_child = _p.deprecated_cc($['schema set child'], ($) => _i_generic.get_entry_from_stack(
                            params['lookups']['sibling schemas'],
                            {
                                'reference': $,
                                'location 2 string': l2s,
                            }
                        ))
                        const p_schema: _i_out._T_Imports.D.schema = _p.deprecated_cc($['schema'], ($) => _pdev.implement_me("marker tbd"))
                        return ({
                            'schema set child': p_schema_set_child,
                            'schema': p_schema,
                        })
                    }))
                }),
                'location 2 string': l2s,
            }
        )
    })
})
