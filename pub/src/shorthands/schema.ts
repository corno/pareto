import * as _p from 'pareto-core-shorthands/dist/unresolved_data'
import * as _pi from 'pareto-core-interface'



import * as d_schema from "../interface/generated/pareto/schemas/schema/data_types/target"

/**
 * schema tree
 */
export namespace st {

    export const set = (
        schemas: _p.Raw_Or_Normal_Dictionary<d_schema.Schema_Tree<_pi.Deprecated_Source_Location>>,
    ): d_schema.Schema_Tree<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['set', _p.wrap_dictionary(schemas)])
    }

    export const schema = (
        schema: d_schema.Schema<_pi.Deprecated_Source_Location>,
    ): d_schema.Schema_Tree<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['schema', schema])
    }

}

export const types = (
    types: _p.Raw_Or_Normal_Dictionary<d_schema.Types.D<_pi.Deprecated_Source_Location>>,
): d_schema.Types<_pi.Deprecated_Source_Location> => {
    return _p.wrap_dictionary(types)
}

export const globals = (
    complexity: 'unconstrained' | 'constrained',
    text_types: _p.Raw_Or_Normal_Dictionary<d_schema.Globals.text_types.D<_pi.Deprecated_Source_Location>>,
    number_types: _p.Raw_Or_Normal_Dictionary<d_schema.Globals.number_types.D<_pi.Deprecated_Source_Location>>,
): d_schema.Globals<_pi.Deprecated_Source_Location> => {
    return {
        'complexity': complexity === 'unconstrained'
            ? _p.wrap_state_group(['unconstrained', null])
            : _p.wrap_state_group(['constrained', null]),
        'text types': _p.wrap_dictionary(text_types),
        'number types': _p.wrap_dictionary(number_types),
    }
}

export const type = (type: d_schema.Type_Node<_pi.Deprecated_Source_Location>): d_schema.Types.D<_pi.Deprecated_Source_Location> => ({
    'type parameters': _p.wrap_dictionary({}),
    'node': type,
})

export const text = (type: 'single line' | 'multi line'): d_schema.Text_Type<_pi.Deprecated_Source_Location> => ({
    'type': type === 'single line' ? _p.wrap_state_group(['single line', null]) : _p.wrap_state_group(['multi line', null]),
})

export const prop = (
    node: d_schema.Type_Node<_pi.Deprecated_Source_Location>,
): d_schema.Group.D<_pi.Deprecated_Source_Location> => ({
    'description': _p.optional.not_set(),
    'node': node,
})

export const tstate = (
    node: d_schema.Type_Node<_pi.Deprecated_Source_Location>,
): d_schema.Type_Node.SG.state_group.D<_pi.Deprecated_Source_Location> => ({
    'description': _p.optional.not_set(),
    'node': node,
})

export const tstated = (
    description: string,
    node: d_schema.Type_Node<_pi.Deprecated_Source_Location>,
): d_schema.Type_Node.SG.state_group.D<_pi.Deprecated_Source_Location> => ({
    'description': _p.optional.set(description),
    'node': node,
})

export const propd = (
    description: string,
    node: d_schema.Type_Node<_pi.Deprecated_Source_Location>,
): d_schema.Group.D<_pi.Deprecated_Source_Location> => ({
    'description': _p.optional.set(description),
    'node': node,
})

/**
 * number type
 */
export namespace n {

    export const integer = (decimal_separator_offset?: number): d_schema.Number_Type<_pi.Deprecated_Source_Location> => ({
        'precision': _p.wrap_state_group<d_schema.Number_Type.precision.SG<_pi.Deprecated_Source_Location>>(['exact', {
            'decimal separator offset': decimal_separator_offset === undefined ? _p.optional.not_set() : _p.optional.set(decimal_separator_offset),
            'type': _p.wrap_state_group(['integer', null]),
        }])
    })

    export const approximation = (significant_digits: number): d_schema.Number_Type<_pi.Deprecated_Source_Location> => ({
        'precision': _p.wrap_state_group<d_schema.Number_Type.precision.SG<_pi.Deprecated_Source_Location>>(['approximation', {
            'significant digits': significant_digits,
        }])
    })

