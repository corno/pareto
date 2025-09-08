import * as pd from 'exupery-core-data'

import * as unresolved from "../generated/interface/schemas/schema/data_types/unresolved"

import {
    Raw_Or_Normal_Dictionary,
    wrap_dictionary,
    wrap_list,
    wrap_reference,
    wrap_stack_reference,
    wrap_state_group,
} from 'exupery-core-data/dist/shorthands/unresolved'

/**
 * schema tree
 */
export namespace st {

    export const set = (
        schemas: Raw_Or_Normal_Dictionary<unresolved.Schema_Tree<pd.Source_Location>>,
    ): unresolved.Schema_Tree<pd.Source_Location> => {
        return wrap_state_group(1, ['set', wrap_dictionary(1, schemas)])
    }

    export const schema = (
        schema: unresolved.Schema<pd.Source_Location>,
    ): unresolved.Schema_Tree<pd.Source_Location> => {
        return wrap_state_group(1, ['schema', schema])
    }

}

export const types = (
    types: Raw_Or_Normal_Dictionary<unresolved.Types.D<pd.Source_Location>>,
): unresolved.Types<pd.Source_Location> => {
    return wrap_dictionary(1, types)
}

export const globals = (
    complexity: 'unconstrained' | 'constrained',
    text_types: Raw_Or_Normal_Dictionary<unresolved.Globals.text_types.D<pd.Source_Location>>,
    number_types: Raw_Or_Normal_Dictionary<unresolved.Globals.number_types.D<pd.Source_Location>>,
): unresolved.Globals<pd.Source_Location> => {
    return {
        'complexity': complexity === 'unconstrained'
            ? wrap_state_group(1, ['unconstrained', null])
            : wrap_state_group(1, ['constrained', null]),
        'text types': wrap_dictionary(1, text_types),
        'number types': wrap_dictionary(1, number_types),
    }
}

export const type = (type: unresolved.Type_Node<pd.Source_Location>): unresolved.Types.D<pd.Source_Location> => {
    return {
        'type parameters': wrap_dictionary(1, {}),
        'node': type,
    }
}

export const text = (type: 'single line' | 'multi line'): unresolved.Text_Type<pd.Source_Location> => {
    return {
        'type': type === 'single line' ? wrap_state_group(1, ['single line', null]) : wrap_state_group(1, ['multi line', null]),
    }
}

/**
 * number type
 */
export namespace n {

    export const integer = (decimal_separator_offset?: number): unresolved.Number_Type<pd.Source_Location> => {
        return {
            'precision': wrap_state_group<unresolved.Number_Type.precision.SG<pd.Source_Location>>(1, ['exact', {
                'decimal separator offset': decimal_separator_offset === undefined ? pd.not_set() : pd.set(decimal_separator_offset),
                'type': wrap_state_group(1, ['integer', null]),
            }])
        }
    }
    export const approximation = (significant_digits: number): unresolved.Number_Type<pd.Source_Location> => {
        return {
            'precision': wrap_state_group<unresolved.Number_Type.precision.SG<pd.Source_Location>>(1, ['approximation', {
                'significant digits': significant_digits,
            }])
        }
    }
    export const natural = (decimal_separator_offset?: number): unresolved.Number_Type<pd.Source_Location> => {
        return {
            'precision': wrap_state_group<unresolved.Number_Type.precision.SG<pd.Source_Location>>(1, ['exact', {
                'decimal separator offset': decimal_separator_offset === undefined ? pd.not_set() : pd.set(decimal_separator_offset),
                'type': wrap_state_group(1, ['natural', null]),
            }])
        }
    }
    export const positive_natural = (decimal_separator_offset?: number): unresolved.Number_Type<pd.Source_Location> => {
        return {
            'precision': wrap_state_group<unresolved.Number_Type.precision.SG<pd.Source_Location>>(1, ['exact', {
                'decimal separator offset': decimal_separator_offset === undefined ? pd.not_set() : pd.set(decimal_separator_offset),
                'type': wrap_state_group(1, ['positive natural', null]),
            }])
        }
    }

}

export const reference = (
    type: string,
): unresolved.Type_Reference<pd.Source_Location> => {
    return {
        'location': wrap_state_group(1, ['internal', wrap_reference(1, type)]),
        'resulting node': null,
    }
}

export const part_reference = (
    type: string,
    tail: unresolved.Type_Node_Reference.tail.L<pd.Source_Location>[],

): unresolved.Type_Node_Reference<pd.Source_Location> => {
    return {
        'type location': {
            'location': wrap_state_group(1, ['internal', wrap_reference(1, type)]),
            'resulting node': null,
        },
        'tail': wrap_list(1, tail),
        'resulting node': null,
    }
}

