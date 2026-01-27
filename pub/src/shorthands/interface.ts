import * as _p from 'pareto-core-shorthands/dist/unconstrained'
import * as _pi from 'pareto-core/dist/interface'

import * as d_out from "../interface/generated/liana/schemas/interface/data/resolved"


const wrap_state = <T>(value: T): T => {
    return value
}
export namespace m {

    export const set = (
        entries: _p.Raw_Or_Normal_Dictionary<d_out.Module_Set.D>
    ): d_out.Module_Set.D => {
        return wrap_state(['set', _p.dictionary.literal(entries)])
    }

    export const module = (
        imports: _p.Raw_Or_Normal_Dictionary<d_out.Imports.D>,
        types: _p.Raw_Or_Normal_Dictionary<d_out.Module.types.D>,
    ): d_out.Module_Set.D => {
        return wrap_state(['module', {
            'imports': _p.dictionary.literal(imports),
            'types': _p.dictionary.literal(types),
        }])
    }

}
export namespace import_ {

    export const external = (
        id: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_out.Imports.D => {
        return {
            'type': wrap_state(['external', id]),
            'tail': _p.list.literal(tail),
        }
    }

    export const sibling = (
        id: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_out.Imports.D => {
        return {
            'type': wrap_state(['sibling', id]),
            'tail': _p.list.literal(tail),
        }
    }
    export const ancestor = (
        number_of_steps: number,
        id: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_out.Imports.D => {
        return {
            'type': wrap_state(['ancestor', {
                'number of steps': number_of_steps,
                'dependency': id,
            }]),
            'tail': _p.list.literal(tail),
        }
    }
}

export namespace sub {
    export const dictionary = (): d_out.Type_Node.reference.sub_selection.L => {
        return wrap_state(['dictionary', null])
    }

    export const list = (): d_out.Type_Node.reference.sub_selection.L => {
        return wrap_state(['list', null])
    }
    export const state = (name: string): d_out.Type_Node.reference.sub_selection.L => {
        return wrap_state(['state', name])
    }
    export const group = (
        name: string,
    ): d_out.Type_Node.reference.sub_selection.L => {
        return wrap_state(['group', name])
    }
    export const optional = (): d_out.Type_Node.reference.sub_selection.L => wrap_state(['optional', null])
}


export const acyclic_lookup = (
    type: d_out.Type_Node,
): d_out.Module.types.D.algorithm.type_.refiner.lookups.O.D => ['acyclic', type]

export const cyclic_lookup = (
    type: d_out.Type_Node,
): d_out.Module.types.D.algorithm.type_.refiner.lookups.O.D => ['cyclic', type]
export const stack_lookup = (
    type: d_out.Type_Node,
): d_out.Module.types.D.algorithm.type_.refiner.lookups.O.D => ['stack', type]

export namespace t {

    export const boolean = (): d_out.Type_Node => {
        return wrap_state(['boolean', null])
    }

    export const component_sibling = (
        sibling: string,
    ): d_out.Type_Node => {
        return wrap_state(['component', {
            'location': wrap_state(['local', sibling])
        }])
    }

    export const component_imported = (
        imp: string,
        type: string,
    ): d_out.Type_Node => {
        return wrap_state(['component', {
            'location': wrap_state(['import', {
                'import': imp,
                'type': type,
            }]),
        }])
    }

    export const dictionary = (
        type: d_out.Type_Node
    ): d_out.Type_Node => {
        return wrap_state(['dictionary', type])
    }

    export const group = (
        properties: _p.Raw_Or_Normal_Dictionary<d_out.Type_Node>
    ): d_out.Type_Node => {
        return wrap_state(['group', _p.dictionary.literal(properties)])
    }

    export const list = (
        type: d_out.Type_Node
    ): d_out.Type_Node => {
        return wrap_state(['list', type])
    }

    export const nothing = (): d_out.Type_Node => {
        return wrap_state(['nothing', null])
    }

    export const number_approximation = (): d_out.Type_Node => {
        return wrap_state(['number', wrap_state(['approximation', null])])
    }

    export const integer = (): d_out.Type_Node => {
        return wrap_state(['number', wrap_state(['exact', wrap_state(['integer', null])])])
    }

    export const natural = (): d_out.Type_Node => {
        return wrap_state(['number', wrap_state(['exact', wrap_state(['natural', null])])])
    }

    export const optional = (
        type: d_out.Type_Node
    ): d_out.Type_Node => {
        return wrap_state(['optional', type])
    }

    export const reference = (
        location: d_out.Type_Reference,
        sub_selection: _p.Raw_Or_Normal_List<d_out.Type_Node.reference.sub_selection.L>,
    ): d_out.Type_Node => {
        return wrap_state(['reference', {
            'location': location,
            'sub selection': _p.list.literal(sub_selection),
            'cyclic': false,
        }])
    }

    export const reference_cyclic = (
        location: d_out.Type_Reference,
        sub_selection: _p.Raw_Or_Normal_List<d_out.Type_Node.reference.sub_selection.L>,
    ): d_out.Type_Node => {
        return wrap_state(['reference', {
            'location': location,
            'sub selection': _p.list.literal(sub_selection),
            'cyclic': true
        }])
    }

    // export const reference_sibling = (
    //     sibling: string,
    //     sub_selection: _p.Raw_Or_Normal_List<d_out.Type_Node.reference.acyclic.sub_selection.L>,
    // ): d_out.Type_Node => {
    //     return wrap_state(['reference', ['acyclic', {
    //         'location': wrap_state(['local', sibling]),
    //         'sub selection': _p.list.literal(sub_selection)
    //     }]])
    // }

    // export const reference_sibling_cyclic = (
    //     sibling: string,
    // ): d_out.Type_Node => {
    //     return wrap_state(['reference', ['cyclic', {
    //         'sibling': sibling
    //     }]])
    // }

    // export const reference_imported = (
    //     imp: string,
    //     type: string,
    //     sub_selection: _p.Raw_Or_Normal_List<d_out.Type_Node.reference.acyclic.sub_selection.L>,
    // ): d_out.Type_Node => {
    //     return wrap_state(['reference', ['acyclic', {
    //         'location': wrap_state(['import', {
    //             'import': imp,
    //             'type': type,
    //         }]),
    //         'sub selection': _p.list.literal(sub_selection)

    //     }]])
    // }

    export const state = (
        states: _p.Raw_Or_Normal_Dictionary<d_out.Type_Node>
    ): d_out.Type_Node => {
        return wrap_state(['state', _p.dictionary.literal(states)])
    }

    export const text = (): d_out.Type_Node => {
        return wrap_state(['text', null])
    }

}

export namespace type {

    export const data = (
        type: d_out.Type_Node
    ): d_out.Module.types.D => {
        return ['data', type]
    }


    export const transformer = (
        context: d_out.Type_Node,
        result: d_out.Type_Node,
        parameters: null | _p.Raw_Or_Normal_Dictionary<d_out.Type_Node>,
    ): d_out.Module.types.D => {
        return wrap_state(['algorithm', {
            'context': context,
            'result': result,
            'type': wrap_state(['transformer', null]),
            'parameters': parameters === null ? _p.optional.not_set() : _p.optional.set(_p.dictionary.literal(parameters)),
            'lookups': _p.optional.not_set(),
        }])
    }

    export const refiner = (
        context: d_out.Type_Node,
        result: d_out.Type_Node,
        error: null | d_out.Type_Node,
        lookups: null | _p.Raw_Or_Normal_Dictionary<d_out.Module.types.D.algorithm.type_.refiner.lookups.O.D>,
        parameters: null | _p.Raw_Or_Normal_Dictionary<d_out.Type_Node>,
    ): d_out.Module.types.D => {
        return wrap_state(['algorithm', {
            'context': context,
            'parameters': parameters === null ? _p.optional.not_set() : _p.optional.set(_p.dictionary.literal(parameters)),
            'result': result,
            'type': wrap_state(['refiner', {
                'error': error === null ? _p.optional.not_set() : _p.optional.set(error),
                'lookups': lookups === null ? _p.optional.not_set() : _p.optional.set(_p.dictionary.literal(lookups)),
            }]),
        }])
    }
}

export namespace tr {

    export const local = (
        sibling: string,
    ): d_out.Type_Reference => ['local', sibling]

    export const imported = (
        imp: string,
        type: string,
    ): d_out.Type_Reference => ['import', {
        'import': imp,
        'type': type,
    }]

}