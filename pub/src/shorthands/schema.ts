import * as _pi from 'pareto-core-interface'

import * as _psh from 'pareto-core-shorthands/dist/unresolved_data'


import * as unresolved from "../interface/generated/pareto/schemas/schema/data_types/target"

/**
 * schema tree
 */
export namespace st {

    export const set = (
        schemas: _psh.Raw_Or_Normal_Dictionary<unresolved.Schema_Tree<_pi.Deprecated_Source_Location>>,
    ): unresolved.Schema_Tree<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['set', _psh.wrap_dictionary(schemas)])
    }

    export const schema = (
        schema: unresolved.Schema<_pi.Deprecated_Source_Location>,
    ): unresolved.Schema_Tree<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['schema', schema])
    }

}

export const types = (
    types: _psh.Raw_Or_Normal_Dictionary<unresolved.Types.D<_pi.Deprecated_Source_Location>>,
): unresolved.Types<_pi.Deprecated_Source_Location> => {
    return _psh.wrap_dictionary(types)
}

export const globals = (
    complexity: 'unconstrained' | 'constrained',
    text_types: _psh.Raw_Or_Normal_Dictionary<unresolved.Globals.text_types.D<_pi.Deprecated_Source_Location>>,
    number_types: _psh.Raw_Or_Normal_Dictionary<unresolved.Globals.number_types.D<_pi.Deprecated_Source_Location>>,
): unresolved.Globals<_pi.Deprecated_Source_Location> => {
    return {
        'complexity': complexity === 'unconstrained'
            ? _psh.wrap_state_group(['unconstrained', null])
            : _psh.wrap_state_group(['constrained', null]),
        'text types': _psh.wrap_dictionary(text_types),
        'number types': _psh.wrap_dictionary(number_types),
    }
}

export const type = (type: unresolved.Type_Node<_pi.Deprecated_Source_Location>): unresolved.Types.D<_pi.Deprecated_Source_Location> => {
    return {
        'type parameters': _psh.wrap_dictionary({}),
        'node': type,
    }
}

export const text = (type: 'single line' | 'multi line'): unresolved.Text_Type<_pi.Deprecated_Source_Location> => {
    return {
        'type': type === 'single line' ? _psh.wrap_state_group(['single line', null]) : _psh.wrap_state_group(['multi line', null]),
    }
}

export const prop = (
    node: unresolved.Type_Node<_pi.Deprecated_Source_Location>,
): unresolved.Group.D<_pi.Deprecated_Source_Location> => {
    return {
        'description': _psh.not_set(),
        'node': node,
    }
}

export const tstate = (
    node: unresolved.Type_Node<_pi.Deprecated_Source_Location>,
): unresolved.Type_Node.SG.state_group.D<_pi.Deprecated_Source_Location> => {
    return {
        'description': _psh.not_set(),
        'node': node,
    }
}

export const tstated = (
    description: string,
    node: unresolved.Type_Node<_pi.Deprecated_Source_Location>,
): unresolved.Type_Node.SG.state_group.D<_pi.Deprecated_Source_Location> => {
    return {
        'description': _psh.set(description),
        'node': node,
    }
}

export const propd = (
    description: string,
    node: unresolved.Type_Node<_pi.Deprecated_Source_Location>,
): unresolved.Group.D<_pi.Deprecated_Source_Location> => {
    return {
        'description': _psh.set(description),
        'node': node,
    }
}

/**
 * number type
 */
export namespace n {

    export const integer = (decimal_separator_offset?: number): unresolved.Number_Type<_pi.Deprecated_Source_Location> => {
        return {
            'precision': _psh.wrap_state_group<unresolved.Number_Type.precision.SG<_pi.Deprecated_Source_Location>>(['exact', {
                'decimal separator offset': decimal_separator_offset === undefined ? _psh.not_set() : _psh.set(decimal_separator_offset),
                'type': _psh.wrap_state_group(['integer', null]),
            }])
        }
    }
    export const approximation = (significant_digits: number): unresolved.Number_Type<_pi.Deprecated_Source_Location> => {
        return {
            'precision': _psh.wrap_state_group<unresolved.Number_Type.precision.SG<_pi.Deprecated_Source_Location>>(['approximation', {
                'significant digits': significant_digits,
            }])
        }
    }
    export const natural = (decimal_separator_offset?: number): unresolved.Number_Type<_pi.Deprecated_Source_Location> => {
        return {
            'precision': _psh.wrap_state_group<unresolved.Number_Type.precision.SG<_pi.Deprecated_Source_Location>>(['exact', {
                'decimal separator offset': decimal_separator_offset === undefined ? _psh.not_set() : _psh.set(decimal_separator_offset),
                'type': _psh.wrap_state_group(['natural', null]),
            }])
        }
    }
    export const positive_natural = (decimal_separator_offset?: number): unresolved.Number_Type<_pi.Deprecated_Source_Location> => {
        return {
            'precision': _psh.wrap_state_group<unresolved.Number_Type.precision.SG<_pi.Deprecated_Source_Location>>(['exact', {
                'decimal separator offset': decimal_separator_offset === undefined ? _psh.not_set() : _psh.set(decimal_separator_offset),
                'type': _psh.wrap_state_group(['positive natural', null]),
            }])
        }
    }

}