/**
 * type node
 */
export namespace t {

    export const boolean = (): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['boolean', null])
    }
    export const component = (type: string): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['component', wrap_state_group(1, ['internal', wrap_reference(1, type)])])
    }
    export const component_cyclic = (type: string): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['component', wrap_state_group(1, ['internal cyclic', wrap_reference(1, type)])])
    }
    export const component_external = (imp: string, type: string): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['component', wrap_state_group(1, ['external', {
            'import': wrap_reference(1, imp),
            'type': wrap_reference(1, type),
        }])])
    }
    export const dictionary = (type: unresolved.Type_Node<pd.Source_Location>, ordered?: 'ordered' | ''): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['dictionary', {
            'node': type,
            'ordered': ordered === 'ordered',
            'benchmark': pd.not_set(),
        }])
    }
    export const group = (properties: Raw_Or_Normal_Dictionary<unresolved.Type_Node<pd.Source_Location>>): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['group', wrap_dictionary(1, properties)])
    }
    export const identifier_value_pair = (type: unresolved.Type_Node<pd.Source_Location>): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['identifier value pair', type])
    }
    export const list = (type: unresolved.Type_Node<pd.Source_Location>): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['list', {
            'node': type,
            'result': pd.not_set(),
        }])
    }
    export const nothing = (): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['nothing', null])
    }
    export const number_global = (name: string): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['number', wrap_state_group(1, ['global', wrap_reference(1, name)])])
    }
    export const number_local = (bt: unresolved.Number_Type<pd.Source_Location>): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['number', wrap_state_group(1, ['local', bt])])
    }
    export const optional = (type: unresolved.Type_Node<pd.Source_Location>): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['optional', type])
    }
    export const reference_derived = (
        type: string,
        tail: unresolved.Type_Node_Reference.tail.L<pd.Source_Location>[],
    ): unresolved.Type_Node<pd.Source_Location> => {
        const x: unresolved.Type_Node_Reference<pd.Source_Location> = {
            'type location': {
                'location': wrap_state_group(1, ['internal', wrap_reference(1, type)]),
                'resulting node': null,
            },
            'tail': wrap_list(1, tail),
            'resulting node': null
        }
        return wrap_state_group(1, ['reference', {
            'referent': x,
            'type': wrap_state_group(1, ['derived', null]),
        }])
    }
    export const reference_derived_external = (
        imp: string,
        type: string,
        tail: unresolved.Type_Node_Reference.tail.L<pd.Source_Location>[],

    ): unresolved.Type_Node<pd.Source_Location> => {
        const x: unresolved.Type_Node_Reference<pd.Source_Location> = {
            'type location': {
                'location': wrap_state_group(1, ['external', {
                    'import': wrap_reference(1, imp),
                    'type': wrap_reference(1, type),
                }]),
                'resulting node': null
            },
            'tail': wrap_list(1, tail),
            'resulting node': null
        }

        return wrap_state_group(1, ['reference', {
            'referent': x,
            'type': wrap_state_group(1, ['derived', null]),
        }])
    }

    export const reference = (
        type: string,
        tail: unresolved.Type_Node_Reference.tail.L<pd.Source_Location>[],
        dependency?: "cyclic" | "acyclic",
    ): unresolved.Type_Node<pd.Source_Location> => {

        const p_type: unresolved.Type_Node.SG.reference._type<pd.Source_Location> = wrap_state_group(1, ['selected', {
            'referent': {
                'type location': {
                    'location': wrap_state_group(1, ['internal', wrap_reference(1, type)]),
                    'resulting node': null
                },
                'tail': wrap_list(1, tail),
                'resulting node': null
            },
            'dictionary': null,
            'dependency': dependency === "cyclic" ? wrap_state_group(1, ['cyclic', null]) : wrap_state_group(1, ['acyclic', null])
        }])
        return wrap_state_group(1, ['reference', {
            'referent': {
                'type location': {
                    'location': wrap_state_group(1, ['internal', wrap_reference(1, type)]),
                    'resulting node': null
                },
                'tail': wrap_list(1, tail),
                'resulting node': null
            },
            'type': p_type,
        }])
    }

    export const reference_stack = (
        type: string,
        tail: unresolved.Type_Node_Reference.tail.L<pd.Source_Location>[],
    ): unresolved.Type_Node<pd.Source_Location> => {

        const p_type: unresolved.Type_Node.SG.reference._type<pd.Source_Location> = wrap_state_group(1, ['selected', {
            'dictionary': null,
            'dependency': wrap_state_group(1, ['stack', null])
        }])
        return wrap_state_group(1, ['reference', {
            'referent': {
                'type location': {
                    'location': wrap_state_group(1, ['internal', wrap_reference(1, type)]),
                    'resulting node': null
                },
                'tail': wrap_list(1, tail),
                'resulting node': null
            },
            'type': p_type,
        }])
    }

    export const reference_external = (
        imp: string,

        type: string,
        tail: unresolved.Type_Node_Reference.tail.L<pd.Source_Location>[],
        dependency?: "cyclic" | "acyclic",
    ): unresolved.Type_Node<pd.Source_Location> => {

        const p_type: unresolved.Type_Node.SG.reference._type<pd.Source_Location> = wrap_state_group(1, ['selected', {
            'dictionary': null,
            'dependency': dependency === "cyclic" ? wrap_state_group(1, ['cyclic', null]) : wrap_state_group(1, ['acyclic', null])
        }])
        return wrap_state_group(1, ['reference', {
            'referent': {
                'type location': {
                    'location': wrap_state_group(1, ['external', {
                        'import': wrap_reference(1, imp),
                        'type': wrap_reference(1, type),
                    }]),
                    'resulting node': null
                },
                'tail': wrap_list(1, tail),
                'resulting node': null
            },
            'type': p_type,
        }])
    }
    export const state_group = (states: Raw_Or_Normal_Dictionary<unresolved.Type_Node<pd.Source_Location>>): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['state group', wrap_dictionary(1, states)])
    }
    export const text_global = (name: string): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['text', wrap_state_group(1, ['global', wrap_reference(1, name)])])
    }
    export const text_local = (bt: unresolved.Text_Type<pd.Source_Location>): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['text', wrap_state_group(1, ['local', bt])])
    }
    export const type_parameter = (name: string): unresolved.Type_Node<pd.Source_Location> => {
        return wrap_state_group(1, ['type parameter', wrap_reference(1, name)])
    }
}

