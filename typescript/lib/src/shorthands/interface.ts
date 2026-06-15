import * as pt from 'pareto-core-shorthands/dist/unconstrained'

import * as d_out from "../interface/generated/liana/schemas/interface/data/resolved"


const wrap_state = <T>(value: T): T => {
    return value
}
export namespace m {

    export const set = (
        entries: pt.Raw_Or_Normal_Dictionary<d_out.Package_Set.D>
    ): d_out.Package_Set.D => {
        return wrap_state(['set', pt.dictionary(entries)])
    }

    export const package_data = (
        imports: pt.Raw_Or_Normal_Dictionary<d_out.Imports.D>,
        types: pt.Raw_Or_Normal_Dictionary<d_out.Package.content.data_modules.D>,
    ): d_out.Package_Set.D => {
        return wrap_state(['package', {
            'imports': pt.dictionary(imports),
            'content': wrap_state(['data modules', pt.dictionary(types)]),
        }])
    }

    export const package_functions = (
        imports: pt.Raw_Or_Normal_Dictionary<d_out.Imports.D>,
        types: pt.Raw_Or_Normal_Dictionary<d_out.Package.content.functions.D>,
    ): d_out.Package_Set.D => {
        return wrap_state(['package', {
            'imports': pt.dictionary(imports),
            'content': wrap_state(['functions', pt.dictionary(types)]),
        }])
    }

}
export namespace import_ {

    export const external = (
        id: string,
        tail: pt.Raw_Or_Normal_List<string>,
    ): d_out.Imports.D => {
        return {
            'type': wrap_state(['external', id]),
            'tail': pt.list(tail),
        }
    }

    export const sibling = (
        id: string,
        tail: pt.Raw_Or_Normal_List<string>,
    ): d_out.Imports.D => {
        return {
            'type': wrap_state(['sibling', id]),
            'tail': pt.list(tail),
        }
    }
    export const ancestor = (
        number_of_steps: number,
        id: string,
        tail: pt.Raw_Or_Normal_List<string>,
    ): d_out.Imports.D => {
        return {
            'type': wrap_state(['ancestor', {
                'number of steps': number_of_steps,
                'dependency': id,
            }]),
            'tail': pt.list(tail),
        }
    }
}

export namespace sub {
    export const dictionary = (): d_out.Value.reference.sub_selection.L => {
        return wrap_state(['dictionary', null])
    }

    export const list = (): d_out.Value.reference.sub_selection.L => {
        return wrap_state(['list', null])
    }
    export const state = (name: string): d_out.Value.reference.sub_selection.L => {
        return wrap_state(['state', name])
    }
    export const group = (
        name: string,
    ): d_out.Value.reference.sub_selection.L => {
        return wrap_state(['group', name])
    }
    export const optional = (): d_out.Value.reference.sub_selection.L => wrap_state(['optional', null])
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
        return wrap_state(['boolean', null])
    }

    export const component_sibling = (
        sibling: string,
    ): d_out.Value => {
        return wrap_state(['component', {
            'location': wrap_state(['local', sibling])
        }])
    }

    export const component_imported = (
        imp: string,
        type: string,
    ): d_out.Value => {
        return wrap_state(['component', {
            'location': wrap_state(['import', {
                'import': imp,
                'type': type,
            }]),
        }])
    }

    export const dictionary = (
        type: d_out.Value
    ): d_out.Value => {
        return wrap_state(['dictionary', type])
    }

    export const group = (
        properties: pt.Raw_Or_Normal_Dictionary<d_out.Value>
    ): d_out.Value => {
        return wrap_state(['group', pt.dictionary(properties)])
    }

    export const list = (
        type: d_out.Value
    ): d_out.Value => {
        return wrap_state(['list', type])
    }

    export const nothing = (): d_out.Value => {
        return wrap_state(['nothing', null])
    }

    export const number_approximation = (): d_out.Value => {
        return wrap_state(['number', wrap_state(['approximation', null])])
    }

    export const integer = (): d_out.Value => {
        return wrap_state(['number', wrap_state(['exact', wrap_state(['integer', null])])])
    }

    export const natural = (): d_out.Value => {
        return wrap_state(['number', wrap_state(['exact', wrap_state(['natural', null])])])
    }

    export const optional = (
        type: d_out.Value
    ): d_out.Value => {
        return wrap_state(['optional', type])
    }

    export const reference = (
        location: d_out.Module_Reference,
        sub_selection: pt.Raw_Or_Normal_List<d_out.Value.reference.sub_selection.L>,
        cyclic?: 'cyclic' | 'acyclic'
    ): d_out.Value => {
        return wrap_state(['reference', {
            'location': location,
            'sub selection': pt.list(sub_selection),
            'cyclic': cyclic === undefined
                ? false
                : cyclic === 'cyclic' ? true : false,
        }])
    }

    // export const reference_sibling = (
    //     sibling: string,
    //     sub_selection: pt.Raw_Or_Normal_List<d_out.Value.reference.acyclic.sub_selection.L>,
    // ): d_out.Value => {
    //     return wrap_state(['reference', ['acyclic', {
    //         'location': wrap_state(['local', sibling]),
    //         'sub selection': pt.list(sub_selection)
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
    //     sub_selection: pt.Raw_Or_Normal_List<d_out.Value.reference.acyclic.sub_selection.L>,
    // ): d_out.Value => {
    //     return wrap_state(['reference', ['acyclic', {
    //         'location': wrap_state(['import', {
    //             'import': imp,
    //             'type': type,
    //         }]),
    //         'sub selection': pt.list(sub_selection)

    //     }]])
    // }

    export const state = (
        states: pt.Raw_Or_Normal_Dictionary<d_out.Value>
    ): d_out.Value => {
        return wrap_state(['state', pt.dictionary(states)])
    }

    export const text = (): d_out.Value => {
        return wrap_state(['text', null])
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
        parameters: null | pt.Raw_Or_Normal_Dictionary<d_out.Value>,
    ): d_out.Package.content.functions.D => {
        return {
            'context': context,
            'result': result,
            'type': wrap_state(['transformer', null]),
            'parameters': parameters === null ? pt.optional.not_set() : pt.optional.set(pt.dictionary(parameters)),
        }
    }

    export const refiner = (
        context: d_out.Value,
        result: d_out.Value,
        error: null | d_out.Value,
        lookups: null | pt.Raw_Or_Normal_Dictionary<d_out.Package.content.functions.D.type_.refiner.lookups.O.D>,
        parameters: null | pt.Raw_Or_Normal_Dictionary<d_out.Value>,
    ): d_out.Package.content.functions.D => {
        return {
            'context': context,
            'parameters': parameters === null ? pt.optional.not_set() : pt.optional.set(pt.dictionary(parameters)),
            'result': result,
            'type': wrap_state(['refiner', {
                'error': error === null ? pt.optional.not_set() : pt.optional.set(error),
                'lookups': lookups === null ? pt.optional.not_set() : pt.optional.set(pt.dictionary(lookups)),
            }]),
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