export const reference = (
    type: string,
): unresolved.Type_Reference<_pi.Deprecated_Source_Location> => {
    return {
        'location': _psh.wrap_state_group(['internal', _psh.wrap_reference(type)]),
        'resulting node': null,
    }
}

export const part_reference = (
    type: string,
    tail: unresolved.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location>[],

): unresolved.Type_Node_Reference<_pi.Deprecated_Source_Location> => {
    return {
        'type location': {
            'location': _psh.wrap_state_group(['internal', _psh.wrap_reference(type)]),
            'resulting node': null,
        },
        'tail': _psh.wrap_list(tail),
        'resulting node': null,
    }
}

/**
 * type node
 */
export namespace t {

    export const boolean = (): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['boolean', null])
    }
    export const component = (type: string): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['component', _psh.wrap_state_group(['internal', _psh.wrap_reference(type)])])
    }
    export const component_cyclic = (type: string): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['component', _psh.wrap_state_group(['internal cyclic', _psh.wrap_reference(type)])])
    }
    export const component_external = (imp: string, type: string): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['component', _psh.wrap_state_group(['external', {
            'import': _psh.wrap_reference(imp),
            'type': _psh.wrap_reference(type),
        }])])
    }
    export const dictionary = (type: unresolved.Type_Node<_pi.Deprecated_Source_Location>, ordered?: 'ordered' | ''): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['dictionary', {
            'node': type,
            'ordered': ordered === 'ordered',
            'benchmark': _psh.not_set(),
        }])
    }
    export const group = (properties: _psh.Raw_Or_Normal_Dictionary<unresolved.Group.D<_pi.Deprecated_Source_Location>>): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['group', _psh.wrap_dictionary(properties)])
    }
    export const list = (type: unresolved.Type_Node<_pi.Deprecated_Source_Location>): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['list', {
            'node': type,
            'result': _psh.not_set(),
        }])
    }
    export const nothing = (): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['nothing', null])
    }
    export const number_global = (name: string): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['number', _psh.wrap_state_group(['global', _psh.wrap_reference(name)])])
    }
    export const number_local = (bt: unresolved.Number_Type<_pi.Deprecated_Source_Location>): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['number', _psh.wrap_state_group(['local', bt])])
    }
    export const optional = (type: unresolved.Type_Node<_pi.Deprecated_Source_Location>): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['optional', type])
    }
    export const reference_derived = (
        type: string,
        tail: unresolved.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        const x: unresolved.Type_Node_Reference<_pi.Deprecated_Source_Location> = {
            'type location': {
                'location': _psh.wrap_state_group(['internal', _psh.wrap_reference(type)]),
                'resulting node': null,
            },
            'tail': _psh.wrap_list(tail),
            'resulting node': null
        }
        return _psh.wrap_state_group(['reference', {
            'referent': x,
            'type': _psh.wrap_state_group(['derived', null]),
        }])
    }
    export const reference_derived_external = (
        imp: string,
        type: string,
        tail: unresolved.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location>[],

    ): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        const x: unresolved.Type_Node_Reference<_pi.Deprecated_Source_Location> = {
            'type location': {
                'location': _psh.wrap_state_group(['external', {
                    'import': _psh.wrap_reference(imp),
                    'type': _psh.wrap_reference(type),
                }]),
                'resulting node': null
            },
            'tail': _psh.wrap_list(tail),
            'resulting node': null
        }

        return _psh.wrap_state_group(['reference', {
            'referent': x,
            'type': _psh.wrap_state_group(['derived', null]),
        }])
    }

    export const reference = (
        type: string,
        tail: unresolved.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location>[],
        dependency?: "cyclic" | "acyclic",
    ): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {

        const p_type: unresolved.Type_Node.SG.reference._type<_pi.Deprecated_Source_Location> = _psh.wrap_state_group(['selected', {
            'referent': {
                'type location': {
                    'location': _psh.wrap_state_group(['internal', _psh.wrap_reference(type)]),
                    'resulting node': null
                },
                'tail': _psh.wrap_list(tail),
                'resulting node': null
            },
            'dictionary': null,
            'dependency': dependency === "cyclic" ? _psh.wrap_state_group(['cyclic', null]) : _psh.wrap_state_group(['acyclic', null])
        }])
        return _psh.wrap_state_group(['reference', {
            'referent': {
                'type location': {
                    'location': _psh.wrap_state_group(['internal', _psh.wrap_reference(type)]),
                    'resulting node': null
                },
                'tail': _psh.wrap_list(tail),
                'resulting node': null
            },
            'type': p_type,
        }])
    }

    export const reference_stack = (
        type: string,
        tail: unresolved.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {

        const p_type: unresolved.Type_Node.SG.reference._type<_pi.Deprecated_Source_Location> = _psh.wrap_state_group(['selected', {
            'dictionary': null,
            'dependency': _psh.wrap_state_group(['stack', null])
        }])
        return _psh.wrap_state_group(['reference', {
            'referent': {
                'type location': {
                    'location': _psh.wrap_state_group(['internal', _psh.wrap_reference(type)]),
                    'resulting node': null
                },
                'tail': _psh.wrap_list(tail),
                'resulting node': null
            },
            'type': p_type,
        }])
    }

    export const reference_external = (
        schema: string,

        type: string,
        tail: unresolved.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {

        const p_type: unresolved.Type_Node.SG.reference._type<_pi.Deprecated_Source_Location> = _psh.wrap_state_group(['selected', {
            'dictionary': null,
            'dependency': _psh.wrap_state_group(['acyclic', null]) // <-- external references cannot be cyclic, but this should not have to be specified here
        }])
        return _psh.wrap_state_group(['reference', {
            'referent': {
                'type location': {
                    'location': _psh.wrap_state_group(['external', {
                        'import': _psh.wrap_reference(schema),
                        'type': _psh.wrap_reference(type),
                    }]),
                    'resulting node': null
                },
                'tail': _psh.wrap_list(tail),
                'resulting node': null
            },
            'type': p_type,
        }])
    }
    export const state_group = (states: _psh.Raw_Or_Normal_Dictionary<unresolved.Type_Node.SG.state_group.D<_pi.Deprecated_Source_Location>>): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['state group', _psh.wrap_dictionary(states)])
    }
    export const text_global = (name: string): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['text', _psh.wrap_state_group(['global', _psh.wrap_reference(name)])])
    }
    export const text_local = (bt: unresolved.Text_Type<_pi.Deprecated_Source_Location>): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['text', _psh.wrap_state_group(['local', bt])])
    }
    // export const type_parameter = (name: string): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
    //     return _psh.wrap_state_group(['type parameter', _psh.wrap_reference(name)])
    // }
}