    export const natural = (decimal_separator_offset?: number): d_schema.Number_Type<_pi.Deprecated_Source_Location> => ({
        'precision': _p.wrap_state_group<d_schema.Number_Type.precision.SG<_pi.Deprecated_Source_Location>>(['exact', {
            'decimal separator offset': decimal_separator_offset === undefined ? _p.optional.not_set() : _p.optional.set(decimal_separator_offset),
            'type': _p.wrap_state_group(['natural', null]),
        }])
    })

    export const positive_natural = (decimal_separator_offset?: number): d_schema.Number_Type<_pi.Deprecated_Source_Location> => ({
        'precision': _p.wrap_state_group<d_schema.Number_Type.precision.SG<_pi.Deprecated_Source_Location>>(['exact', {
            'decimal separator offset': decimal_separator_offset === undefined ? _p.optional.not_set() : _p.optional.set(decimal_separator_offset),
            'type': _p.wrap_state_group(['positive natural', null]),
        }])
    })

}

export const reference = (
    type: string,
): d_schema.Type_Reference<_pi.Deprecated_Source_Location> => ({
    'location': _p.wrap_state_group(['internal', _p.wrap_reference(type)]),
    'resulting node': null,
})

export const part_reference = (
    type: string,
    tail: d_schema.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location>[],

): d_schema.Type_Node_Reference<_pi.Deprecated_Source_Location> => {
    return {
        'type location': {
            'location': _p.wrap_state_group(['internal', _p.wrap_reference(type)]),
            'resulting node': null,
        },
        'tail': _p.wrap_list(tail),
        'resulting node': null,
    }
}

/**
 * type node
 */
export namespace t {