/**
 * type node reference tail step
 */
export namespace tr {

    export const d = (): unresolved.Type_Node_Reference.tail.L<pd.Source_Location> => {
        return wrap_state_group(1, ['dictionary', null])
    }
    export const g = (grp: string): unresolved.Type_Node_Reference.tail.L<pd.Source_Location> => {
        return wrap_state_group(1, ['group', wrap_reference(1, grp)])
    }
    export const s = (state: string): unresolved.Type_Node_Reference.tail.L<pd.Source_Location> => {
        return wrap_state_group(1, ['state group', wrap_reference(1, state)])
    }
    export const o = (): unresolved.Type_Node_Reference.tail.L<pd.Source_Location> => {
        return wrap_state_group(1, ['optional', null])
    }
}



export const sig_params = (
    values: Raw_Or_Normal_Dictionary<unresolved.Signature_Parameters.values.D<pd.Source_Location>>,
    lookups: Raw_Or_Normal_Dictionary<unresolved.Signature_Parameters.lookups.D<pd.Source_Location>>,
): unresolved.Signature_Parameters<pd.Source_Location> => {
    return {
        'values': wrap_dictionary(1, values),
        'lookups': wrap_dictionary(1, lookups),
    }
}

/**
 * signature
 */
export namespace sig {

    export const local = (
        values: Raw_Or_Normal_Dictionary<unresolved.Signature_Parameters.values.D<pd.Source_Location>>,
        lookups: Raw_Or_Normal_Dictionary<unresolved.Signature_Parameters.lookups.D<pd.Source_Location>>,
    ): unresolved.Signatures.D<pd.Source_Location> => {
        return {
            'type': null,
            'parameters': wrap_state_group(1, ['local', {
                'values': wrap_dictionary(1, values),
                'lookups': wrap_dictionary(1, lookups),
            }]),
            'resolved parameters': null,
        }
    }

    export const same_as = (
        name: string
    ): unresolved.Signatures.D<pd.Source_Location> => {
        return {
            'type': null,
            'parameters': wrap_state_group(1, ['same as', wrap_reference(1, name)]),
            'resolved parameters': null,
        }
    }
}

export const value_parameter = (
    name: string,
    presence?: 'optional' | 'required',
): unresolved.Signature_Parameters.values.D<pd.Source_Location> => {
    return {
        'data type': {
            'location': wrap_state_group(1, ['internal', wrap_reference(1, name)]),
            'resulting node': null,
        },
        'presence': presence === 'optional'
            ? wrap_state_group(1, ['optional', null])
            : wrap_state_group(1, ['required', null]),
    }
}