/**
 * type node reference tail step
 */
export namespace tr {

    export const d = (): unresolved.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['dictionary', null])
    }
    export const g = (grp: string): unresolved.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['group', _psh.wrap_reference(grp)])
    }
    export const s = (state: string): unresolved.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['state group', _psh.wrap_reference(state)])
    }
    export const o = (): unresolved.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['optional', null])
    }
}



export const sig_params = (
    values: _psh.Raw_Or_Normal_Dictionary<unresolved.Signature_Parameters.values.D<_pi.Deprecated_Source_Location>>,
    lookups: _psh.Raw_Or_Normal_Dictionary<unresolved.Signature_Parameters.lookups.D<_pi.Deprecated_Source_Location>>,
): unresolved.Signature_Parameters<_pi.Deprecated_Source_Location> => {
    return {
        'values': _psh.wrap_dictionary(values),
        'lookups': _psh.wrap_dictionary(lookups),
    }
}

/**
 * signature
 */
export namespace sig {

    export const local = (
        values: _psh.Raw_Or_Normal_Dictionary<unresolved.Signature_Parameters.values.D<_pi.Deprecated_Source_Location>>,
        lookups: _psh.Raw_Or_Normal_Dictionary<unresolved.Signature_Parameters.lookups.D<_pi.Deprecated_Source_Location>>,
    ): unresolved.Signatures.D<_pi.Deprecated_Source_Location> => {
        return {
            'type': null,
            'parameters': _psh.wrap_state_group(['local', {
                'values': _psh.wrap_dictionary(values),
                'lookups': _psh.wrap_dictionary(lookups),
            }]),
            'resolved parameters': null,
        }
    }