    export const boolean = (): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['boolean', null])
    }
    export const component = (type: string): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['component', _p.wrap_state_group(['internal', _p.wrap_reference(type)])])
    }
    export const component_cyclic = (type: string): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['component', _p.wrap_state_group(['internal cyclic', _p.wrap_reference(type)])])
    }
    export const component_external = (imp: string, type: string): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['component', _p.wrap_state_group(['external', {
            'import': _p.wrap_reference(imp),
            'type': _p.wrap_reference(type),
        }])])
    }
    export const dictionary = (type: d_schema.Type_Node<_pi.Deprecated_Source_Location>, ordered?: 'ordered' | ''): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['dictionary', {
            'node': type,
            'ordered': ordered === 'ordered',
            'benchmark': _p.optional.not_set(),
        }])
    }
    export const group = (properties: _p.Raw_Or_Normal_Dictionary<d_schema.Group.D<_pi.Deprecated_Source_Location>>): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['group', _p.wrap_dictionary(properties)])
    }
    export const list = (type: d_schema.Type_Node<_pi.Deprecated_Source_Location>): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['list', {
            'node': type,
            'result': _p.optional.not_set(),
        }])
    }
    export const nothing = (): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['nothing', null])
    }
    export const number_global = (name: string): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['number', _p.wrap_state_group(['global', _p.wrap_reference(name)])])
    }
    export const number_local = (bt: d_schema.Number_Type<_pi.Deprecated_Source_Location>): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['number', _p.wrap_state_group(['local', bt])])
    }
    export const optional = (type: d_schema.Type_Node<_pi.Deprecated_Source_Location>): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['optional', type])
    }
    export const reference_derived = (
        type: string,
        tail: d_schema.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        const x: d_schema.Type_Node_Reference<_pi.Deprecated_Source_Location> = {
            'type location': {
                'location': _p.wrap_state_group(['internal', _p.wrap_reference(type)]),
                'resulting node': null,
            },
            'tail': _p.wrap_list(tail),
            'resulting node': null
        }
        return _p.wrap_state_group(['reference', {
            'referent': x,
            'type': _p.wrap_state_group(['derived', null]),
        }])
    }
    export const reference_derived_external = (
        imp: string,
        type: string,
        tail: d_schema.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location>[],

    ): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        const x: d_schema.Type_Node_Reference<_pi.Deprecated_Source_Location> = {
            'type location': {
                'location': _p.wrap_state_group(['external', {
                    'import': _p.wrap_reference(imp),
                    'type': _p.wrap_reference(type),
                }]),
                'resulting node': null
            },
            'tail': _p.wrap_list(tail),
            'resulting node': null
        }

        return _p.wrap_state_group(['reference', {
            'referent': x,
            'type': _p.wrap_state_group(['derived', null]),
        }])
    }

    export const reference = (
        type: string,
        tail: d_schema.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location>[],
        dependency?: "cyclic" | "acyclic",
    ): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {

        const p_type: d_schema.Type_Node.SG.reference._type<_pi.Deprecated_Source_Location> = _p.wrap_state_group(['selected', {
            'referent': {
                'type location': {
                    'location': _p.wrap_state_group(['internal', _p.wrap_reference(type)]),
                    'resulting node': null
                },
                'tail': _p.wrap_list(tail),
                'resulting node': null
            },
            'dictionary': null,
            'dependency': dependency === "cyclic" ? _p.wrap_state_group(['cyclic', null]) : _p.wrap_state_group(['acyclic', null])
        }])
        return _p.wrap_state_group(['reference', {
            'referent': {
                'type location': {
                    'location': _p.wrap_state_group(['internal', _p.wrap_reference(type)]),
                    'resulting node': null
                },
                'tail': _p.wrap_list(tail),
                'resulting node': null
            },
            'type': p_type,
        }])
    }

    export const reference_stack = (
        type: string,
        tail: d_schema.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {

        const p_type: d_schema.Type_Node.SG.reference._type<_pi.Deprecated_Source_Location> = _p.wrap_state_group(['selected', {
            'dictionary': null,
            'dependency': _p.wrap_state_group(['stack', null])
        }])
        return _p.wrap_state_group(['reference', {
            'referent': {
                'type location': {
                    'location': _p.wrap_state_group(['internal', _p.wrap_reference(type)]),
                    'resulting node': null
                },
                'tail': _p.wrap_list(tail),
                'resulting node': null
            },
            'type': p_type,
        }])
    }

    export const reference_external = (
        schema: string,

        type: string,
        tail: d_schema.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {

        const p_type: d_schema.Type_Node.SG.reference._type<_pi.Deprecated_Source_Location> = _p.wrap_state_group(['selected', {
            'dictionary': null,
            'dependency': _p.wrap_state_group(['acyclic', null]) // <-- external references cannot be cyclic, but this should not have to be specified here
        }])
        return _p.wrap_state_group(['reference', {
            'referent': {
                'type location': {
                    'location': _p.wrap_state_group(['external', {
                        'import': _p.wrap_reference(schema),
                        'type': _p.wrap_reference(type),
                    }]),
                    'resulting node': null
                },
                'tail': _p.wrap_list(tail),
                'resulting node': null
            },
            'type': p_type,
        }])
    }
    export const state_group = (states: _p.Raw_Or_Normal_Dictionary<d_schema.Type_Node.SG.state_group.D<_pi.Deprecated_Source_Location>>): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['state group', _p.wrap_dictionary(states)])
    }
    export const text_global = (name: string): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['text', _p.wrap_state_group(['global', _p.wrap_reference(name)])])
    }
    export const text_local = (bt: d_schema.Text_Type<_pi.Deprecated_Source_Location>): d_schema.Type_Node<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['text', _p.wrap_state_group(['local', bt])])
    }
    // export const type_parameter = (name: string): unresolved.Type_Node<_pi.Deprecated_Source_Location> => {
    //     return _psh.wrap_state_group(['type parameter', _psh.wrap_reference(name)])
    // }
}

/**
 * type node reference tail step
 */
export namespace tr {

    export const d = (): d_schema.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['dictionary', null])
    }
    export const g = (grp: string): d_schema.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['group', _p.wrap_reference(grp)])
    }
    export const s = (state: string): d_schema.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['state group', _p.wrap_reference(state)])
    }
    export const o = (): d_schema.Type_Node_Reference.tail.L<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['optional', null])
    }
}



export const sig_params = (
    values: _p.Raw_Or_Normal_Dictionary<d_schema.Signature_Parameters.values.D<_pi.Deprecated_Source_Location>>,
    lookups: _p.Raw_Or_Normal_Dictionary<d_schema.Signature_Parameters.lookups.D<_pi.Deprecated_Source_Location>>,
): d_schema.Signature_Parameters<_pi.Deprecated_Source_Location> => {
    return {
        'values': _p.wrap_dictionary(values),
        'lookups': _p.wrap_dictionary(lookups),
    }
}