export const value_parameter_external = (
    imp: string,
    type: string,
    presence?: 'optional' | 'required',
): unresolved.Signature_Parameters.values.D<pd.Source_Location> => {
    return {
        'data type': {
            'location': wrap_state_group(1, ['external', {
                'import': wrap_reference(1, imp),
                'type': wrap_reference(1, type),
            }]),
            'resulting node': null,
        },
        'presence': presence === 'optional'
            ? wrap_state_group(1, ['optional', null])
            : wrap_state_group(1, ['required', null]),
    }
}

export const lookup_parameter = (
    name: string,
    type?: 'acyclic' | 'cyclic' | 'stack',
    presence?: 'optional' | 'required',
): unresolved.Signature_Parameters.lookups.D<pd.Source_Location> => {
    return {
        'referent': {
            'location': wrap_state_group(1, ['internal', wrap_reference(1, name)]),
            'resulting node': null,
        },
        'dictionary': null,
        'type': type === 'cyclic'
            ? wrap_state_group(1, ['cyclic', null])
            : type === 'stack'
                ? wrap_state_group(1, ['stack', null])
                : wrap_state_group(1, ['acyclic', null]),
        'presence': presence === 'optional'
            ? wrap_state_group(1, ['optional', null])
            : wrap_state_group(1, ['required', null]),
    }
}

/**
 * lookup selection
 */
export namespace ls {

    export const parameter = (parameter: string): unresolved.Lookup_Selection<pd.Source_Location> => {
        return {
            'type': wrap_state_group(1, ['parameter', wrap_reference(1, parameter)]),
            'resulting dictionary': null
        }
    }
    export const not_circular_dependent_siblings = (): unresolved.Lookup_Selection<pd.Source_Location> => {
        return {
            'type': wrap_state_group(1, ['not circular dependent siblings', null]),
            'resulting dictionary': null
        }
    }
    export const possibly_circular_dependent_siblings = (): unresolved.Lookup_Selection<pd.Source_Location> => {
        return {
            'type': wrap_state_group(1, ['possibly circular dependent siblings', null]),
            'resulting dictionary': null
        }
    }

}

/**
 * node resolver lookup arguments
 */
export namespace al {


    export const not_set = (

    ): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<pd.Source_Location> => {
        return wrap_state_group(1, ['not set', null])
    }

    export const empty_stack = (

    ): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<pd.Source_Location> => {
        return wrap_state_group(1, ['empty stack', null])
    }

    /**
     * creates a new stack of lookup selections from an existing stack and a new element
     */
    export const stack = (
        stack: unresolved.Lookup_Selection<pd.Source_Location>,
        element: unresolved.Lookup_Selection<pd.Source_Location>,
    ): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<pd.Source_Location> => {
        return wrap_state_group(1, ['stack', {
            'stack': stack,
            'element': element,
        }])
    }

    /**
     * provides a dictionary by selecting a value (that is guaranteed to be a dictionary)
     */
    export const dictionary = (value_selection: unresolved.Guaranteed_Value_Selection<pd.Source_Location>): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<pd.Source_Location> => {
        return wrap_state_group(1, ['selection', {
            'type': wrap_state_group(1, ['dictionary', {
                'selection': value_selection,
                'selected dictionary': null,
            }]),
            'resulting dictionary': null,
        }])
    }

    /**
     * selects a lookup parameter of this resolver and passes it to the next resolver
     */
    export const parameter = (parameter: string): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<pd.Source_Location> => {
        return wrap_state_group(1, ['selection', {
            'type': wrap_state_group(1, ['parameter', wrap_reference(1, parameter)]),
            'resulting dictionary': null,
        }])
    }

    /**
     * this one is only usable in the context of an ordered dictionary
     */
    export const not_circular_dependent_siblings = (): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<pd.Source_Location> => {
        return wrap_state_group(1, ['selection', {
            'type': wrap_state_group(1, ['not circular dependent siblings', null]),
            'resulting dictionary': null,
        }])
    }

    /**
     * this one is only usable in the context of a dictionary (ordered or not)
     */
    export const possibly_circular_dependent_siblings = (): unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<pd.Source_Location> => {
        return wrap_state_group(1, ['selection', {
            'type': wrap_state_group(1, ['possibly circular dependent siblings', null]),
            'resulting dictionary': null,
        }])
    }

}

/**
 * value selection path step
 */
export namespace vst {

    export const component = (
    ): unresolved.Relative_Value_Selection.path.L<pd.Source_Location> => {
        return wrap_state_group(1, ['component', null])
    }