    export const same_as = (
        name: string
    ): unresolved.Signatures.D<_pi.Deprecated_Source_Location> => {
        return {
            'type': null,
            'parameters': _psh.wrap_state_group(['same as', _psh.wrap_reference(name)]),
            'resolved parameters': null,
        }
    }
}

export const value_parameter = (
    name: string,
    presence?: 'optional' | 'required',
): unresolved.Signature_Parameters.values.D<_pi.Deprecated_Source_Location> => {
    return {
        'data type': {
            'location': _psh.wrap_state_group(['internal', _psh.wrap_reference(name)]),
            'resulting node': null,
        },
        'presence': presence === 'optional'
            ? _psh.wrap_state_group(['optional', null])
            : _psh.wrap_state_group(['required', null]),
    }
}

export const value_parameter_external = (
    imp: string,
    type: string,
    presence?: 'optional' | 'required',
): unresolved.Signature_Parameters.values.D<_pi.Deprecated_Source_Location> => {
    return {
        'data type': {
            'location': _psh.wrap_state_group(['external', {
                'import': _psh.wrap_reference(imp),
                'type': _psh.wrap_reference(type),
            }]),
            'resulting node': null,
        },
        'presence': presence === 'optional'
            ? _psh.wrap_state_group(['optional', null])
            : _psh.wrap_state_group(['required', null]),
    }
}

export const lookup_parameter = (
    name: string,
    type?: 'acyclic' | 'cyclic' | 'stack',
    presence?: 'optional' | 'required',
): unresolved.Signature_Parameters.lookups.D<_pi.Deprecated_Source_Location> => {
    return {
        'referent': {
            'location': _psh.wrap_state_group(['internal', _psh.wrap_reference(name)]),
            'resulting node': null,
        },
        'dictionary': null,
        'type': type === 'cyclic'
            ? _psh.wrap_state_group(['cyclic', null])
            : type === 'stack'
                ? _psh.wrap_state_group(['stack', null])
                : _psh.wrap_state_group(['acyclic', null]),
        'presence': presence === 'optional'
            ? _psh.wrap_state_group(['optional', null])
            : _psh.wrap_state_group(['required', null]),
    }
}

/**
 * lookup selection
 */
export namespace ls {

    export const parameter = (parameter: string): unresolved.Lookup_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'type': _psh.wrap_state_group(['parameter', _psh.wrap_reference(parameter)]),
            'resulting dictionary': null
        }
    }
    export const not_circular_dependent_siblings = (): unresolved.Lookup_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'type': _psh.wrap_state_group(['not circular dependent siblings', null]),
            'resulting dictionary': null
        }
    }
    export const possibly_circular_dependent_siblings = (): unresolved.Lookup_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'type': _psh.wrap_state_group(['possibly circular dependent siblings', null]),
            'resulting dictionary': null
        }
    }

}

/**
 * node resolver lookup arguments
 */
export namespace al {


    export const not_set = (

    ): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['not set', null])
    }

    export const empty_stack = (

    ): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['empty stack', null])
    }

    /**
     * creates a new stack of lookup selections from an existing stack and a new element
     */
    export const stack = (
        stack: unresolved.Lookup_Selection<_pi.Deprecated_Source_Location>,
        element: unresolved.Lookup_Selection<_pi.Deprecated_Source_Location>,
    ): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['stack', {
            'stack': stack,
            'element': element,
        }])
    }

    /**
     * provides a dictionary by selecting a value (that is guaranteed to be a dictionary)
     */
    export const dictionary = (value_selection: unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['selection', {
            'type': _psh.wrap_state_group(['dictionary', {
                'selection': value_selection,
                'selected dictionary': null,
            }]),
            'resulting dictionary': null,
        }])
    }

    /**
     * selects a lookup parameter of this resolver and passes it to the next resolver
     */
    export const parameter = (parameter: string): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['selection', {
            'type': _psh.wrap_state_group(['parameter', _psh.wrap_reference(parameter)]),
            'resulting dictionary': null,
        }])
    }

    /**
     * this one is only usable in the context of an ordered dictionary
     */
    export const not_circular_dependent_siblings = (): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['selection', {
            'type': _psh.wrap_state_group(['not circular dependent siblings', null]),
            'resulting dictionary': null,
        }])
    }

    /**
     * this one is only usable in the context of a dictionary (ordered or not)
     */
    export const possibly_circular_dependent_siblings = (): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['selection', {
            'type': _psh.wrap_state_group(['possibly circular dependent siblings', null]),
            'resulting dictionary': null,
        }])
    }

}