/**
 * signature
 */
export namespace sig {

    export const local = (
        values: _p.Raw_Or_Normal_Dictionary<d_schema.Signature_Parameters.values.D<_pi.Deprecated_Source_Location>>,
        lookups: _p.Raw_Or_Normal_Dictionary<d_schema.Signature_Parameters.lookups.D<_pi.Deprecated_Source_Location>>,
    ): d_schema.Signatures.D<_pi.Deprecated_Source_Location> => {
        return {
            'type': null,
            'parameters': _p.wrap_state_group(['local', {
                'values': _p.wrap_dictionary(values),
                'lookups': _p.wrap_dictionary(lookups),
            }]),
            'resolved parameters': null,
        }
    }

    export const same_as = (
        name: string
    ): d_schema.Signatures.D<_pi.Deprecated_Source_Location> => {
        return {
            'type': null,
            'parameters': _p.wrap_state_group(['same as', _p.wrap_reference(name)]),
            'resolved parameters': null,
        }
    }
}

export const value_parameter = (
    name: string,
    presence?: 'optional' | 'required',
): d_schema.Signature_Parameters.values.D<_pi.Deprecated_Source_Location> => {
    return {
        'data type': {
            'location': _p.wrap_state_group(['internal', _p.wrap_reference(name)]),
            'resulting node': null,
        },
        'presence': presence === 'optional'
            ? _p.wrap_state_group(['optional', null])
            : _p.wrap_state_group(['required', null]),
    }
}

export const value_parameter_external = (
    imp: string,
    type: string,
    presence?: 'optional' | 'required',
): d_schema.Signature_Parameters.values.D<_pi.Deprecated_Source_Location> => {
    return {
        'data type': {
            'location': _p.wrap_state_group(['external', {
                'import': _p.wrap_reference(imp),
                'type': _p.wrap_reference(type),
            }]),
            'resulting node': null,
        },
        'presence': presence === 'optional'
            ? _p.wrap_state_group(['optional', null])
            : _p.wrap_state_group(['required', null]),
    }
}

export const lookup_parameter = (
    name: string,
    type?: 'acyclic' | 'cyclic' | 'stack',
    presence?: 'optional' | 'required',
): d_schema.Signature_Parameters.lookups.D<_pi.Deprecated_Source_Location> => {
    return {
        'referent': {
            'location': _p.wrap_state_group(['internal', _p.wrap_reference(name)]),
            'resulting node': null,
        },
        'dictionary': null,
        'type': type === 'cyclic'
            ? _p.wrap_state_group(['cyclic', null])
            : type === 'stack'
                ? _p.wrap_state_group(['stack', null])
                : _p.wrap_state_group(['acyclic', null]),
        'presence': presence === 'optional'
            ? _p.wrap_state_group(['optional', null])
            : _p.wrap_state_group(['required', null]),
    }
}

/**
 * lookup selection
 */
export namespace ls {

    export const parameter = (parameter: string): d_schema.Lookup_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'type': _p.wrap_state_group(['parameter', _p.wrap_reference(parameter)]),
            'resulting dictionary': null
        }
    }
    export const not_circular_dependent_siblings = (): d_schema.Lookup_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'type': _p.wrap_state_group(['not circular dependent siblings', null]),
            'resulting dictionary': null
        }
    }
    export const possibly_circular_dependent_siblings = (): d_schema.Lookup_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'type': _p.wrap_state_group(['possibly circular dependent siblings', null]),
            'resulting dictionary': null
        }
    }

}

/**
 * node resolver lookup arguments
 */
export namespace al {


