import * as _p from 'pareto-core-shorthands/dist/unconstrained'
import * as _pi from 'pareto-core/dist/interface'

import * as d_target from "../interface/generated/liana/schemas/implementation/data/resolved" //THIS IS NOT CORRECT! It should be unresolved

import * as d_target_interface from "../interface/generated/liana/schemas/interface/data/resolved"


const wrap_state = <T>(value: T): T => value


export namespace sub {
    export const dictionary = (): d_target.Type_Node_Reference.sub_selection.L => wrap_state(['dictionary', null])

    export const list = (): d_target.Type_Node_Reference.sub_selection.L => wrap_state(['list', null])

    export const state = (
        name: string
    ): d_target.Type_Node_Reference.sub_selection.L => wrap_state(['state', name])

    export const group = (
        name: string,
    ): d_target.Type_Node_Reference.sub_selection.L => wrap_state(['group', name])

    export const optional = (): d_target.Type_Node_Reference.sub_selection.L => wrap_state(['optional', null])
}

export namespace vi {

    export const external = (
        id: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_target.Module.variable_imports.D => ({
        'type': wrap_state(['external', id]),
        'tail': _p.list.literal(tail),
    })

    export const sibling = (
        id: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_target.Module.variable_imports.D => ({
        'type': wrap_state(['sibling', id]),
        'tail': _p.list.literal(tail),
    })

    export const ancestor = (
        number_of_steps: number,
        id: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_target.Module.variable_imports.D => ({
        'type': wrap_state(['ancestor', {
            'number of steps': number_of_steps,
            'dependency': id,
        }]),
        'tail': _p.list.literal(tail),
    })
}



export const type_reference = (
    imp: string,
    type: string,
): d_target.Type_Reference => ({
    'import': imp,
    'type': type,
})

export const type_node_reference = (
    imp: string,
    type: string,
    sub_selection: _p.Raw_Or_Normal_List<d_target.Type_Node_Reference.sub_selection.L>,
): d_target.Type_Node_Reference => ({
    'type': {
        'import': imp,
        'type': type,
    },
    'sub selection': _p.list.literal(sub_selection)

})

export namespace m {

    export const set = (
        entries: _p.Raw_Or_Normal_Dictionary<d_target.Module_Set.D>
    ): d_target.Module_Set.D => wrap_state(['set', _p.dictionary.literal(entries)])

    export const module = (
        type: 'serializer' | 'deserializer' | 'transformer' | 'refiner',
        type_imports: _p.Raw_Or_Normal_Dictionary<d_target_interface.Imports.D>,
        variable_imports: _p.Raw_Or_Normal_Dictionary<d_target.Module.variable_imports.D>,
        algorithms: _p.Raw_Or_Normal_Dictionary<d_target.Module.algorithms.D>,
    ): d_target.Module_Set.D => wrap_state(['module', {
        'type': wrap_state(
            type === 'serializer' ? ['serializer', null] :
                type === 'deserializer' ? ['deserializer', null] :
                    type === 'transformer' ? ['transformer', null] :
                        ['refiner', null]
        ),
        'type imports': _p.dictionary.literal(type_imports),
        'variable imports': _p.dictionary.literal(variable_imports),
        'algorithms': _p.dictionary.literal(algorithms),
    }])

}

export const algorithm = (
    type: d_target.Type_Reference,
    has_abort: boolean,
    has_lookups: boolean,
    has_parameters: boolean,
    expression: d_target.Expression,
): d_target.Module.algorithms.D => ({
    'type': type,
    'expression': expression,
    'temp has abort': has_abort,
    'temp has lookups': has_lookups,
    'temp has parameters': has_parameters,
})

export const variable = (
    type: null | d_target.Type_Node_Reference,
    expression: d_target.Expression,
): d_target.Expression.special.block.variables.D => ({
    'type': type === null ? _p.optional.not_set() : _p.optional.set(type),
    'expression': expression,
})

export const temp_ordered_variable = (
    name: string,
    type: null | d_target.Type_Node_Reference,
    expression: d_target.Expression,
): d_target.Expression.special.block.temp_ordered_variables.L => ({
    'name': name,
    'type': type === null ? _p.optional.not_set() : _p.optional.set(type),
    'expression': expression,
})

export namespace e {

    export namespace boolean {

        export const false_ = (): d_target.Expression => wrap_state(['initialize', wrap_state(['boolean', wrap_state(['literal', wrap_state(['false', null])])])])

        export const true_ = (): d_target.Expression => wrap_state(['initialize', wrap_state(['boolean', wrap_state(['literal', wrap_state(['true', null])])])])

        export const copy = (
            selection: d_target.Selection
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['boolean', wrap_state(['copy', selection])])])

    }

    export namespace list {

        export const literal = (
            elements: _p.Raw_Or_Normal_List<d_target.Expression>
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['list', wrap_state(['literal', _p.list.literal(elements)])])])