/**
 * value selection path step
 */
export namespace vst {

    export const component = (
    ): unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['component', null])
    }

    export const group = (
        property: string,
    ): unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['group', _psh.wrap_reference(property)])
    }

    export const reference = (
    ): unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['reference', {
            'definition': null,
        }])
    }

    // export const state_group = (
    //     type: unresolved.Type_Node_Reference<_pi.Deprecated_Source_Location>,
    //     states: _psh.Raw_Or_Normal_Dictionary<unresolved.Relative_Value_Selection.path.L.SG.state_group.states.D<_pi.Deprecated_Source_Location>>,
    // ): unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location> => {
    //     return _psh.wrap_state_group(['state group', {
    //         'definition': null,
    //         'type': type,
    //         'states': _psh.wrap_dictionary(states),
    //     }])
    // }

}

/**
 * optional value initialization
 */
export namespace ovi {

    export const not_set = (

    ): unresolved.Optional_Value_Initialization<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['not set', null])
    }

    export const set = (
        value: unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>,
    ): unresolved.Optional_Value_Initialization<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['set', value])
    }

    export const selection = (
        selection: unresolved.Possible_Value_Selection<_pi.Deprecated_Source_Location>,
    ): unresolved.Optional_Value_Initialization<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['selection', selection])
    }

}

/**
 * possible value selection
 */
export namespace pvs {
    export const state_group = (
        state_group: string,
        result: unresolved.Type_Reference<_pi.Deprecated_Source_Location>,
    ): unresolved.Possible_Value_Selection<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['result', _psh.wrap_state_group(['state group', {
            'property': _psh.wrap_reference(state_group),
            'state group': null,
            'result': result,
        }])])
    }

    export const optional_value = (
        optional_value: string,
        result: unresolved.Type_Reference<_pi.Deprecated_Source_Location>,
    ): unresolved.Possible_Value_Selection<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['result', _psh.wrap_state_group(['optional value', {
            'property': _psh.wrap_reference(optional_value),
            'optional value': null,
            'result': result,
        }])])
    }

    export const parameter = (
        parameter: string,
    ): unresolved.Possible_Value_Selection<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['parameter', _psh.wrap_reference(parameter)])
    }

}

/**
 * guaranteed value selection
 */
export namespace gvs {