    export const group = (
        property: string,
    ): unresolved.Relative_Value_Selection.path.L<pd.Source_Location> => {
        return wrap_state_group(1, ['group', wrap_reference(1, property)])
    }

    export const reference = (
    ): unresolved.Relative_Value_Selection.path.L<pd.Source_Location> => {
        return wrap_state_group(1, ['reference', {
            'definition': null,
        }])
    }

    // export const state_group = (
    //     type: unresolved.Type_Node_Reference<pd.Source_Location>,
    //     states: Raw_Or_Normal_Dictionary<unresolved.Relative_Value_Selection.path.L.SG.state_group.states.D<pd.Source_Location>>,
    // ): unresolved.Relative_Value_Selection.path.L<pd.Source_Location> => {
    //     return wrap_state_group(1, ['state group', {
    //         'definition': null,
    //         'type': type,
    //         'states': wrap_dictionary(1, states),
    //     }])
    // }

}

/**
 * optional value initialization
 */
export namespace ovi {

    export const not_set = (

    ): unresolved.Optional_Value_Initialization<pd.Source_Location> => {
        return wrap_state_group(1, ['not set', null])
    }

    export const set = (
        value: unresolved.Guaranteed_Value_Selection<pd.Source_Location>,
    ): unresolved.Optional_Value_Initialization<pd.Source_Location> => {
        return wrap_state_group(1, ['set', value])
    }

    export const selection = (
        selection: unresolved.Possible_Value_Selection<pd.Source_Location>,
    ): unresolved.Optional_Value_Initialization<pd.Source_Location> => {
        return wrap_state_group(1, ['selection', selection])
    }

}

/**
 * possible value selection
 */
export namespace pvs {
    export const state_group = (
        state_group: string,
        result: unresolved.Type_Reference<pd.Source_Location>,
    ): unresolved.Possible_Value_Selection<pd.Source_Location> => {
        return wrap_state_group(1, ['result', wrap_state_group(1, ['state group', {
            'property': wrap_reference(1, state_group),
            'state group': null,
            'result': result,
        }])])
    }

    export const optional_value = (
        optional_value: string,
        result: unresolved.Type_Reference<pd.Source_Location>,
    ): unresolved.Possible_Value_Selection<pd.Source_Location> => {
        return wrap_state_group(1, ['result', wrap_state_group(1, ['optional value', {
            'property': wrap_reference(1, optional_value),
            'optional value': null,
            'result': result,
        }])])
    }

    export const parameter = (
        parameter: string,
    ): unresolved.Possible_Value_Selection<pd.Source_Location> => {
        return wrap_state_group(1, ['parameter', wrap_reference(1, parameter)])
    }

}

/**
 * guaranteed value selection
 */
export namespace gvs {