    export const not_set = (

    ): d_schema.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['not set', null])
    }

    export const empty_stack = (

    ): d_schema.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['empty stack', null])
    }

    /**
     * creates a new stack of lookup selections from an existing stack and a new element
     */
    export const stack = (
        stack: d_schema.Lookup_Selection<_pi.Deprecated_Source_Location>,
        element: d_schema.Lookup_Selection<_pi.Deprecated_Source_Location>,
    ): d_schema.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['stack', {
            'stack': stack,
            'element': element,
        }])
    }

    /**
     * provides a dictionary by selecting a value (that is guaranteed to be a dictionary)
     */
    export const dictionary = (value_selection: d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>): d_schema.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['selection', {
            'type': _p.wrap_state_group(['dictionary', {
                'selection': value_selection,
                'selected dictionary': null,
            }]),
            'resulting dictionary': null,
        }])
    }

    /**
     * selects a lookup parameter of this resolver and passes it to the next resolver
     */
    export const parameter = (parameter: string): d_schema.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['selection', {
            'type': _p.wrap_state_group(['parameter', _p.wrap_reference(parameter)]),
            'resulting dictionary': null,
        }])
    }

    /**
     * this one is only usable in the context of an ordered dictionary
     */
    export const not_circular_dependent_siblings = (): d_schema.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['selection', {
            'type': _p.wrap_state_group(['not circular dependent siblings', null]),
            'resulting dictionary': null,
        }])
    }

    /**
     * this one is only usable in the context of a dictionary (ordered or not)
     */
    export const possibly_circular_dependent_siblings = (): d_schema.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['selection', {
            'type': _p.wrap_state_group(['possibly circular dependent siblings', null]),
            'resulting dictionary': null,
        }])
    }

}

/**
 * value selection path step
 */
export namespace vst {

    export const component = (
    ): d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['component', null])
    }

    export const group = (
        property: string,
    ): d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['group', _p.wrap_reference(property)])
    }

    export const reference = (
    ): d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['reference', {
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

    ): d_schema.Optional_Value_Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['not set', null])
    }

    export const set = (
        value: d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>,
    ): d_schema.Optional_Value_Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['set', value])
    }

    export const selection = (
        selection: d_schema.Possible_Value_Selection<_pi.Deprecated_Source_Location>,
    ): d_schema.Optional_Value_Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['selection', selection])
    }

}

/**
 * possible value selection
 */
export namespace pvs {
    export const state_group = (
        state_group: string,
        result: d_schema.Type_Reference<_pi.Deprecated_Source_Location>,
    ): d_schema.Possible_Value_Selection<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['result', _p.wrap_state_group(['state group', {
            'property': _p.wrap_reference(state_group),
            'state group': null,
            'result': result,
        }])])
    }

    export const optional_value = (
        optional_value: string,
        result: d_schema.Type_Reference<_pi.Deprecated_Source_Location>,
    ): d_schema.Possible_Value_Selection<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['result', _p.wrap_state_group(['optional value', {
            'property': _p.wrap_reference(optional_value),
            'optional value': null,
            'result': result,
        }])])
    }

    export const parameter = (
        parameter: string,
    ): d_schema.Possible_Value_Selection<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['parameter', _p.wrap_reference(parameter)])
    }

}

/**
 * guaranteed value selection
 */
export namespace gvs {