        export const map = (
            source: d_target.Selection,
            element_handler: d_target.Expression
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['list', wrap_state(['map', {
            'source': source,
            'item handler': element_handler
        }])])])

    }

    export const change_context = (
        new_context: d_target.Selection,
        expression: d_target.Expression
    ): d_target.Expression => wrap_state(['special', wrap_state(['change context', {
        'new context': new_context,
        'expression': expression
    }])])

    export const block = (
        ordered_variables: _p.Raw_Or_Normal_List<d_target.Expression.special.block.temp_ordered_variables.L>,
        variables: _p.Raw_Or_Normal_Dictionary<d_target.Expression.special.block.variables.D>,
        expression: d_target.Expression
    ): d_target.Expression => wrap_state(['special', wrap_state(['block', {
        'temp ordered variables': _p.list.literal(ordered_variables),
        'variables': _p.dictionary.literal(variables),
        'expression': expression
    }])])

    export namespace dictionary {

        export const literal = (
            entries: _p.Raw_Or_Normal_Dictionary<d_target.Expression>
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['dictionary', wrap_state(['literal', _p.dictionary.literal(entries)])])])

        export const map = (
            source: d_target.Selection,
            entry_handler: d_target.Expression
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['dictionary', wrap_state(['map', {
            'source': source,
            'entry handler': entry_handler
        }])])])

    }

    export const group = (
        properties: _p.Raw_Or_Normal_Dictionary<d_target.Expression>
    ): d_target.Expression => wrap_state(['initialize', wrap_state(['group', _p.dictionary.literal(properties)])])

    export const implement_me = (description: string): d_target.Expression => wrap_state(['special', wrap_state(['implement me', description])])
    export const unreachable = (): d_target.Expression => wrap_state(['special', wrap_state(['unreachable', null])])

    export namespace number {

        export const approximation_literal = (
            value: number
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['number', wrap_state(['approximation', wrap_state(['literal', value])])])])

        export const approximation_copy = (
            source: d_target.Selection
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['number', wrap_state(['approximation', wrap_state(['copy', source])])])])

        export const integer_literal = (
            value: number
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['number', wrap_state(['integer', wrap_state(['literal', value])])])])

        export const integer_copy = (
            source: d_target.Selection
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['number', wrap_state(['integer', wrap_state(['copy', source])])])])

        export const natural_literal = (
            value: number
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['number', wrap_state(['natural', wrap_state(['literal', value])])])])

        export const natural_copy = (
            source: d_target.Selection
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['number', wrap_state(['natural', wrap_state(['copy', source])])])])

    }

    export const nothing = (): d_target.Expression => wrap_state(['initialize', wrap_state(['nothing', null])])

    export namespace optional {

        export const not_set = (): d_target.Expression => wrap_state(['initialize', wrap_state(['optional', wrap_state(['literal', wrap_state(['not set', null])])])])

        export const map = (
            source: d_target.Selection,
            expression: d_target.Expression
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['optional', wrap_state(['map', {
            'source': source,
            'set handler': expression
        }])])])

        export const set = (
            value: d_target.Expression
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['optional', wrap_state(['literal', wrap_state(['set', value])])])])

    }

    export namespace decide {

        export const optional = (
            source: d_target.Selection,
            if_set: d_target.Expression,
            if_not_set: d_target.Expression,
            resulting_type?: d_target.Type_Node_Reference,
        ): d_target.Expression => wrap_state(['decide', {
            'type': wrap_state(['optional', {
                'source': source,
                'if set': if_set,
                'if not set': if_not_set,
                'temp resulting node': _p.optional.literal(resulting_type),

            }])
        }])

        export const state = (
            source: d_target.Selection,
            cases: _p.Raw_Or_Normal_Dictionary<d_target.Expression.decide.type_.state.type_.full.cases.D>,
            resulting_type?: null | d_target.Type_Node_Reference,
        ): d_target.Expression => wrap_state(['decide', {
            'type': wrap_state(['state', {
                'source': source,
                'temp resulting node': (resulting_type === null || resulting_type === undefined) ? _p.optional.not_set() : _p.optional.set(resulting_type),
                'type': wrap_state(['full', {
                    'cases': _p.dictionary.literal(cases),
                }])
            }])
        }])

        export const state_partial = (
            source: d_target.Selection,
            cases: _p.Raw_Or_Normal_Dictionary<d_target.Expression.decide.type_.state.type_.partial.cases.D>,
            default_: d_target.Expression,
            resulting_type?: null | d_target.Type_Node_Reference,
        ): d_target.Expression => wrap_state(['decide', {
            'type': wrap_state(['state', {
                'source': source,
                'temp resulting node': (resulting_type === null || resulting_type === undefined) ? _p.optional.not_set() : _p.optional.set(resulting_type),
                'type': wrap_state(['partial', {
                    'cases': _p.dictionary.literal(cases),
                    'default': default_
                }])
            }])
        }])

    }

    export const select = (
        selection: d_target.Selection
    ): d_target.Expression => wrap_state(['special', wrap_state(['select', selection])])

    export namespace state {

        export const literal = (
            option: string,
            value: d_target.Expression
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['state', wrap_state(['literal', {
            'option': option,
            'value': value,
        }])])])

    }

    export namespace text {

        export const literal = (
            value: string,
            type: 'identifier' | 'freeform'
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['text', wrap_state(['literal', {
            'type': ((): d_target.Expression.initialize.text.literal.type_ => type === 'identifier' ? wrap_state(['identifier', null]) : wrap_state(['freeform', null]))(),
            'value': value,
        }])])])

        export const copy = (
            selection: d_target.Selection
        ): d_target.Expression => wrap_state(['initialize', wrap_state(['text', wrap_state(['copy', selection])])])

    }

}