    export const dictionary = (value_selection: unresolved.Guaranteed_Value_Selection<pd.Source_Location>): unresolved.Lookup_Selection<pd.Source_Location> => {
        return {
            'type': wrap_state_group(1, ['dictionary', {
                'selection': value_selection,
                'selected dictionary': null,
            }]),
            'resulting dictionary': null,
        }
    }
    export const component = (
        component: string,
        constraint: string,
        tail: unresolved.Relative_Value_Selection.path.L<pd.Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['constraint', wrap_state_group(1, ['component', {
                'property': wrap_reference(1, component),
                'constraint': wrap_reference(1, constraint),
            }])]),
            'tail': {
                'path': wrap_list(1, tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const reference = (
        reference: string,
        constraint: string,
        tail: unresolved.Relative_Value_Selection.path.L<pd.Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['constraint', wrap_state_group(1, ['reference', {
                'property': wrap_reference(1, reference),
                'constraint': wrap_reference(1, constraint),
            }])]),
            'tail': {
                'path': wrap_list(1, tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const list = (
        list: string,
        tail: unresolved.Relative_Value_Selection.path.L<pd.Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group<unresolved.Guaranteed_Value_Selection.start.SG<pd.Source_Location>>(1, ['result', wrap_state_group(1, ['list', {
                'property': wrap_reference(1, list),
                'list result': null,
            }])]),
            'tail': {
                'path': wrap_list(1, tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const state_group = (
        state_group: string,
        result: unresolved.Type_Reference<pd.Source_Location>,
        tail: unresolved.Relative_Value_Selection.path.L<pd.Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group<unresolved.Possible_Value_Selection.SG<pd.Source_Location>>(1, ['result', wrap_state_group(1, ['state group', {
                'property': wrap_reference(1, state_group),
                'state group': null,
                'result': result,
            }])]),
            'tail': {
                'path': wrap_list(1, tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const optional_value = (
        optional_value: string,
        result: unresolved.Type_Reference<pd.Source_Location>,
        tail: unresolved.Relative_Value_Selection.path.L<pd.Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group<unresolved.Possible_Value_Selection.SG<pd.Source_Location>>(1, ['result', wrap_state_group(1, ['optional value', {
                'property': wrap_reference(1, optional_value),
                'optional value': null,
                'result': result,
            }])]),
            'tail': {
                'path': wrap_list(1, tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const parameter = (
        parameter: string,
        tail: unresolved.Relative_Value_Selection.path.L<pd.Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group<unresolved.Possible_Value_Selection.SG<pd.Source_Location>>(1, ['parameter', wrap_reference(1, parameter)]),
            'tail': {
                'path': wrap_list(1, tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const list_cursor = (
        tail: unresolved.Relative_Value_Selection.path.L<pd.Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['list cursor', null]),
            'tail': {
                'path': wrap_list(1, tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const linked_entry = (
        tail: unresolved.Relative_Value_Selection.path.L<pd.Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['linked entry', null]),
            'tail': {
                'path': wrap_list(1, tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const sibling = (
        sibling: string,
        tail: unresolved.Relative_Value_Selection.path.L<pd.Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['sibling', wrap_reference(1, sibling)]),
            'tail': {
                'path': wrap_list(1, tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const parent_sibling = (
        parent_sibling: string,
        tail: unresolved.Relative_Value_Selection.path.L<pd.Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['parent sibling', wrap_reference(1, parent_sibling)]),
            'tail': {
                'path': wrap_list(1, tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const option_constraint = (
        constraint: string,
        tail: unresolved.Relative_Value_Selection.path.L<pd.Source_Location>[],
    ): unresolved.Guaranteed_Value_Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['option constraint', wrap_reference(1, constraint)]),
            'tail': {
                'path': wrap_list(1, tail),
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
    ): unresolved.Node_Resolver.SG.component._arguments.O.values.O.D<pd.Source_Location> => {
        return wrap_state_group(1, ['parameter', wrap_reference(1, parameter)])
    }

    export const required = (
        value: unresolved.Guaranteed_Value_Selection<pd.Source_Location>,
    ): unresolved.Node_Resolver.SG.component._arguments.O.values.O.D<pd.Source_Location> => {
        return wrap_state_group(1, ['required', value])
    }

    export const optional = (
        value: unresolved.Optional_Value_Initialization<pd.Source_Location>,
    ): unresolved.Node_Resolver.SG.component._arguments.O.values.O.D<pd.Source_Location> => {
        return wrap_state_group(1, ['optional', value])
    }

}

export const state = (
    resolver: unresolved.Node_Resolver<pd.Source_Location>,
): unresolved.Node_Resolver.SG.state_group.states.D<pd.Source_Location> => {
    return {
        'constraints': wrap_dictionary(1, {}),
        'resolver': resolver,
    }
}

export const state_constrained = (
    constraints: Raw_Or_Normal_Dictionary<unresolved.Option_Constraints.D<pd.Source_Location>>,
    resolver: unresolved.Node_Resolver<pd.Source_Location>,
): unresolved.Node_Resolver.SG.state_group.states.D<pd.Source_Location> => {
    return {
        'constraints': wrap_dictionary(1, constraints),
        'resolver': resolver,
    }
}

/**
 * option constraint
 */
export namespace oc {

    export const state = (
        value_selection: unresolved.Guaranteed_Value_Selection<pd.Source_Location>,
        state: string,
    ): unresolved.Option_Constraints.D<pd.Source_Location> => {
        return wrap_state_group(1, ['state', {
            'selection': value_selection,
            'selected state group': null,
            'state': wrap_reference(1, state),
        }])
    }

    export const assert_set = (
        possibly_optional: unresolved.Possible_Value_Selection<pd.Source_Location>,
    ): unresolved.Option_Constraints.D<pd.Source_Location> => {
        return wrap_state_group(1, ['assert is set', possibly_optional])
    }

}

/**
 * property constraint
 */
export namespace pc {

    export const property = (
        value_selection_tail: unresolved.Relative_Value_Selection.path.L<pd.Source_Location>[],
        state: string,
    ): unresolved.Property_Constraints.D<pd.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['property', null]),
            'constraint': {
                'selection': {
                    'path': wrap_list(1, value_selection_tail),
                    'resulting node': null,
                },
                'type': wrap_state_group(1, ['state', {
                    'selected state group': null,
                    'state': wrap_reference(1, state),
                }])
            },
        }
    }

    export const constraint = (
        constraint: string,
        value_selection_tail: unresolved.Relative_Value_Selection.path.L<pd.Source_Location>[],
        state?: string,
    ): unresolved.Property_Constraints.D<pd.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['sibling', wrap_reference(1, constraint)]),
            'constraint': {
                'selection': {
                    'path': wrap_list(1, value_selection_tail),
                    'resulting node': null,
                },
                'type': state === undefined
                    ? wrap_state_group(1, ['optional value', {
                        'selected optional value': null,
                    }])
                    : wrap_state_group(1, ['state', {
                        'selected state group': null,
                        'state': wrap_reference(1, state),
                    }])
            },
        }
    }

}

/**
 * node resolver
 */
export namespace r {

    export const text = (): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['text', null])
    }

    export const boolean = (): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['boolean', null])
    }

    export const number = (): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['number', null])
    }
    export const component = (
        type: string,
        values: null | Raw_Or_Normal_Dictionary<unresolved.Node_Resolver.SG.component._arguments.O.values.O.D<pd.Source_Location>>,
        lookups: null | Raw_Or_Normal_Dictionary<unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<pd.Source_Location>>,
        constraints?: Raw_Or_Normal_Dictionary<unresolved.Property_Constraints.D<pd.Source_Location>>,
    ): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['component', {
            'location': wrap_state_group(1, ['internal', wrap_reference(1, type)]),
            'signature': null,
            'arguments': pd.set({
                'values': values === null ? pd.not_set() : pd.set(wrap_dictionary(1, values)),
                'lookups': lookups === null ? pd.not_set() : pd.set(wrap_dictionary(1, lookups)),
            }),
            'constraints': wrap_dictionary(1, constraints === undefined ? {} : constraints),
        }])
    }
    export const component_external = (
        imp: string,
        type: string,
        values: null | Raw_Or_Normal_Dictionary<unresolved.Node_Resolver.SG.component._arguments.O.values.O.D<pd.Source_Location>>,
        lookups: null | Raw_Or_Normal_Dictionary<unresolved.Node_Resolver.SG.component._arguments.O.lookups.O.D<pd.Source_Location>>,
        constraints?: Raw_Or_Normal_Dictionary<unresolved.Property_Constraints.D<pd.Source_Location>>,
    ): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['component', {
            'location': wrap_state_group(1, ['external', {
                'import': wrap_reference(1, imp),
                'type': wrap_reference(1, type),
            }]),
            'signature': null,
            'arguments': pd.set({
                'values': values === null ? pd.not_set() : pd.set(wrap_dictionary(1, values)),
                'lookups': lookups === null ? pd.not_set() : pd.set(wrap_dictionary(1, lookups)),
            }),
            'constraints': wrap_dictionary(1, constraints === undefined ? {} : constraints),
        }])
    }

    export const dictionary = (resolver: unresolved.Node_Resolver<pd.Source_Location>): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['dictionary', {
            'definition': null,
            'resolver': resolver,
            'benchmark': pd.not_set(),
        }])
    }

    export const dictionary_linked = (
        dense: 'dense' | 'sparse',
        selection: unresolved.Guaranteed_Value_Selection<pd.Source_Location>,
        resolver: unresolved.Node_Resolver<pd.Source_Location>,
    ): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['dictionary', {
            'definition': null,
            'resolver': resolver,
            'benchmark': pd.set({
                'selection': selection,
                'resulting dictionary': null,
                'dense': dense === 'dense',
            }),
        }])
    }

    export const group = (
        properties: Raw_Or_Normal_Dictionary<unresolved.Node_Resolver_Group.D.resolver<pd.Source_Location>> //FIXME: remove the 'this entry' step
    ): unresolved.Node_Resolver<pd.Source_Location> => {
        const location = pd.get_location_info(1)
        return wrap_state_group(1, ['group', {
            'location': location,
            'dictionary': wrap_dictionary(1, properties).dictionary.map(($) => {
                return {
                    'location': location,
                    'entry': {
                        'definition': null,
                        'resolver': $.entry
                    },
                }
            })
        }])
    }

    export const list = (
        type_resolver: unresolved.Node_Resolver<pd.Source_Location>
    ): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['list', {
            'definition': null,
            'resolver': type_resolver,
            'result': pd.not_set<unresolved.Node_Resolver.SG.list.result.O<pd.Source_Location>>(),
        }])
    }
    export const list_with_result = (
        type_resolver: unresolved.Node_Resolver<pd.Source_Location>,
        result: unresolved.Type_Reference<pd.Source_Location>,

    ): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['list', {
            'definition': null,
            'resolver': type_resolver,
            'result': pd.set(result),
        }])
    }

    export const nothing = (): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['nothing', null])
    }

    export const optional = (
        type_resolver: unresolved.Node_Resolver<pd.Source_Location>
    ): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['optional', {
            'constraints': wrap_dictionary<unresolved.Option_Constraints.D<pd.Source_Location>>(1, {}),
            'resolver': type_resolver,
        }])
    }

    export const optional_constrained = (
        constraints: Raw_Or_Normal_Dictionary<unresolved.Option_Constraints.D<pd.Source_Location>>,
        type_resolver: unresolved.Node_Resolver<pd.Source_Location>
    ): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['optional', {
            'constraints': wrap_dictionary(1, constraints),
            'resolver': type_resolver,
        }])
    }

    export const reference_derived = (
        value_selection: unresolved.Guaranteed_Value_Selection<pd.Source_Location>
    ): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['reference', {
            'definition': null,
            'type': wrap_state_group(1, ['derived', {
                'value': value_selection,
            }])
        }])
    }

    export const reference = (
        lookup_selection: unresolved.Lookup_Selection<pd.Source_Location>,
        constraints?: Raw_Or_Normal_Dictionary<unresolved.Property_Constraints.D<pd.Source_Location>>,
    ): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['reference', {
            'definition': null,
            'type': wrap_state_group(1, ['selected', {
                'definition': null,
                'lookup': lookup_selection,
                'constraints': wrap_dictionary(1, constraints === undefined ? {} : constraints),
            }])
        }])
    }

    export const reference_stack = (
        lookup_selection: unresolved.Lookup_Selection<pd.Source_Location>,
        constraints?: Raw_Or_Normal_Dictionary<unresolved.Property_Constraints.D<pd.Source_Location>>,
    ): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['reference', {
            'definition': null,
            'type': wrap_state_group(1, ['selected', {
                'definition': null,
                'lookup': lookup_selection,
                'constraints': wrap_dictionary(1, constraints === undefined ? {} : constraints),
            }])
        }])
    }

    export const state_group = (
        states: Raw_Or_Normal_Dictionary<unresolved.Node_Resolver.SG.state_group.states.D<pd.Source_Location>>
    ): unresolved.Node_Resolver<pd.Source_Location> => {
        return wrap_state_group(1, ['state group', {
            'definition': null,
            'states': wrap_dictionary(1, states),
        }])
    }
}