    export const dictionary = (value_selection: unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>): unresolved.Lookup_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'type': _psh.wrap_state_group(['dictionary', {
                'selection': value_selection,
                'selected dictionary': null,
            }]),
            'resulting dictionary': null,
        }
    }
    export const component = (
        component: string,
        constraint: string,
        tail: unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _psh.wrap_state_group(['constraint', _psh.wrap_state_group(['component', {
                'property': _psh.wrap_reference(component),
                'constraint': _psh.wrap_reference(constraint),
            }])]),
            'tail': {
                'path': _psh.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const reference = (
        reference: string,
        constraint: string,
        tail: unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _psh.wrap_state_group(['constraint', _psh.wrap_state_group(['reference', {
                'property': _psh.wrap_reference(reference),
                'constraint': _psh.wrap_reference(constraint),
            }])]),
            'tail': {
                'path': _psh.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const list = (
        list: string,
        tail: unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _psh.wrap_state_group<unresolved.Guaranteed_Value_Selection.start.SG<_pi.Deprecated_Source_Location>>(['result', _psh.wrap_state_group(['list', {
                'property': _psh.wrap_reference(list),
                'list result': null,
            }])]),
            'tail': {
                'path': _psh.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const state_group = (
        state_group: string,
        result: unresolved.Type_Reference<_pi.Deprecated_Source_Location>,
        tail: unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _psh.wrap_state_group<unresolved.Possible_Value_Selection.SG<_pi.Deprecated_Source_Location>>(['result', _psh.wrap_state_group(['state group', {
                'property': _psh.wrap_reference(state_group),
                'state group': null,
                'result': result,
            }])]),
            'tail': {
                'path': _psh.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const optional_value = (
        optional_value: string,
        result: unresolved.Type_Reference<_pi.Deprecated_Source_Location>,
        tail: unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _psh.wrap_state_group<unresolved.Possible_Value_Selection.SG<_pi.Deprecated_Source_Location>>(['result', _psh.wrap_state_group(['optional value', {
                'property': _psh.wrap_reference(optional_value),
                'optional value': null,
                'result': result,
            }])]),
            'tail': {
                'path': _psh.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const parameter = (
        parameter: string,
        tail: unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _psh.wrap_state_group<unresolved.Possible_Value_Selection.SG<_pi.Deprecated_Source_Location>>(['parameter', _psh.wrap_reference(parameter)]),
            'tail': {
                'path': _psh.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const list_cursor = (
        tail: unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _psh.wrap_state_group(['list cursor', null]),
            'tail': {
                'path': _psh.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const linked_entry = (
        tail: unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _psh.wrap_state_group(['linked entry', null]),
            'tail': {
                'path': _psh.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const sibling = (
        sibling: string,
        tail: unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _psh.wrap_state_group(['sibling', _psh.wrap_reference(sibling)]),
            'tail': {
                'path': _psh.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const parent_sibling = (
        parent_sibling: string,
        tail: unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _psh.wrap_state_group(['parent sibling', _psh.wrap_reference(parent_sibling)]),
            'tail': {
                'path': _psh.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const option_constraint = (
        constraint: string,
        tail: unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _psh.wrap_state_group(['option constraint', _psh.wrap_reference(constraint)]),
            'tail': {
                'path': _psh.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

}

/**
 * node resolver value argument
 */
export namespace av {

    export const parameter = (
        parameter: string,
    ): unresolved.Node_Resolver.SG.component._arguments.O.values.O.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['parameter', _psh.wrap_reference(parameter)])
    }

    export const required = (
        value: unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>,
    ): unresolved.Node_Resolver.SG.component._arguments.O.values.O.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['required', value])
    }

    export const optional = (
        value: unresolved.Optional_Value_Initialization<_pi.Deprecated_Source_Location>,
    ): unresolved.Node_Resolver.SG.component._arguments.O.values.O.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['optional', value])
    }

}

export const state = (
    resolver: unresolved.Node_Resolver<_pi.Deprecated_Source_Location>,
): unresolved.Node_Resolver.SG.state_group.states.D<_pi.Deprecated_Source_Location> => {
    return {
        'constraints': _psh.wrap_dictionary({}),
        'resolver': resolver,
    }
}

export const state_constrained = (
    constraints: _psh.Raw_Or_Normal_Dictionary<unresolved.Option_Constraints.D<_pi.Deprecated_Source_Location>>,
    resolver: unresolved.Node_Resolver<_pi.Deprecated_Source_Location>,
): unresolved.Node_Resolver.SG.state_group.states.D<_pi.Deprecated_Source_Location> => {
    return {
        'constraints': _psh.wrap_dictionary(constraints),
        'resolver': resolver,
    }
}

/**
 * option constraint
 */
export namespace oc {

    export const state = (
        value_selection: unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>,
        state: string,
    ): unresolved.Option_Constraints.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['state', {
            'selection': value_selection,
            'selected state group': null,
            'state': _psh.wrap_reference(state),
        }])
    }

    export const assert_set = (
        possibly_optional: unresolved.Possible_Value_Selection<_pi.Deprecated_Source_Location>,
    ): unresolved.Option_Constraints.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['assert is set', possibly_optional])
    }

}

/**
 * property constraint
 */
export namespace pc {

    export const property = (
        value_selection_tail: unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
        state: string,
    ): unresolved.Property_Constraints.D<_pi.Deprecated_Source_Location> => {
        return {
            'start': _psh.wrap_state_group(['property', null]),
            'constraint': {
                'selection': {
                    'path': _psh.wrap_list(value_selection_tail),
                    'resulting node': null,
                },
                'type': _psh.wrap_state_group(['state', {
                    'selected state group': null,
                    'state': _psh.wrap_reference(state),
                }])
            },
        }
    }

    export const constraint = (
        constraint: string,
        value_selection_tail: unresolved.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
        state?: string,
    ): unresolved.Property_Constraints.D<_pi.Deprecated_Source_Location> => {
        return {
            'start': _psh.wrap_state_group(['sibling', _psh.wrap_reference(constraint)]),
            'constraint': {
                'selection': {
                    'path': _psh.wrap_list(value_selection_tail),
                    'resulting node': null,
                },
                'type': state === undefined
                    ? _psh.wrap_state_group(['optional value', {
                        'selected optional value': null,
                    }])
                    : _psh.wrap_state_group(['state', {
                        'selected state group': null,
                        'state': _psh.wrap_reference(state),
                    }])
            },
        }
    }

}

/**
 * node resolver
 */
export namespace r {

    export const text = (): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['text', null])
    }

    export const boolean = (): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['boolean', null])
    }

    export const number = (): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['number', null])
    }
    export const component = (
        type: string,
        values: null | _psh.Raw_Or_Normal_Dictionary<unresolved.Node_Resolver.SG.component._arguments.O.values.O.D<_pi.Deprecated_Source_Location>>,
        lookups: null | _psh.Raw_Or_Normal_Dictionary<unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location>>,
        constraints?: _psh.Raw_Or_Normal_Dictionary<unresolved.Property_Constraints.D<_pi.Deprecated_Source_Location>>,
    ): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['component', {
            'location': _psh.wrap_state_group(['internal', _psh.wrap_reference(type)]),
            'signature': null,
            'arguments': _psh.set({
                'values': values === null ? _psh.not_set() : _psh.set(_psh.wrap_dictionary(values)),
                'lookups': lookups === null ? _psh.not_set() : _psh.set(_psh.wrap_dictionary(lookups)),
            }),
            'constraints': _psh.wrap_dictionary(constraints === undefined ? {} : constraints),
        }])
    }
    export const component_external = (
        imp: string,
        type: string,
        values: null | _psh.Raw_Or_Normal_Dictionary<unresolved.Node_Resolver.SG.component._arguments.O.values.O.D<_pi.Deprecated_Source_Location>>,
        lookups: null | _psh.Raw_Or_Normal_Dictionary<unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location>>,
        constraints?: _psh.Raw_Or_Normal_Dictionary<unresolved.Property_Constraints.D<_pi.Deprecated_Source_Location>>,
    ): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['component', {
            'location': _psh.wrap_state_group(['external', {
                'import': _psh.wrap_reference(imp),
                'type': _psh.wrap_reference(type),
            }]),
            'signature': null,
            'arguments': _psh.set({
                'values': values === null ? _psh.not_set() : _psh.set(_psh.wrap_dictionary(values)),
                'lookups': lookups === null ? _psh.not_set() : _psh.set(_psh.wrap_dictionary(lookups)),
            }),
            'constraints': _psh.wrap_dictionary(constraints === undefined ? {} : constraints),
        }])
    }

    export const dictionary = (resolver: unresolved.Node_Resolver<_pi.Deprecated_Source_Location>): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['dictionary', {
            'definition': null,
            'resolver': resolver,
            'benchmark': _psh.not_set(),
        }])
    }

    export const dictionary_linked = (
        dense: 'dense' | 'sparse',
        selection: unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>,
        resolver: unresolved.Node_Resolver<_pi.Deprecated_Source_Location>,
    ): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['dictionary', {
            'definition': null,
            'resolver': resolver,
            'benchmark': _psh.set({
                'selection': selection,
                'resulting dictionary': null,
                'dense': dense === 'dense',
            }),
        }])
    }

    export const group = (
        properties: _psh.Raw_Or_Normal_Dictionary<unresolved.Node_Resolver_Group.D.resolver<_pi.Deprecated_Source_Location>> //FIXME: remove the 'this entry' step
    ): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        const temp_dict = _psh.wrap_dictionary(properties)
        return _psh.wrap_state_group(['group', {
            'location': temp_dict.location,
            'dictionary': temp_dict.dictionary.map(($) => {
                return {
                    'location': $.location,
                    'entry': {
                        'definition': null,
                        'resolver': $.entry
                    },
                }
            })
        }])
    }

    export const list = (
        type_resolver: unresolved.Node_Resolver<_pi.Deprecated_Source_Location>
    ): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['list', {
            'definition': null,
            'resolver': type_resolver,
            'result': _psh.not_set<unresolved.Node_Resolver.SG.list.result.O<_pi.Deprecated_Source_Location>>(),
        }])
    }
    export const list_with_result = (
        type_resolver: unresolved.Node_Resolver<_pi.Deprecated_Source_Location>,
        result: unresolved.Type_Reference<_pi.Deprecated_Source_Location>,

    ): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['list', {
            'definition': null,
            'resolver': type_resolver,
            'result': _psh.set(result),
        }])
    }

    export const nothing = (): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['nothing', null])
    }

    export const optional = (
        type_resolver: unresolved.Node_Resolver<_pi.Deprecated_Source_Location>
    ): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['optional', {
            'constraints': _psh.wrap_dictionary<unresolved.Option_Constraints.D<_pi.Deprecated_Source_Location>>({}),
            'resolver': type_resolver,
        }])
    }

    export const optional_constrained = (
        constraints: _psh.Raw_Or_Normal_Dictionary<unresolved.Option_Constraints.D<_pi.Deprecated_Source_Location>>,
        type_resolver: unresolved.Node_Resolver<_pi.Deprecated_Source_Location>
    ): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['optional', {
            'constraints': _psh.wrap_dictionary(constraints),
            'resolver': type_resolver,
        }])
    }

    export const reference_derived = (
        value_selection: unresolved.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>
    ): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['reference', {
            'definition': null,
            'type': _psh.wrap_state_group(['derived', {
                'value': value_selection,
            }])
        }])
    }

    export const reference = (
        lookup_selection: unresolved.Lookup_Selection<_pi.Deprecated_Source_Location>,
        constraints?: _psh.Raw_Or_Normal_Dictionary<unresolved.Property_Constraints.D<_pi.Deprecated_Source_Location>>,
    ): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['reference', {
            'definition': null,
            'type': _psh.wrap_state_group(['selected', {
                'definition': null,
                'lookup': lookup_selection,
                'constraints': _psh.wrap_dictionary(constraints === undefined ? {} : constraints),
            }])
        }])
    }

    export const reference_stack = (
        lookup_selection: unresolved.Lookup_Selection<_pi.Deprecated_Source_Location>,
        constraints?: _psh.Raw_Or_Normal_Dictionary<unresolved.Property_Constraints.D<_pi.Deprecated_Source_Location>>,
    ): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['reference', {
            'definition': null,
            'type': _psh.wrap_state_group(['selected', {
                'definition': null,
                'lookup': lookup_selection,
                'constraints': _psh.wrap_dictionary(constraints === undefined ? {} : constraints),
            }])
        }])
    }

    export const state_group = (
        states: _psh.Raw_Or_Normal_Dictionary<unresolved.Node_Resolver.SG.state_group.states.D<_pi.Deprecated_Source_Location>>
    ): unresolved.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['state group', {
            'definition': null,
            'states': _psh.wrap_dictionary(states),
        }])
    }
}

