import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../../submodules/interface/interface/schemas/resolved.js"

export namespace m {

    export const set = (
        entries: p_.Normal_Dictionary<s_out.Package_Set.D>
    ): s_out.Package_Set.D => {
        return ['set', p_.dictionary(entries)]
    }

    export const package_data = (
        imports: p_.Normal_Dictionary<s_out.Imports.D>,
        types: p_.Normal_Dictionary<s_out.Package.content.data_modules.D>,
    ): s_out.Package_Set.D => {
        return ['package', {
            'imports': p_.dictionary(imports),
            'content': ['data modules', p_.dictionary(types)],
        }]
    }

    export const package_functions = (
        imports: p_.Normal_Dictionary<s_out.Imports.D>,
        types: p_.Normal_Dictionary<s_out.Package.content.functions.D>,
    ): s_out.Package_Set.D => {
        return ['package', {
            'imports': p_.dictionary(imports),
            'content': ['functions', p_.dictionary(types)],
        }]
    }

}
export namespace import_ {

    export const external = (
        id: string,
        tail: p_.Normal_List<string>,
    ): s_out.Imports.D => {
        return {
            'type': ['external', id],
            'tail': p_.list(tail),
        }
    }

    export const sibling = (
        id: string,
        tail: p_.Normal_List<string>,
    ): s_out.Imports.D => {
        return {
            'type': ['sibling', id],
            'tail': p_.list(tail),
        }
    }
    export const ancestor = (
        number_of_steps: number,
        id: string,
        tail: p_.Normal_List<string>,
    ): s_out.Imports.D => {
        return {
            'type': ['ancestor', {
                'number of steps': number_of_steps,
                'dependency': id,
            }],
            'tail': p_.list(tail),
        }
    }
}

export namespace sub {
    export const dictionary = (): s_out.Value.reference.sub_selection.L => {
        return ['dictionary', null]
    }

    export const list = (): s_out.Value.reference.sub_selection.L => {
        return ['list', null]
    }
    export const state = (name: string): s_out.Value.reference.sub_selection.L => {
        return ['state', name]
    }
    export const group = (
        name: string,
    ): s_out.Value.reference.sub_selection.L => {
        return ['group', name]
    }
    export const optional = (): s_out.Value.reference.sub_selection.L => ['optional', null]
}


export const acyclic_lookup = (
    type: s_out.Value,
): s_out.Package.content.functions.D.type_.refiner.lookups.O.D => ['acyclic', type]

export const cyclic_lookup = (
    type: s_out.Value,
): s_out.Package.content.functions.D.type_.refiner.lookups.O.D => ['cyclic', type]
export const stack_lookup = (
    type: s_out.Value,
): s_out.Package.content.functions.D.type_.refiner.lookups.O.D => ['stack', type]

export namespace t {

    export const boolean = (): s_out.Value => {
        return ['boolean', null]
    }

    export const component_sibling = (
        sibling: string,
    ): s_out.Value => {
        return ['component', {
            'location': ['local', sibling]
        }]
    }

    export const component_imported = (
        imp: string,
        type: string,
    ): s_out.Value => {
        return ['component', {
            'location': ['import', {

                'import': imp,
                'type': type,
            }],
        }]
    }

    export const dictionary = (
        type: s_out.Value
    ): s_out.Value => {
        return ['dictionary', type]
    }

    export const group = (
        properties: p_.Normal_Dictionary<s_out.Value>
    ): s_out.Value => {
        return ['group', p_.dictionary(properties)]
    }

    export const list = (
        type: s_out.Value
    ): s_out.Value => {
        return ['list', type]
    }

    export const nothing = (): s_out.Value => {
        return ['nothing', null]
    }

    export const number_approximation = (): s_out.Value => {
        return ['number', ['approximation', null]]
    }

    export const integer = (): s_out.Value => {
        return ['number', ['exact', ['integer', null]]]
    }

    export const natural = (): s_out.Value => {
        return ['number', ['exact', ['natural', null]]]
    }

    export const optional = (
        type: s_out.Value
    ): s_out.Value => {
        return ['optional', type]
    }

    export const reference = (
        location: s_out.Module_Reference,
        sub_selection: p_.Normal_List<s_out.Value.reference.sub_selection.L>,
        cyclic?: 'cyclic' | 'acyclic'
    ): s_out.Value => {
        return ['reference', {
            'location': location,
            'sub selection': p_.list(sub_selection),
            'cyclic': cyclic === undefined
                ? false
                : cyclic === 'cyclic' ? true : false,
        }]
    }

    // export const reference_sibling = (
    //     sibling: string,
    //     sub_selection: p_.Normal_List<s_out.Value.reference.acyclic.sub_selection.L>,
    // ): s_out.Value => {
    //     return wrap_state(['reference', ['acyclic', {
    //         'location': ['local', sibling],
    //         'sub selection': p_.list(sub_selection)
    //     }]])
    // }

    // export const reference_sibling_cyclic = (
    //     sibling: string,
    // ): s_out.Value => {
    //     return wrap_state(['reference', ['cyclic', {
    //         'sibling': sibling
    //     }]])
    // }

    // export const reference_imported = (
    //     imp: string,
    //     type: string,
    //     sub_selection: p_.Normal_List<s_out.Value.reference.acyclic.sub_selection.L>,
    // ): s_out.Value => {
    //     return wrap_state(['reference', ['acyclic', {
    //         'location': wrap_state(['import', {
    //             'import': imp,
    //             'type': type,
    //         }]),
    //         'sub selection': p_.list(sub_selection)

    //     }]])
    // }

    export const state = (
        states: p_.Normal_Dictionary<s_out.Value>
    ): s_out.Value => {
        return ['state', p_.dictionary(states)]
    }

    export const text = (): s_out.Value => {
        return ['text', null]
    }

}

export namespace type {

    export const data = (
        type: s_out.Value
    ): s_out.Package.content.data_modules.D => {
        return type
    }


    export const transformer = (
        context: s_out.Value,
        result: s_out.Value,
        parameters: null | p_.Normal_Dictionary<s_out.Value>,
    ): s_out.Package.content.functions.D => {
        return {
            'context': context,
            'result': result,
            'type': ['transformer', null],
            'parameters': parameters === null
                ? p_.optional.not_set() :
                p_.optional.set(p_.dictionary(parameters)),
        }
    }

    export const refiner = (
        context: s_out.Value,
        result: s_out.Value,
        error: null | s_out.Value,
        lookups: null | p_.Normal_Dictionary<s_out.Package.content.functions.D.type_.refiner.lookups.O.D>,
        parameters: null | p_.Normal_Dictionary<s_out.Value>,
    ): s_out.Package.content.functions.D => {
        return {
            'context': context,
            'parameters': parameters === null
                ? p_.optional.not_set()
                : p_.optional.set(p_.dictionary(parameters)),
            'result': result,
            'type': ['refiner', {
                'error': error === null
                    ? p_.optional.not_set()
                    : p_.optional.set(error),
                'lookups': lookups === null
                    ? p_.optional.not_set()
                    : p_.optional.set(p_.dictionary(lookups)),
            }],
        }
    }
}

export namespace mr {

    export const local = (
        sibling: string,
    ): s_out.Module_Reference => ['local', sibling]

    export const imported = (
        imp: string,
        type: string,
    ): s_out.Module_Reference => ['import', {
        'import': imp,
        'type': type,
    }]

}