export const resolver = (
    type_resolver: unresolved.Node_Resolver<pd.Source_Location>
): unresolved.Resolvers.D<pd.Source_Location> => {
    return {
        'signature': null,
        'type resolver': type_resolver,
    }
}

export const signatures = (
    signatures: Raw_Or_Normal_Dictionary<unresolved.Signatures.D<pd.Source_Location>>,
): unresolved.Resolve_Logic.signatures<pd.Source_Location> => {
    return {
        'types': wrap_dictionary(1, signatures)
    }
}


export const resolvers = (
    resolvers: Raw_Or_Normal_Dictionary<unresolved.Resolvers.D<pd.Source_Location>>,
): unresolved.Resolvers<pd.Source_Location> => {
    return wrap_dictionary(1, resolvers)
}
export const import_ = (
    name: string,
): unresolved.Imports.D<pd.Source_Location> => {
    return {
        'schema set child': wrap_stack_reference(1, name),
        'schema': null,
    }
}

export const constrained = (
    signatures: unresolved.Resolve_Logic.signatures<pd.Source_Location>,
    resolvers: unresolved.Resolvers<pd.Source_Location>,
): unresolved.Schema.complexity.SG.constrained<pd.Source_Location> => {
    return {
        'signatures': signatures,
        'resolvers': resolvers,
    }
}

export const unconstrained = (
): unresolved.Schema.complexity.SG.unconstrained<pd.Source_Location> => {
    return null
}
export const schema_ = (
    imports: Raw_Or_Normal_Dictionary<unresolved.Imports.D<pd.Source_Location>>,
    globals: unresolved.Globals<pd.Source_Location>,
    types: unresolved.Types<pd.Source_Location>,
    resolve: null | unresolved.Schema.complexity.SG.constrained<pd.Source_Location>,
): unresolved.Schemas.D<pd.Source_Location> => {
    return wrap_state_group(1, ['schema', {
        'imports': wrap_dictionary(1, imports),
        'globals': globals,
        'types': types,
        'complexity': resolve === null
            ? wrap_state_group(1, ['unconstrained', null])
            : wrap_state_group(1, ['constrained', resolve])
    }])
}