import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as d_out from "../../modules/interface/interface/data/resolved.js"

export namespace m {

    export const set = (
        entries: p_.Normal_Dictionary<d_out.Package_Set.D>
    ): d_out.Package_Set.D => {
        return ['set', p_.dictionary(entries)]
    }

    export const package_data = (
        imports: p_.Normal_Dictionary<d_out.Imports.D>,
        types: p_.Normal_Dictionary<d_out.Package.content.data_modules.D>,
    ): d_out.Package_Set.D => {
        return ['package', {
            'imports': p_.dictionary(imports),
            'content': ['data modules', p_.dictionary(types)],
        }]
    }

    export const package_functions = (
        imports: p_.Normal_Dictionary<d_out.Imports.D>,
        types: p_.Normal_Dictionary<d_out.Package.content.functions.D>,
    ): d_out.Package_Set.D => {
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
    ): d_out.Imports.D => {
        return {
            'type': ['external', id],
            'tail': p_.list(tail),
        }
    }

    export const sibling = (
        id: string,
        tail: p_.Normal_List<string>,
    ): d_out.Imports.D => {
        return {
            'type': ['sibling', id],
            'tail': p_.list(tail),
        }
    }
    export const ancestor = (
        number_of_steps: number,
        id: string,
        tail: p_.Normal_List<string>,
    ): d_out.Imports.D => {
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
    export const dictionary = (): d_out.Value.reference.sub_selection.L => {
        return ['dictionary', null]
    }

    export const list = (): d_out.Value.reference.sub_selection.L => {
        return ['list', null]
    }
    export const state = (name: string): d_out.Value.reference.sub_selection.L => {
        return ['state', name]
    }
    export const group = (
        name: string,
    ): d_out.Value.reference.sub_selection.L => {
        return ['group', name]
    }
    export const optional = (): d_out.Value.reference.sub_selection.L => ['optional', null]
}


export const acyclic_lookup = (
    type: d_out.Value,
): d_out.Package.content.functions.D.type_.refiner.lookups.O.D => ['acyclic', type]

export const cyclic_lookup = (
    type: d_out.Value,
): d_out.Package.content.functions.D.type_.refiner.lookups.O.D => ['cyclic', type]
export const stack_lookup = (
    type: d_out.Value,
): d_out.Package.content.functions.D.type_.refiner.lookups.O.D => ['stack', type]

export namespace t {

    export const boolean = (): d_out.Value => {
        return ['boolean', null]
    }

    export const component_sibling = (
        sibling: string,
    ): d_out.Value => {
        return ['component', {
            'location': ['local', sibling]
        }]
    }

    export const component_imported = (
        imp: string,
        type: string,
    ): d_out.Value => {
        return ['component', {
            'location': ['import', {

                'import': imp,
                'type': type,
            }],
        }]
    }

    export const dictionary = (
        type: d_out.Value
    ): d_out.Value => {
        return ['dictionary', type]
    }

    export const group = (
        properties: p_.Normal_Dictionary<d_out.Value>
    ): d_out.Value => {
        return ['group', p_.dictionary(properties)]
    }

    export const list = (
        type: d_out.Value
    ): d_out.Value => {
        return ['list', type]
    }

    export const nothing = (): d_out.Value => {
        return ['nothing', null]
    }

    export const number_approximation = (): d_out.Value => {
        return ['number', ['approximation', null]]
    }

    export const integer = (): d_out.Value => {
        return ['number', ['exact', ['integer', null]]]
    }

    export const natural = (): d_out.Value => {
        return ['number', ['exact', ['natural', null]]]
    }

    export const optional = (
        type: d_out.Value
    ): d_out.Value => {
        return ['optional', type]
    }

    export const reference = (
        location: d_out.Module_Reference,
        sub_selection: p_.Normal_List<d_out.Value.reference.sub_selection.L>,
        cyclic?: 'cyclic' | 'acyclic'
    ): d_out.Value => {
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
    //     sub_selection: p_.Normal_List<d_out.Value.reference.acyclic.sub_selection.L>,
    // ): d_out.Value => {
    //     return wrap_state(['reference', ['acyclic', {
    //         'location': ['local', sibling],
    //         'sub selection': p_.list(sub_selection)
    //     }]])
    // }

    // export const reference_sibling_cyclic = (
    //     sibling: string,
    // ): d_out.Value => {
    //     return wrap_state(['reference', ['cyclic', {
    //         'sibling': sibling
    //     }]])
    // }

    // export const reference_imported = (
    //     imp: string,
    //     type: string,
    //     sub_selection: p_.Normal_List<d_out.Value.reference.acyclic.sub_selection.L>,
    // ): d_out.Value => {
    //     return wrap_state(['reference', ['acyclic', {
    //         'location': wrap_state(['import', {
    //             'import': imp,
    //             'type': type,
    //         }]),
    //         'sub selection': p_.list(sub_selection)

    //     }]])
    // }

    export const state = (
        states: p_.Normal_Dictionary<d_out.Value>
    ): d_out.Value => {
        return ['state', p_.dictionary(states)]
    }

    export const text = (): d_out.Value => {
        return ['text', null]
    }

}

export namespace type {

    export const data = (
        type: d_out.Value
    ): d_out.Package.content.data_modules.D => {
        return type
    }


    export const transformer = (
        context: d_out.Value,
        result: d_out.Value,
        parameters: null | p_.Normal_Dictionary<d_out.Value>,
    ): d_out.Package.content.functions.D => {
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
        context: d_out.Value,
        result: d_out.Value,
        error: null | d_out.Value,
        lookups: null | p_.Normal_Dictionary<d_out.Package.content.functions.D.type_.refiner.lookups.O.D>,
        parameters: null | p_.Normal_Dictionary<d_out.Value>,
    ): d_out.Package.content.functions.D => {
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
    ): d_out.Module_Reference => ['local', sibling]

    export const imported = (
        imp: string,
        type: string,
    ): d_out.Module_Reference => ['import', {
        'import': imp,
        'type': type,
    }]

}