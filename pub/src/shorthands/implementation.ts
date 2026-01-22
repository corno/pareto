import * as _p from 'pareto-core-shorthands/dist/unconstrained'
import * as _pi from 'pareto-core/dist/interface'

import * as d_target from "../interface/generated/pareto/schemas/implementation/data/resolved" //THIS IS NOT CORRECT! It should be unresolved

import * as d_target_interface from "../interface/generated/pareto/schemas/interface/data/resolved"


const wrap_state_group = <T>(value: T): T => {
    return value
}
export namespace vi {

    export const external = (
        key: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_target.Module.variable_imports.D => ({
        'type': wrap_state_group(['external', key]),
        'tail': _p.list.literal(tail),
    })

    export const sibling = (
        key: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_target.Module.variable_imports.D => ({
        'type': wrap_state_group(['sibling', key]),
        'tail': _p.list.literal(tail),
    })

    export const ancestor = (
        number_of_steps: number,
        key: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_target.Module.variable_imports.D => ({
        'type': wrap_state_group(['ancestor', {
            'number of steps': number_of_steps,
            'dependency': key,
        }]),
        'tail': _p.list.literal(tail),
    })
}



export const type_reference = (
    imp: string,
    type: string,
): d_target.Type_Reference => {
    return {
        'import': imp,
        'type': type,
    }
}

export const type_node_reference = (
    imp: string,
    type: string,
    sub_selection: _p.Raw_Or_Normal_List<d_target.Type_Node_Reference.sub_selection.L>,
): d_target.Type_Node_Reference => {
    return {
        'type': {
            'import': imp,
            'type': type,
        },
        'sub selection': _p.list.literal(sub_selection)

    }
}

export namespace m {

    export const set = (
        entries: _p.Raw_Or_Normal_Dictionary<d_target.Module_Set.D>
    ): d_target.Module_Set.D => wrap_state_group(['set', _p.dictionary.literal(entries)])

    export const module = (
        type: 'serializer' | 'deserializer' | 'transformer' | 'refiner',
        type_imports: _p.Raw_Or_Normal_Dictionary<d_target_interface.Imports.D>,
        variable_imports: _p.Raw_Or_Normal_Dictionary<d_target.Module.variable_imports.D>,
        algorithms: _p.Raw_Or_Normal_Dictionary<d_target.Module.algorithms.D>,
    ): d_target.Module_Set.D => wrap_state_group(['module', {
        'type': wrap_state_group(
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
    has_error: boolean,
    has_lookups: boolean,
    has_parameters: boolean,
    expression: d_target.Expression,
): d_target.Module.algorithms.D => {

    return {
        'type': type,
        'expression': expression,
        'temp has error': has_error,
        'temp has lookups': has_lookups,
        'temp has parameters': has_parameters,
    }
}

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

    export const argument_selection_deprecated = (
        argument: string,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.tail.L>
    ): d_target.Expression => wrap_state_group(['special', wrap_state_group(['selection deprecated', {
        'start': wrap_state_group(['argument', argument]),
        'tail': _p.list.literal(tail),
    }])])

    export const list_literal = (
        elements: _p.Raw_Or_Normal_List<d_target.Expression>
    ): d_target.Expression => wrap_state_group(['initialize', wrap_state_group(['list', wrap_state_group(['literal', _p.list.literal(elements)])])])

    export const list_map = (
        source: d_target.Selection,
        element_handler: d_target.Expression
    ): d_target.Expression => wrap_state_group(['initialize', wrap_state_group(['list', wrap_state_group(['map', {
        'source': source,
        'element handler': element_handler
    }])])])

    export const call = (
        source: d_target.Selection,
        context: d_target.Expression,
        abort: boolean,
        arguments_?: _p.Raw_Or_Normal_Dictionary<d_target.Expression.initialize.component.call.arguments_.O.D>,
    ): d_target.Expression => {
        const args: d_target.Expression.initialize.component.call.arguments_ = arguments_ === undefined ? _p.optional.not_set() : _p.optional.set(_p.dictionary.literal(arguments_))
        return wrap_state_group(['initialize', wrap_state_group(['component', wrap_state_group(['call', {
            'source': source,
            'context': context,
            'arguments': args,
            'abort': abort,
        }])])])
    }

    export const case_ = (
        name: string,
        value: d_target.Expression
    ): d_target.Expression => wrap_state_group(['initialize', wrap_state_group(['state group', wrap_state_group(['literal', {
        'state': name,
        'value': value,
    }])])])

    export const change_context = (
        new_context: d_target.Selection,
        expression: d_target.Expression
    ): d_target.Expression => wrap_state_group(['special', wrap_state_group(['change context', {
        'new context': new_context,
        'expression': expression
    }])])

    export const block = (
        ordered_variables: _p.Raw_Or_Normal_List<d_target.Expression.special.block.temp_ordered_variables.L>,
        variables: _p.Raw_Or_Normal_Dictionary<d_target.Expression.special.block.variables.D>,
        expression: d_target.Expression
    ): d_target.Expression => {
        return wrap_state_group(['special', wrap_state_group(['block', {
            'temp ordered variables': _p.list.literal(ordered_variables),
            'variables': _p.dictionary.literal(variables),
            'expression': expression
        }])])
    }

    export const dictionary_literal = (
        entries: _p.Raw_Or_Normal_Dictionary<d_target.Expression>
    ): d_target.Expression => {
        return wrap_state_group(['initialize', wrap_state_group(['dictionary', wrap_state_group(['literal', _p.dictionary.literal(entries)])])])
    }

    export const dictionary_map = (
        source: d_target.Selection,
        entry_handler: d_target.Expression
    ): d_target.Expression => {
        return wrap_state_group(['initialize', wrap_state_group(['dictionary', wrap_state_group(['map', {
            'source': source,
            'entry handler': entry_handler
        }])])])
    }

    export const false_ = (): d_target.Expression => {
        return wrap_state_group(['initialize', wrap_state_group(['boolean', wrap_state_group(['literal', wrap_state_group(['false', null])])])])
    }

    export const approximation = (
        value: number
    ): d_target.Expression => {
        return wrap_state_group(['initialize', wrap_state_group(['number', wrap_state_group(['approximation', wrap_state_group(['literal', value])])])])
    }

    export const group = (
        properties: _p.Raw_Or_Normal_Dictionary<d_target.Expression>
    ): d_target.Expression => wrap_state_group(['initialize', wrap_state_group(['group', _p.dictionary.literal(properties)])])

    export const implement_me = (): d_target.Expression => wrap_state_group(['special', wrap_state_group(['implement me', null])])
    export const unreachable = (): d_target.Expression => wrap_state_group(['special', wrap_state_group(['unreachable', null])])

    export const integer = (
        value: number
    ): d_target.Expression => wrap_state_group(['initialize', wrap_state_group(['number', wrap_state_group(['integer', wrap_state_group(['literal', value])])])])

    export const not_set = (): d_target.Expression => wrap_state_group(['initialize', wrap_state_group(['optional', wrap_state_group(['literal', wrap_state_group(['not set', null])])])])

    export const null_ = (): d_target.Expression => wrap_state_group(['initialize', wrap_state_group(['nothing', null])])

    export const optional_map = (
        source: d_target.Selection,
        expression: d_target.Expression
    ): d_target.Expression => wrap_state_group(['initialize', wrap_state_group(['optional', wrap_state_group(['map', {
        'source': source,
        'set handler': expression
    }])])])

    export const decide_optional = (
        source: d_target.Selection,
        if_set: d_target.Expression,
        if_not_set: d_target.Expression,
        resulting_type?: d_target.Type_Node_Reference,
    ): d_target.Expression => wrap_state_group(['decide', {
        'type': wrap_state_group(['optional', {
            'source': source,
            'if set': if_set,
            'if not set': if_not_set,
            'temp resulting node': (resulting_type !== undefined)
                ? _p.optional.set(resulting_type)
                : _p.optional.not_set<d_target.Type_Node_Reference>(),

        }])
    }])

    export const select_deprecated = (
        selection: d_target.Selection
    ): d_target.Expression => wrap_state_group(['special', wrap_state_group(['selection deprecated', selection])])

    export const select_from_context_deprecated = (
        tail: _p.Raw_Or_Normal_List<d_target.Selection.tail.L>
    ): d_target.Expression => wrap_state_group(['special', wrap_state_group(['selection deprecated', {
        'start': wrap_state_group(['context', null]),
        'tail': _p.list.literal(tail),
    }])])

    export const select_from_variable_deprecated = (
        variable: string,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.tail.L>
    ): d_target.Expression => wrap_state_group(['special', wrap_state_group(['selection deprecated', {
        'start': wrap_state_group(['variable', wrap_state_group(['local', variable])]),
        'tail': _p.list.literal(tail),
    }])])

    export const select_from_parameter_deprecated = (
        variable: string,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.tail.L>
    ): d_target.Expression => wrap_state_group(['special', wrap_state_group(['selection deprecated', {
        'start': wrap_state_group(['parameter', variable]),
        'tail': _p.list.literal(tail),
    }])])

    export const set = (
        value: d_target.Expression
    ): d_target.Expression => wrap_state_group(['initialize', wrap_state_group(['optional', wrap_state_group(['literal', wrap_state_group(['set', value])])])])

    export const string = (
        value: string,
        delimiter: 'quote' | 'backtick'
    ): d_target.Expression => wrap_state_group(['initialize', wrap_state_group(['text', wrap_state_group(['literal', {
        'delimiter': ((): d_target.Expression.initialize.text.literal.delimiter => delimiter === 'quote' ? wrap_state_group(['quote', null]) : wrap_state_group(['backtick', null]))(),
        'value': value,
    }])])])

    export const decide_state_group = (
        source: d_target.Selection,
        cases: _p.Raw_Or_Normal_Dictionary<d_target.Expression.decide.type_.state_group.type_.full.cases.D>,
        resulting_type?: null | d_target.Type_Node_Reference,
    ): d_target.Expression => wrap_state_group(['decide', {
        'type': wrap_state_group(['state group', {
            'source': source,
            'temp resulting node': (resulting_type === null || resulting_type === undefined) ? _p.optional.not_set() : _p.optional.set(resulting_type),
            'type': wrap_state_group(['full', {
                'cases': _p.dictionary.literal(cases),
            }])
        }])
    }])

    export const decide_state_group_partial = (
        source: d_target.Selection,
        cases: _p.Raw_Or_Normal_Dictionary<d_target.Expression.decide.type_.state_group.type_.partial.cases.D>,
        default_: d_target.Expression,
        resulting_type?: null | d_target.Type_Node_Reference,
    ): d_target.Expression => wrap_state_group(['decide', {
        'type': wrap_state_group(['state group', {
            'source': source,
            'temp resulting node': (resulting_type === null || resulting_type === undefined) ? _p.optional.not_set() : _p.optional.set(resulting_type),
            'type': wrap_state_group(['partial', {
                'cases': _p.dictionary.literal(cases),
                'default': default_
            }])
        }])
    }])


    export const tagged_union = (
        state: string,
        value: d_target.Expression
    ): d_target.Expression => wrap_state_group(['initialize', wrap_state_group(['state group', wrap_state_group(['literal', {
        'state': state,
        'value': value,
    }])])])

    export const true_ = (): d_target.Expression => wrap_state_group(['initialize', wrap_state_group(['boolean', wrap_state_group(['literal', wrap_state_group(['true', null])])])])

    export const variable_selection_deprecated = (
        variable: string,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.tail.L>
    ): d_target.Expression => wrap_state_group(['special', wrap_state_group(['selection deprecated', {
        'start': wrap_state_group(['variable', wrap_state_group(['local', variable])]),
        'tail': _p.list.literal(tail),
    }])])

}

export namespace s {

    export const implement_me = (): d_target.Selection => ({
        'start': wrap_state_group(['implement me', null]),
        'tail': _p.list.literal([])
    })

    export const call = (
        source: d_target.Selection,
        context: d_target.Selection,
        arguments_: _p.Raw_Or_Normal_Dictionary<d_target.Selection.start.call.arguments_.O.D>,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.tail.L>
    ): d_target.Selection => ({
        'start': wrap_state_group(['call', {
            'source': source,
            'context': context,
            'arguments': arguments_ === undefined ? _p.optional.not_set() : _p.optional.set(_p.dictionary.literal(arguments_)),
        }]),
        'tail': _p.list.literal(tail),
    })

    export const abort_deprecated = (
    ): d_target.Selection => ({
        'start': wrap_state_group(['abort deprecated', null]),
        'tail': _p.list.literal([]),
    })

    export const from_context = (
        tail: _p.Raw_Or_Normal_List<d_target.Selection.tail.L>
    ): d_target.Selection => ({
        'start': wrap_state_group(['context', null]),
        'tail': _p.list.literal(tail),
    })

    export const from_variable = (
        name: string,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.tail.L>

    ): d_target.Selection => ({
        'start': wrap_state_group(['variable', wrap_state_group(['local', name])]),
        'tail': _p.list.literal(tail),
    })

    export const from_parameter = (
        name: string,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.tail.L>

    ): d_target.Selection => ({
        'start': wrap_state_group(['parameter', name]),
        'tail': _p.list.literal(tail),
    })

    export const from_variable_import = (
        imp: string,
        variable: string,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.tail.L>

    ): d_target.Selection => ({
        'start': wrap_state_group(['variable', wrap_state_group(['imported', {
            'import': imp,
            'variable': variable,
        }])]),
        'tail': _p.list.literal(tail),
    })

    export const from_argument = (
        name: string,
        tail: _p.Raw_Or_Normal_List<d_target.Selection.tail.L>

    ): d_target.Selection => ({
        'start': wrap_state_group(['argument', name]),
        'tail': _p.list.literal(tail),
    })

}