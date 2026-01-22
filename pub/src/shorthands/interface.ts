import * as _p from 'pareto-core-shorthands/dist/unconstrained'
import * as _pi from 'pareto-core/dist/interface'

import * as d_out from "../interface/generated/pareto/schemas/interface/data/resolved"


const wrap_state_group = <T>(value: T): T => {
    return value
}
export namespace m {

    export const set = (
        entries: _p.Raw_Or_Normal_Dictionary<d_out.Module_Set.D>
    ): d_out.Module_Set.D => {
        return wrap_state_group(['set', _p.dictionary.literal(entries)])
    }

    export const module = (
        imports: _p.Raw_Or_Normal_Dictionary<d_out.Imports.D>,
        types: _p.Raw_Or_Normal_Dictionary<d_out.Module.types.D>,
    ): d_out.Module_Set.D => {
        return wrap_state_group(['module', {
            'imports': _p.dictionary.literal(imports),
            'types': _p.dictionary.literal(types),
        }])
    }

}
export namespace import_ {

    export const external = (
        key: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_out.Imports.D => {
        return {
            'type': wrap_state_group(['external', key]),
            'tail': _p.list.literal(tail),
        }
    }

    export const sibling = (
        key: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_out.Imports.D => {
        return {
            'type': wrap_state_group(['sibling', key]),
            'tail': _p.list.literal(tail),
        }
    }
    export const ancestor = (
        number_of_steps: number,
        key: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_out.Imports.D => {
        return {
            'type': wrap_state_group(['ancestor', {
                'number of steps': number_of_steps,
                'dependency': key,
            }]),
            'tail': _p.list.literal(tail),
        }
    }
}

export namespace sub {
    export const dictionary = (): d_out.Type.reference.sub_selection.L => {
        return wrap_state_group(['dictionary', null])
    }

    export const list = (): d_out.Type.reference.sub_selection.L => {
        return wrap_state_group(['list', null])
    }
    export const state_group = (name: string): d_out.Type.reference.sub_selection.L => {
        return wrap_state_group(['state group', name])
    }
    export const group = (
        name: string,
    ): d_out.Type.reference.sub_selection.L => {
        return wrap_state_group(['group', name])
    }
    export const optional = (): d_out.Type.reference.sub_selection.L => wrap_state_group(['optional', null])
}


export const acyclic_lookup = (
    type: d_out.Type,
): d_out.Module.types.D.algorithm.type_.refiner.lookups.O.D => ['acyclic', type]

export const cyclic_lookup = (
    type: d_out.Type,
): d_out.Module.types.D.algorithm.type_.refiner.lookups.O.D => ['cyclic', type]
export const stack_lookup = (
    type: d_out.Type,
): d_out.Module.types.D.algorithm.type_.refiner.lookups.O.D => ['stack', type]

export namespace t {

    export const boolean = (): d_out.Type => {
        return wrap_state_group(['boolean', null])
    }

    // export const deprecated_parameter_module = (
    //     parameter: string,
    // ): d_out.Type => {
    //     return wrap_state_group(['deprecated parameter', {
    //         'location': wrap_state_group(['module', null]),
    //         'parameter': parameter,
    //     }])
    // }

    // export const deprecated_parametertype_ = (
    //     parameter: string,
    // ): d_out.Type => {
    //     return wrap_state_group(['deprecated parameter', {
    //         'location': wrap_state_group(['type', null]),
    //         'parameter': parameter,
    //     }])
    // }

    // export const deprecated_parameter_function = (
    //     parameter: string,
    // ): d_out.Type => {
    //     return wrap_state_group(['deprecated parameter', {
    //         'location': wrap_state_group(['function', null]),
    //         'parameter': parameter,
    //     }])
    // }

    export const component_sibling = (
        sibling: string,
    ): d_out.Type => {
        return wrap_state_group(['component', {
            'location': wrap_state_group(['sibling', sibling])
        }])
    }

    export const component_imported = (
        imp: string,
        type: string,
    ): d_out.Type => {
        return wrap_state_group(['component', {
            'location': wrap_state_group(['import', {
                'import': imp,
                'type': type,
            }]),
        }])
    }

    export const dictionary = (
        type: d_out.Type
    ): d_out.Type => {
        return wrap_state_group(['dictionary', type])
    }

    export const group = (
        properties: _p.Raw_Or_Normal_Dictionary<d_out.Type>
    ): d_out.Type => {
        return wrap_state_group(['group', _p.dictionary.literal(properties)])
    }

    export const list = (
        type: d_out.Type
    ): d_out.Type => {
        return wrap_state_group(['list', type])
    }

    export const nothing = (): d_out.Type => {
        return wrap_state_group(['nothing', null])
    }

    export const number_approximation = (): d_out.Type => {
        return wrap_state_group(['number', wrap_state_group(['approximation', null])])
    }

    export const integer = (): d_out.Type => {
        return wrap_state_group(['number', wrap_state_group(['exact', wrap_state_group(['integer', null])])])
    }

    export const natural = (): d_out.Type => {
        return wrap_state_group(['number', wrap_state_group(['exact', wrap_state_group(['natural', null])])])
    }

    export const optional = (
        type: d_out.Type
    ): d_out.Type => {
        return wrap_state_group(['optional', type])
    }

    export const reference_sibling = (
        sibling: string,
        circular_dependent: boolean,
        sub_selection: _p.Raw_Or_Normal_List<d_out.Type.reference.sub_selection.L>,
    ): d_out.Type => {
        return wrap_state_group(['reference', {
            'location': wrap_state_group(['sibling', {
                'sibling': sibling,
                'circular dependent': circular_dependent,
            }]),
            'sub selection': _p.list.literal(sub_selection)
        }])
    }

    export const reference_imported = (
        imp: string,
        type: string,
        sub_selection: _p.Raw_Or_Normal_List<d_out.Type.reference.sub_selection.L>,
    ): d_out.Type => {
        return wrap_state_group(['reference', {
            'location': wrap_state_group(['import', {
                'import': imp,
                'type': type,
            }]),
            'sub selection': _p.list.literal(sub_selection)

        }])
    }

    export const state_group = (
        states: _p.Raw_Or_Normal_Dictionary<d_out.Type>
    ): d_out.Type => {
        return wrap_state_group(['state group', _p.dictionary.literal(states)])
    }

    export const text = (): d_out.Type => {
        return wrap_state_group(['text', null])
    }

}

export namespace type {

    export const data = (
        type: d_out.Type
    ): d_out.Module.types.D => {
        return ['data', type]
    }


    export const transformer = (
        context: d_out.Type,
        result: d_out.Type,
        parameters: null | _p.Raw_Or_Normal_Dictionary<d_out.Type>,
    ): d_out.Module.types.D => {
        return wrap_state_group(['algorithm', {
            'context': context,
            'result': result,
            'type': wrap_state_group(['transformer', null]),
            'parameters': parameters === null ? _p.optional.not_set() : _p.optional.set(_p.dictionary.literal(parameters)),
            'lookups': _p.optional.not_set(),
        }])
    }

    export const refiner = (
        context: d_out.Type,
        result: d_out.Type,
        error: null | d_out.Type,
        lookups: null | _p.Raw_Or_Normal_Dictionary<d_out.Module.types.D.algorithm.type_.refiner.lookups.O.D>,
        parameters: null | _p.Raw_Or_Normal_Dictionary<d_out.Type>,
    ): d_out.Module.types.D => {
        return wrap_state_group(['algorithm', {
            'context': context,
            'parameters': parameters === null ? _p.optional.not_set() : _p.optional.set(_p.dictionary.literal(parameters)),
            'result': result,
            'type': wrap_state_group(['refiner', {
                'error': error === null ? _p.optional.not_set() : _p.optional.set(error),
                'lookups': lookups === null ? _p.optional.not_set() : _p.optional.set(_p.dictionary.literal(lookups)),
            }]),
        }])
    }
}