export namespace s {

    export const implement_me = (description: string): d_target.Selection => wrap_state(['implement me', description])

    export const call = (
        source: d_target.Selection,
        context: d_target.Expression,
        abort: null | d_target.Expression,
        arguments_: null | _p.Raw_Or_Normal_Dictionary<d_target.Selection.regular.start.call.arguments_.O.D>,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.regular.tail.L>
    ): d_target.Selection => wrap_state(['regular', {
        'start': wrap_state(['call', {
            'source': source,
            'context': context,
            'abort': abort === null ? _p.optional.not_set() : _p.optional.set(abort),
            'arguments': arguments_ === null ? _p.optional.not_set() : _p.optional.set(_p.dictionary.literal(arguments_)),
        }]),
        'tail': _p.list.literal(tail),
    }])

    export const from_context = (
        tail: _p.Raw_Or_Normal_List<d_target.Selection.regular.tail.L>
    ): d_target.Selection => wrap_state(['regular', {
        'start': wrap_state(['context', null]),
        'tail': _p.list.literal(tail),
    }])

    export const from_entry = (
        dictionary: d_target.Selection,
        id: d_target.Expression,
        abort_handler: d_target.Expression,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.regular.tail.L>
    ): d_target.Selection => wrap_state(['regular', {
        'start': wrap_state<d_target.Selection.regular.start>(['entry', {
            'dictionary': dictionary,
            'id': id,
            'abort handler': abort_handler
        }]),
        'tail': _p.list.literal(tail),
    }])

    export const from_variable = (
        name: string,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.regular.tail.L>

    ): d_target.Selection => wrap_state(['regular', {
        'start': wrap_state(['variable', wrap_state(['local', name])]),
        'tail': _p.list.literal(tail),
    }])

    export const from_parameter = (
        name: string,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.regular.tail.L>

    ): d_target.Selection => wrap_state(['regular', {
        'start': wrap_state(['parameter', name]),
        'tail': _p.list.literal(tail),
    }])

    export const from_variable_import = (
        imp: string,
        variable: string,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.regular.tail.L>
    ): d_target.Selection => wrap_state(['regular', {
        'start': wrap_state(['variable', wrap_state(['imported', {
            'import': imp,
            'variable': variable,
        }])]),
        'tail': _p.list.literal(tail),
    }])

}