    export const dictionary = (value_selection: d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>): d_schema.Lookup_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'type': _p.wrap_state_group(['dictionary', {
                'selection': value_selection,
                'selected dictionary': null,
            }]),
            'resulting dictionary': null,
        }
    }
    export const component = (
        component: string,
        constraint: string,
        tail: d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['constraint', _p.wrap_state_group(['component', {
                'property': _p.wrap_reference(component),
                'constraint': _p.wrap_reference(constraint),
            }])]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const reference = (
        reference: string,
        constraint: string,
        tail: d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['constraint', _p.wrap_state_group(['reference', {
                'property': _p.wrap_reference(reference),
                'constraint': _p.wrap_reference(constraint),
            }])]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const list = (
        list: string,
        tail: d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group<d_schema.Guaranteed_Value_Selection.start.SG<_pi.Deprecated_Source_Location>>(['result', _p.wrap_state_group(['list', {
                'property': _p.wrap_reference(list),
                'list result': null,
            }])]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const state_group = (
        state_group: string,
        result: d_schema.Type_Reference<_pi.Deprecated_Source_Location>,
        tail: d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group<d_schema.Possible_Value_Selection.SG<_pi.Deprecated_Source_Location>>(['result', _p.wrap_state_group(['state group', {
                'property': _p.wrap_reference(state_group),
                'state group': null,
                'result': result,
            }])]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const optional_value = (
        optional_value: string,
        result: d_schema.Type_Reference<_pi.Deprecated_Source_Location>,
        tail: d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group<d_schema.Possible_Value_Selection.SG<_pi.Deprecated_Source_Location>>(['result', _p.wrap_state_group(['optional value', {
                'property': _p.wrap_reference(optional_value),
                'optional value': null,
                'result': result,
            }])]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const parameter = (
        parameter: string,
        tail: d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group<d_schema.Possible_Value_Selection.SG<_pi.Deprecated_Source_Location>>(['parameter', _p.wrap_reference(parameter)]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const list_cursor = (
        tail: d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['list cursor', null]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const linked_entry = (
        tail: d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['linked entry', null]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const sibling = (
        sibling: string,
        tail: d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['sibling', _p.wrap_reference(sibling)]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const parent_sibling = (
        parent_sibling: string,
        tail: d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['parent sibling', _p.wrap_reference(parent_sibling)]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const option_constraint = (
        constraint: string,
        tail: d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
    ): d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['option constraint', _p.wrap_reference(constraint)]),
            'tail': {
                'path': _p.wrap_list(tail),
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
    ): d_schema.Node_Resolver.SG.component._arguments.O.values.O.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['parameter', _p.wrap_reference(parameter)])
    }

    export const required = (
        value: d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>,
    ): d_schema.Node_Resolver.SG.component._arguments.O.values.O.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['required', value])
    }

    export const optional = (
        value: d_schema.Optional_Value_Initialization<_pi.Deprecated_Source_Location>,
    ): d_schema.Node_Resolver.SG.component._arguments.O.values.O.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['optional', value])
    }

}

export const state = (
    resolver: d_schema.Node_Resolver<_pi.Deprecated_Source_Location>,
): d_schema.Node_Resolver.SG.state_group.states.D<_pi.Deprecated_Source_Location> => {
    return {
        'constraints': _p.wrap_dictionary({}),
        'resolver': resolver,
    }
}

export const state_constrained = (
    constraints: _p.Raw_Or_Normal_Dictionary<d_schema.Option_Constraints.D<_pi.Deprecated_Source_Location>>,
    resolver: d_schema.Node_Resolver<_pi.Deprecated_Source_Location>,
): d_schema.Node_Resolver.SG.state_group.states.D<_pi.Deprecated_Source_Location> => {
    return {
        'constraints': _p.wrap_dictionary(constraints),
        'resolver': resolver,
    }
}

/**
 * option constraint
 */
export namespace oc {

    export const state = (
        value_selection: d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>,
        state: string,
    ): d_schema.Option_Constraints.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['state', {
            'selection': value_selection,
            'selected state group': null,
            'state': _p.wrap_reference(state),
        }])
    }

    export const assert_set = (
        possibly_optional: d_schema.Possible_Value_Selection<_pi.Deprecated_Source_Location>,
    ): d_schema.Option_Constraints.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['assert is set', possibly_optional])
    }

}

/**
 * property constraint
 */
export namespace pc {

    export const property = (
        value_selection_tail: d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
        state: string,
    ): d_schema.Property_Constraints.D<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['property', null]),
            'constraint': {
                'selection': {
                    'path': _p.wrap_list(value_selection_tail),
                    'resulting node': null,
                },
                'type': _p.wrap_state_group(['state', {
                    'selected state group': null,
                    'state': _p.wrap_reference(state),
                }])
            },
        }
    }

    export const constraint = (
        constraint: string,
        value_selection_tail: d_schema.Relative_Value_Selection.path.L<_pi.Deprecated_Source_Location>[],
        state?: string,
    ): d_schema.Property_Constraints.D<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['sibling', _p.wrap_reference(constraint)]),
            'constraint': {
                'selection': {
                    'path': _p.wrap_list(value_selection_tail),
                    'resulting node': null,
                },
                'type': state === undefined
                    ? _p.wrap_state_group(['optional value', {
                        'selected optional value': null,
                    }])
                    : _p.wrap_state_group(['state', {
                        'selected state group': null,
                        'state': _p.wrap_reference(state),
                    }])
            },
        }
    }

}

/**
 * node resolver
 */
export namespace r {