export const resolver = (
    type_resolver: unresolved.Node_Resolver<_pi.Deprecated_Source_Location>
): unresolved.Resolvers.D<_pi.Deprecated_Source_Location> => {
    return {
        'signature': null,
        'type resolver': type_resolver,
    }
}

export const signatures = (
    signatures: _psh.Raw_Or_Normal_Dictionary<unresolved.Signatures.D<_pi.Deprecated_Source_Location>>,
): unresolved.Resolve_Logic.signatures<_pi.Deprecated_Source_Location> => {
    return {
        'types': _psh.wrap_dictionary(signatures)
    }
}


export const resolvers = (
    resolvers: _psh.Raw_Or_Normal_Dictionary<unresolved.Resolvers.D<_pi.Deprecated_Source_Location>>,
): unresolved.Resolvers<_pi.Deprecated_Source_Location> => {
    return _psh.wrap_dictionary(resolvers)
}
export const import_ = (
    name: string,
): unresolved.Imports.D<_pi.Deprecated_Source_Location> => {
    return {
        'schema set child': _psh.wrap_stack_reference(name),
        'schema': null,
    }
}

export const constrained = (
    signatures: unresolved.Resolve_Logic.signatures<_pi.Deprecated_Source_Location>,
    resolvers: unresolved.Resolvers<_pi.Deprecated_Source_Location>,
): unresolved.Schema.complexity.SG.constrained<_pi.Deprecated_Source_Location> => {
    return {
        'signatures': signatures,
        'resolvers': resolvers,
    }
}

export const unconstrained = (
): unresolved.Schema.complexity.SG.unconstrained<_pi.Deprecated_Source_Location> => {
    return null
}
export const schema_ = (
    imports: _psh.Raw_Or_Normal_Dictionary<unresolved.Imports.D<_pi.Deprecated_Source_Location>>,
    globals: unresolved.Globals<_pi.Deprecated_Source_Location>,
    types: unresolved.Types<_pi.Deprecated_Source_Location>,
    resolve: null | unresolved.Schema.complexity.SG.constrained<_pi.Deprecated_Source_Location>,
): unresolved.Schemas.D<_pi.Deprecated_Source_Location> => {
    return _psh.wrap_state_group(['schema', {
        'imports': _psh.wrap_dictionary(imports),
        'globals': globals,
        'types': types,
        'complexity': resolve === null
            ? _psh.wrap_state_group(['unconstrained', null])
            : _psh.wrap_state_group(['constrained', resolve])
    }])
}