    export const text = (): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['text', null])
    }

    export const boolean = (): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['boolean', null])
    }

    export const number = (): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['number', null])
    }
    export const component = (
        type: string,
        values: null | _p.Raw_Or_Normal_Dictionary<d_schema.Node_Resolver.SG.component._arguments.O.values.O.D<_pi.Deprecated_Source_Location>>,
        lookups: null | _p.Raw_Or_Normal_Dictionary<d_schema.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location>>,
        constraints?: _p.Raw_Or_Normal_Dictionary<d_schema.Property_Constraints.D<_pi.Deprecated_Source_Location>>,
    ): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['component', {
            'location': _p.wrap_state_group(['internal', _p.wrap_reference(type)]),
            'signature': null,
            'arguments': _p.optional.set({
                'values': values === null ? _p.optional.not_set() : _p.optional.set(_p.wrap_dictionary(values)),
                'lookups': lookups === null ? _p.optional.not_set() : _p.optional.set(_p.wrap_dictionary(lookups)),
            }),
            'constraints': _p.wrap_dictionary(constraints === undefined ? {} : constraints),
        }])
    }
    export const component_external = (
        imp: string,
        type: string,
        values: null | _p.Raw_Or_Normal_Dictionary<d_schema.Node_Resolver.SG.component._arguments.O.values.O.D<_pi.Deprecated_Source_Location>>,
        lookups: null | _p.Raw_Or_Normal_Dictionary<d_schema.Node_Resolver.SG.component._arguments.O.lookups.O.D<_pi.Deprecated_Source_Location>>,
        constraints?: _p.Raw_Or_Normal_Dictionary<d_schema.Property_Constraints.D<_pi.Deprecated_Source_Location>>,
    ): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['component', {
            'location': _p.wrap_state_group(['external', {
                'import': _p.wrap_reference(imp),
                'type': _p.wrap_reference(type),
            }]),
            'signature': null,
            'arguments': _p.optional.set({
                'values': values === null ? _p.optional.not_set() : _p.optional.set(_p.wrap_dictionary(values)),
                'lookups': lookups === null ? _p.optional.not_set() : _p.optional.set(_p.wrap_dictionary(lookups)),
            }),
            'constraints': _p.wrap_dictionary(constraints === undefined ? {} : constraints),
        }])
    }

    export const dictionary = (resolver: d_schema.Node_Resolver<_pi.Deprecated_Source_Location>): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['dictionary', {
            'definition': null,
            'resolver': resolver,
            'benchmark': _p.optional.not_set(),
        }])
    }

    export const dictionary_linked = (
        dense: 'dense' | 'sparse',
        selection: d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>,
        resolver: d_schema.Node_Resolver<_pi.Deprecated_Source_Location>,
    ): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['dictionary', {
            'definition': null,
            'resolver': resolver,
            'benchmark': _p.optional.set({
                'selection': selection,
                'resulting dictionary': null,
                'dense': dense === 'dense',
            }),
        }])
    }

    export const group = (
        properties: _p.Raw_Or_Normal_Dictionary<d_schema.Node_Resolver_Group.D.resolver<_pi.Deprecated_Source_Location>> //FIXME: remove the 'this entry' step
    ): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        const temp_dict = _p.wrap_dictionary(properties)
        return _p.wrap_state_group(['group', {
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
        type_resolver: d_schema.Node_Resolver<_pi.Deprecated_Source_Location>
    ): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['list', {
            'definition': null,
            'resolver': type_resolver,
            'result': _p.optional.not_set<d_schema.Node_Resolver.SG.list.result.O<_pi.Deprecated_Source_Location>>(),
        }])
    }
    export const list_with_result = (
        type_resolver: d_schema.Node_Resolver<_pi.Deprecated_Source_Location>,
        result: d_schema.Type_Reference<_pi.Deprecated_Source_Location>,

    ): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['list', {
            'definition': null,
            'resolver': type_resolver,
            'result': _p.optional.set(result),
        }])
    }

    export const nothing = (): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['nothing', null])
    }

    export const optional = (
        type_resolver: d_schema.Node_Resolver<_pi.Deprecated_Source_Location>
    ): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['optional', {
            'constraints': _p.wrap_dictionary<d_schema.Option_Constraints.D<_pi.Deprecated_Source_Location>>({}),
            'resolver': type_resolver,
        }])
    }

    export const optional_constrained = (
        constraints: _p.Raw_Or_Normal_Dictionary<d_schema.Option_Constraints.D<_pi.Deprecated_Source_Location>>,
        type_resolver: d_schema.Node_Resolver<_pi.Deprecated_Source_Location>
    ): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['optional', {
            'constraints': _p.wrap_dictionary(constraints),
            'resolver': type_resolver,
        }])
    }

    export const reference_derived = (
        value_selection: d_schema.Guaranteed_Value_Selection<_pi.Deprecated_Source_Location>
    ): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['reference', {
            'definition': null,
            'type': _p.wrap_state_group(['derived', {
                'value': value_selection,
            }])
        }])
    }

    export const reference = (
        lookup_selection: d_schema.Lookup_Selection<_pi.Deprecated_Source_Location>,
        constraints?: _p.Raw_Or_Normal_Dictionary<d_schema.Property_Constraints.D<_pi.Deprecated_Source_Location>>,
    ): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['reference', {
            'definition': null,
            'type': _p.wrap_state_group(['selected', {
                'definition': null,
                'lookup': lookup_selection,
                'constraints': _p.wrap_dictionary(constraints === undefined ? {} : constraints),
            }])
        }])
    }

    export const reference_stack = (
        lookup_selection: d_schema.Lookup_Selection<_pi.Deprecated_Source_Location>,
        constraints?: _p.Raw_Or_Normal_Dictionary<d_schema.Property_Constraints.D<_pi.Deprecated_Source_Location>>,
    ): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['reference', {
            'definition': null,
            'type': _p.wrap_state_group(['selected', {
                'definition': null,
                'lookup': lookup_selection,
                'constraints': _p.wrap_dictionary(constraints === undefined ? {} : constraints),
            }])
        }])
    }

    export const state_group = (
        states: _p.Raw_Or_Normal_Dictionary<d_schema.Node_Resolver.SG.state_group.states.D<_pi.Deprecated_Source_Location>>
    ): d_schema.Node_Resolver<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['state group', {
            'definition': null,
            'states': _p.wrap_dictionary(states),
        }])
    }
}

export const resolver = (
    type_resolver: d_schema.Node_Resolver<_pi.Deprecated_Source_Location>
): d_schema.Resolvers.D<_pi.Deprecated_Source_Location> => {
    return {
        'signature': null,
        'type resolver': type_resolver,
    }
}

export const signatures = (
    signatures: _p.Raw_Or_Normal_Dictionary<d_schema.Signatures.D<_pi.Deprecated_Source_Location>>,
): d_schema.Resolve_Logic.signatures<_pi.Deprecated_Source_Location> => {
    return {
        'types': _p.wrap_dictionary(signatures)
    }
}


export const resolvers = (
    resolvers: _p.Raw_Or_Normal_Dictionary<d_schema.Resolvers.D<_pi.Deprecated_Source_Location>>,
): d_schema.Resolvers<_pi.Deprecated_Source_Location> => {
    return _p.wrap_dictionary(resolvers)
}
export const import_ = (
    name: string,
): d_schema.Imports.D<_pi.Deprecated_Source_Location> => {
    return {
        'schema set child': _p.wrap_stack_reference(name),
        'schema': null,
    }
}

export const constrained = (
    signatures: d_schema.Resolve_Logic.signatures<_pi.Deprecated_Source_Location>,
    resolvers: d_schema.Resolvers<_pi.Deprecated_Source_Location>,
): d_schema.Schema.complexity.SG.constrained<_pi.Deprecated_Source_Location> => {
    return {
        'signatures': signatures,
        'resolvers': resolvers,
    }
}

export const unconstrained = (
): d_schema.Schema.complexity.SG.unconstrained<_pi.Deprecated_Source_Location> => {
    return null
}
export const schema_ = (
    imports: _p.Raw_Or_Normal_Dictionary<d_schema.Imports.D<_pi.Deprecated_Source_Location>>,
    globals: d_schema.Globals<_pi.Deprecated_Source_Location>,
    types: d_schema.Types<_pi.Deprecated_Source_Location>,
    resolve: null | d_schema.Schema.complexity.SG.constrained<_pi.Deprecated_Source_Location>,
): d_schema.Schemas.D<_pi.Deprecated_Source_Location> => {
    return _p.wrap_state_group(['schema', {
        'imports': _p.wrap_dictionary(imports),
        'globals': globals,
        'types': types,
        'complexity': resolve === null
            ? _p.wrap_state_group(['unconstrained', null])
            : _p.wrap_state_group(['constrained', resolve])
    }])
}