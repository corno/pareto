import * as _p from 'pareto-core-shorthands/dist/unconstrained'
import * as _pi from 'pareto-core/dist/interface'

import * as d_target from "../interface/generated/liana/schemas/implementation/data/resolved" //THIS IS NOT CORRECT! It should be unresolved

import * as d_target_interface from "../interface/generated/liana/schemas/interface/data/resolved"


const wrap_state = <T>(value: T): T => value


export namespace sub {
    export const dictionary = (): d_target.Temp_Value_Type_Specification.sub_selection.L => wrap_state(['dictionary', null])

    export const list = (): d_target.Temp_Value_Type_Specification.sub_selection.L => wrap_state(['list', null])

    export const state = (
        name: string
    ): d_target.Temp_Value_Type_Specification.sub_selection.L => wrap_state(['state', name])

    export const group = (
        name: string,
    ): d_target.Temp_Value_Type_Specification.sub_selection.L => wrap_state(['group', name])

    export const optional = (): d_target.Temp_Value_Type_Specification.sub_selection.L => wrap_state(['optional', null])
}

export namespace vi {

    export const external = (
        id: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_target.Package.variable_imports.D => ({
        'type': wrap_state(['external', id]),
        'tail': _p.list.literal(tail),
    })

    export const sibling = (
        id: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_target.Package.variable_imports.D => ({
        'type': wrap_state(['sibling', id]),
        'tail': _p.list.literal(tail),
    })

    export const ancestor = (
        number_of_steps: number,
        id: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): d_target.Package.variable_imports.D => ({
        'type': wrap_state(['ancestor', {
            'number of steps': number_of_steps,
            'dependency': id,
        }]),
        'tail': _p.list.literal(tail),
    })
}

export const type_node_reference = (
    imp: string,
    type: string,
    sub_selection: _p.Raw_Or_Normal_List<d_target.Temp_Value_Type_Specification.sub_selection.L>,
): d_target.Temp_Value_Type_Specification => ({
    'type': {
        'import': imp,
        'type': type,
    },
    'sub selection': _p.list.literal(sub_selection)

})

export namespace m {

    export const set = (
        entries: _p.Raw_Or_Normal_Dictionary<d_target.Package_Set.D>
    ): d_target.Package_Set.D => wrap_state(['set', _p.dictionary.literal(entries)])

    export const package_ = (
        specials: _p.Raw_Or_Normal_List<
            | 'abort'
            | 'change context'
            | 'implement me'
            | 'iterate'
            | 'list from text'
            | 'lookups'
            | 'text from list'
            | 'unreachable code path'
            | 'variables'
        >,
        type_imports: _p.Raw_Or_Normal_Dictionary<d_target_interface.Imports.D>,
        variable_imports: _p.Raw_Or_Normal_Dictionary<d_target.Package.variable_imports.D>,
        functions: _p.Raw_Or_Normal_Dictionary<d_target.Package.functions.D>,
    ): d_target.Package_Set.D => {
        const temp_specials = {
            'abort': false,
            'change context': false,
            'implement me': false,
            'iterate': false,
            'lookups': false,
            'list from text': false,
            'text from list': false,
            'unreachable code path': false,
            'variables': false,
        }
        _p.list.literal(specials).__l_map(($) => {
            switch ($) {
                case 'abort': temp_specials['abort'] = true; break
                case 'change context': temp_specials['change context'] = true; break
                case 'implement me': temp_specials['implement me'] = true; break
                case 'iterate': temp_specials['iterate'] = true; break
                case 'list from text': temp_specials['list from text'] = true; break
                case 'lookups': temp_specials['lookups'] = true; break
                case 'text from list': temp_specials['text from list'] = true; break
                case 'unreachable code path': temp_specials['unreachable code path'] = true; break
                case 'variables': temp_specials['variables'] = true; break
            }
        })
        return wrap_state(['package', {
            'specials': temp_specials,
            'type imports': _p.dictionary.literal(type_imports),
            'variable imports': _p.dictionary.literal(variable_imports),
            'functions': _p.dictionary.literal(functions),
        }])
    }

}

export const algorithm = (
    imp: string,
    type: string,
    specials: _p.Raw_Or_Normal_List<
        | 'abort'
        | 'lookups'
        | 'parameters'
    >,
    expression: d_target.Assign,
): d_target.Package.functions.D => {
    let has_abort = false
    let has_lookups = false
    let has_parameters = false
    _p.list.literal(specials).__l_map(($) => {
        switch ($) {
            case 'abort': has_abort = true; break
            case 'lookups': has_lookups = true; break
            case 'parameters': has_parameters = true; break

        }
    })
    return ({
        'type': {
            'import': imp,
            'type': type,
        },
        'expression': expression,
        'temp has abort': has_abort,
        'temp has lookups': has_lookups,
        'temp has parameters': has_parameters,
    })
}

export namespace a {

    export const abort = (
        expression: d_target.Assign
    ): d_target.Assign => wrap_state(['special', wrap_state(['abort', expression])])

    export namespace boolean {

        export const false_ = (): d_target.Assign => wrap_state(['construct', wrap_state(['boolean', wrap_state(['literal', wrap_state(['false', null])])])])

        export const true_ = (): d_target.Assign => wrap_state(['construct', wrap_state(['boolean', wrap_state(['literal', wrap_state(['true', null])])])])

        export const copy = (
            selection: d_target.Select_Value
        ): d_target.Assign => wrap_state(['construct', wrap_state(['boolean', wrap_state(['from', {
            'selection': selection,
            'type': wrap_state(['boolean', wrap_state(['copy', null])])
        }])])])

    }

    export const change_context = (
        new_context: d_target.Select_Value,
        expression: d_target.Assign
    ): d_target.Assign => wrap_state(['special', wrap_state(['change context', {
        'new context': new_context,
        'expression': expression
    }])])

    export namespace decide {

        export const optional = (
            source: d_target.Select_Value,
            if_set: d_target.Assign,
            if_not_set: d_target.Assign,
            resulting_type?: null | d_target.Temp_Value_Type_Specification,
        ): d_target.Assign => wrap_state(['decide', {
            'source': source,
            'type': wrap_state(['optional', {
                'if set': if_set,
                'if not set': if_not_set,
                'temp resulting node': _p.optional.literalx(resulting_type),

            }])
        }])

        export const state = (
            source: d_target.Select_Value,
            cases: _p.Raw_Or_Normal_Dictionary<d_target.Assign.decide.type_.state.type_.full.options.D>,
            resulting_type: null | d_target.Temp_Value_Type_Specification,
        ): d_target.Assign => wrap_state(['decide', {
            'source': source,
            'type': wrap_state(['state', {
                'temp resulting node': (resulting_type === null || resulting_type === undefined) ? _p.optional.literal.not_set() : _p.optional.literal.set(resulting_type),
                'type': wrap_state(['full', {
                    'options': _p.dictionary.literal(cases),
                }])
            }])
        }])

        export const state_partial = (
            source: d_target.Select_Value,
            cases: _p.Raw_Or_Normal_Dictionary<d_target.Assign.decide.type_.state.type_.partial.options.D>,
            default_: d_target.Assign,
            resulting_type: null | d_target.Temp_Value_Type_Specification,
        ): d_target.Assign => wrap_state(['decide', {
            'source': source,
            'type': wrap_state(['state', {
                'temp resulting node': (resulting_type === null || resulting_type === undefined) ? _p.optional.literal.not_set() : _p.optional.literal.set(resulting_type),
                'type': wrap_state(['partial', {
                    'options': _p.dictionary.literal(cases),
                    'default': default_
                }])
            }])
        }])

        export const state_single = (
            source: d_target.Select_Value,
            option: string,
            if_true: d_target.Assign,
            if_false: d_target.Assign,
            resulting_type: null | d_target.Temp_Value_Type_Specification,
        ): d_target.Assign => wrap_state(['decide', {
            'source': source,
            'type': wrap_state(['state', {
                'temp resulting node': (resulting_type === null || resulting_type === undefined) ? _p.optional.literal.not_set() : _p.optional.literal.set(resulting_type),
                'type': wrap_state(['single', {
                    'option': option,
                    'if true': if_true,
                    'if false': if_false,
                }])
            }])
        }])

        export const text = (
            source: d_target.Select_Value,
            cases: _p.Raw_Or_Normal_Dictionary<d_target.Assign.decide.type_.text.cases.D>,
            default_: d_target.Assign,
            resulting_type: null | d_target.Temp_Value_Type_Specification,
        ): d_target.Assign => wrap_state(['decide', {
            'source': source,
            'type': wrap_state(['text', {
                'temp resulting node': (resulting_type === null || resulting_type === undefined) ? _p.optional.literal.not_set() : _p.optional.literal.set(resulting_type),
                'cases': _p.dictionary.literal(cases),
                'default': default_
            }])
        }])

    }

    export namespace dictionary {

        export const literal = (
            entries: _p.Raw_Or_Normal_Dictionary<d_target.Assign>
        ): d_target.Assign => wrap_state(['construct', wrap_state(['dictionary', wrap_state(['literal', _p.dictionary.literal(entries)])])])

        export const map = (
            source: d_target.Select_Value,
            entry_handler: d_target.Assign
        ): d_target.Assign => wrap_state(['construct', wrap_state(['dictionary', wrap_state(['from', {
            'selection': source,
            'type': wrap_state(['dictionary', wrap_state(['map', {
                'assign entry': entry_handler
            }])])
        }])])])

        export const resolve = (
            source: d_target.Select_Value,
            entry_handler: d_target.Assign,
            temp_resulting_entry_node: d_target.Temp_Value_Type_Specification,
        ): d_target.Assign => wrap_state(['construct', wrap_state(['dictionary', wrap_state(['from', {
            'selection': source,
            'type': wrap_state(['dictionary', wrap_state(['resolve', {
                'assign entry': entry_handler,
                'temp resulting entry node': temp_resulting_entry_node,
            }])])
        }])])])

    }

    export namespace group {

        export const literal = (
            properties: _p.Raw_Or_Normal_Dictionary<d_target.Assign>
        ): d_target.Assign => wrap_state(['construct', wrap_state(['group', wrap_state(['literal', {
            'properties': _p.dictionary.literal(properties),
            'have dependencies': false,
        }])])])

        export const resolve = (
            properties: _p.Raw_Or_Normal_Dictionary<d_target.Assign>
        ): d_target.Assign => wrap_state(['construct', wrap_state(['group', wrap_state(['literal', {
            'properties': _p.dictionary.literal(properties),
            'have dependencies': true,
        }])])])

    }

    export const implement_me = (description: string): d_target.Assign => wrap_state(['special', wrap_state(['implement me', description])])


    export namespace list {

        export const literal = (
            elements: _p.Raw_Or_Normal_List<d_target.Assign>
        ): d_target.Assign => wrap_state(['construct', wrap_state(['list', wrap_state(['literal', _p.list.literal(elements)])])])

        export const map = (
            source: d_target.Select_Value,
            element_handler: d_target.Assign
        ): d_target.Assign => wrap_state(['construct', wrap_state(['list', wrap_state(['from', {
            'selection': source,
            'type': wrap_state(['list', wrap_state(['map', {
                'assign item': element_handler
            }])])
        }])])])

        export const map_with_state = (
            source: d_target.Select_Value,
            initial_state: d_target.Assign,
            element_handler: d_target.Assign,
            update_state: d_target.Assign,
            wrap_up: d_target.Assign,
        ): d_target.Assign => wrap_state(['construct', wrap_state(['list', wrap_state(['from', {
            'selection': source,
            'type': wrap_state(['list', wrap_state(['map with state', {
                'initialize state': initial_state,
                'assign item': element_handler,
                'update state': update_state,
                'wrap up': wrap_up,
            }])])
        }])])])

    }

    export const nothing = (): d_target.Assign => wrap_state(['construct', wrap_state(['nothing', null])])

    export namespace number {

        export const approximation_literal = (
            value: number
        ): d_target.Assign => wrap_state(['construct', wrap_state(['number', wrap_state(['approximation', wrap_state(['literal', value])])])])

        export const approximation_copy = (
            source: d_target.Select_Value
        ): d_target.Assign => wrap_state(['construct', wrap_state(['number', wrap_state(['approximation', wrap_state(['copy', source])])])])

        export const integer_literal = (
            value: number
        ): d_target.Assign => wrap_state(['construct', wrap_state(['number', wrap_state(['integer', wrap_state(['literal', value])])])])

        export const integer_copy = (
            source: d_target.Select_Value
        ): d_target.Assign => wrap_state(['construct', wrap_state(['number', wrap_state(['integer', wrap_state(['copy', source])])])])

        export const natural_literal = (
            value: number
        ): d_target.Assign => wrap_state(['construct', wrap_state(['number', wrap_state(['natural', wrap_state(['literal', value])])])])

        export const natural_copy = (
            source: d_target.Select_Value
        ): d_target.Assign => wrap_state(['construct', wrap_state(['number', wrap_state(['natural', wrap_state(['copy', source])])])])

    }

    export namespace optional {

        export const not_set = (): d_target.Assign => wrap_state(['construct', wrap_state(['optional', wrap_state(['literal', wrap_state(['not set', null])])])])

        export const map = (
            source: d_target.Select_Value,
            expression: d_target.Assign
        ): d_target.Assign => wrap_state(['construct', wrap_state(['optional', wrap_state(['from', {
            'selection': source,
            'type': wrap_state(['optional', wrap_state(['map', {
                'assign set': expression
            }])])
        }])])])

        export const set = (
            value: d_target.Assign
        ): d_target.Assign => wrap_state(['construct', wrap_state(['optional', wrap_state(['literal', wrap_state(['set', value])])])])

    }

    export const select = (
        selection: d_target.Select_Value
    ): d_target.Assign => wrap_state(['select', selection])

    export namespace state {

        export const literal = (
            option: string,
            value: d_target.Assign
        ): d_target.Assign => wrap_state(['construct', wrap_state(['state', wrap_state(['literal', {
            'option': option,
            'assign option': value,
        }])])])

    }

    export namespace text {

        export const literal = (
            value: string,
            type: 'identifier' | 'freeform'
        ): d_target.Assign => wrap_state(['construct', wrap_state(['text', wrap_state(['literal', {
            'type': ((): d_target.Assign.construct.text.literal.type_ => type === 'identifier' ? wrap_state(['identifier', null]) : wrap_state(['freeform', null]))(),
            'value': value,
        }])])])

        export const copy = (
            selection: d_target.Select_Value
        ): d_target.Assign => wrap_state(['construct', wrap_state(['text', wrap_state(['from', {
            'selection': selection,
            'type': wrap_state(['text', wrap_state(['copy', null])])
        }])])])

    }

    export const unreachable = (explanation: string): d_target.Assign => wrap_state(['special', wrap_state(['unreachable', {
        'explanation': explanation
    }])])

    export const variables = (
        variables: _p.Raw_Or_Normal_Dictionary<d_target.Assign.special.variables.variables.D>,
        callback: d_target.Assign
    ): d_target.Assign => wrap_state(['special', wrap_state(['variables', {
        'variables': _p.dictionary.literal(variables),
        'assign': callback
    }])])
}

export namespace lookups {

    export const pass_through = (): d_target.Select_Value.regular.start.call.lookups => _p.optional.literal.set(wrap_state(['pass through', null]))

    export const initialize = (
        entries: _p.Raw_Or_Normal_Dictionary<d_target.Select_Value.regular.start.call.lookups.O.initialize.D>
    ): d_target.Select_Value.regular.start.call.lookups => _p.optional.literal.set(wrap_state(['initialize', _p.dictionary.literal(entries)]))

    export const not_set = (): d_target.Select_Value.regular.start.call.lookups => _p.optional.literal.not_set()

}


export namespace arguments_ {

    export const pass_through = (): d_target.Select_Value.regular.start.call.arguments_ => _p.optional.literal.set(wrap_state(['pass through', null]))

    export const initialize = (
        entries: _p.Raw_Or_Normal_Dictionary<d_target.Select_Value.regular.start.call.arguments_.O.initialize.D>
    ): d_target.Select_Value.regular.start.call.arguments_ => _p.optional.literal.set(wrap_state(['initialize', _p.dictionary.literal(entries)]))

    export const not_set = (): d_target.Select_Value.regular.start.call.arguments_ => _p.optional.literal.not_set()

}

export namespace call {

    export const local = (
        algorithm: string
    ): d_target.Select_Value.regular.start.call.source => wrap_state(['local', algorithm])

    export const external = (
        imp: string,
        variable: string
    ): d_target.Select_Value.regular.start.call.source => wrap_state(['imported', {
        'import': imp,
        'variable': variable,
    }])

}

export namespace sv {

    export const implement_me = (description: string): d_target.Select_Value => wrap_state(['implement me', description])

    export const call = (
        source: d_target.Select_Value.regular.start.call.source,
        context: d_target.Assign,
        abort: null | d_target.Assign,
        lookups: d_target.Select_Value.regular.start.call.lookups,
        arguments_: d_target.Select_Value.regular.start.call.arguments_,
        tail: _p.Raw_Or_Normal_List<d_target.Select_Value.regular.tail.L>
    ): d_target.Select_Value => wrap_state(['regular', {
        'start': wrap_state(['call', {
            'source': source,
            'context': context,
            'abort': abort === null ? _p.optional.literal.not_set() : _p.optional.literal.set(abort),
            'lookups': lookups,
            'arguments': arguments_,
        }]),
        'tail': _p.list.literal(tail),
    }])

    export const context = (
        tail: _p.Raw_Or_Normal_List<d_target.Select_Value.regular.tail.L>
    ): d_target.Select_Value => wrap_state(['regular', {
        'start': wrap_state(['context', null]),
        'tail': _p.list.literal(tail),
    }])

    export const dictionary_entry = (
        dictionary: d_target.Select_Value,
        id: d_target.Assign,
        no_such_entry_handler: d_target.Assign,
        tail: _p.Raw_Or_Normal_List<d_target.Select_Value.regular.tail.L>
    ): d_target.Select_Value => wrap_state(['regular', {
        'start': wrap_state<d_target.Select_Value.regular.start>(['dictionary entry', {
            'dictionary': dictionary,
            'id': id,
            'no such entry handler': no_such_entry_handler
        }]),
        'tail': _p.list.literal(tail),
    }])

    export const list_from_text = (
        source: d_target.Select_Value,
        character_handler: d_target.Assign,
        tail: _p.Raw_Or_Normal_List<d_target.Select_Value.regular.tail.L>
    ): d_target.Select_Value => wrap_state(['regular', {
        'start': wrap_state<d_target.Select_Value.regular.start>(['list from text', {
            'source': source,
            'assign item': character_handler,
        }]),
        'tail': _p.list.literal(tail),
    }])

    export const lookup_entry = (
        lookup: d_target.Select_Lookup,
        id: d_target.Assign,
        no_such_entry_handler: d_target.Assign,
        no_context_lookup_handler: d_target.Assign,
        cycle_detected_handler: d_target.Assign,
        // tail: _p.Raw_Or_Normal_List<d_target.Select_Value.regular.tail.L>
    ): d_target.Select_Value => wrap_state(['regular', {
        'start': wrap_state<d_target.Select_Value.regular.start>(['lookup entry', {
            'lookup': lookup,
            'id': id,
            'abort handlers': {
                'no such entry': no_such_entry_handler,
                'no context lookup': no_context_lookup_handler,
                'cycle detected': cycle_detected_handler,
            }
        }]),
        'tail': _p.list.literal([]),
    }])

    export const lookup_depth = (
        lookup: d_target.Select_Lookup,
        id: d_target.Assign,
        no_such_entry_handler: d_target.Assign,
        no_context_lookup_handler: d_target.Assign,
        cycle_detected_handler: d_target.Assign,
        // tail: _p.Raw_Or_Normal_List<d_target.Select_Value.regular.tail.L>
    ): d_target.Select_Value => wrap_state(['regular', {
        'start': wrap_state<d_target.Select_Value.regular.start>(['lookup entry depth', {
            'lookup': lookup,
            'id': id,
            'abort handlers': {
                'no such entry': no_such_entry_handler,
                'no context lookup': no_context_lookup_handler,
                'cycle detected': cycle_detected_handler,
            }
        }]),
        'tail': _p.list.literal([]),
    }])

    export const parameter = (
        name: string,
        tail: _p.Raw_Or_Normal_List<d_target.Select_Value.regular.tail.L>

    ): d_target.Select_Value => wrap_state(['regular', {
        'start': wrap_state(['parameter', name]),
        'tail': _p.list.literal(tail),
    }])

    export const parent_sibling = (
        name: string,
        tail: _p.Raw_Or_Normal_List<d_target.Select_Value.regular.tail.L>
    ): d_target.Select_Value => wrap_state(['regular', {
        'start': wrap_state(['parent sibling', name]),
        'tail': _p.list.literal(tail),
    }])

    export const sibling = (
        name: string,
        tail: _p.Raw_Or_Normal_List<d_target.Select_Value.regular.tail.L>
    ): d_target.Select_Value => wrap_state(['regular', {
        'start': wrap_state(['sibling', name]),
        'tail': _p.list.literal(tail),
    }])

    export const state = (
        tail: _p.Raw_Or_Normal_List<d_target.Select_Value.regular.tail.L>
    ): d_target.Select_Value => wrap_state(['regular', {
        'start': wrap_state(['state', null]),
        'tail': _p.list.literal(tail),
    }])

    export const text_from_list = (
        source: d_target.Select_Value,
        character_handler: d_target.Assign,
        tail: _p.Raw_Or_Normal_List<d_target.Select_Value.regular.tail.L>
    ): d_target.Select_Value => wrap_state(['regular', {
        'start': wrap_state<d_target.Select_Value.regular.start>(['text from list', {
            'source': source,
            'assign character': character_handler,
        }]),
        'tail': _p.list.literal(tail),
    }])

    export const variable = (
        name: string,
        tail: _p.Raw_Or_Normal_List<d_target.Select_Value.regular.tail.L>
    ): d_target.Select_Value => wrap_state(['regular', {
        'start': wrap_state(['variable', name]),
        'tail': _p.list.literal(tail),
    }])


}

export namespace sl {

    export const implement_me = (description: string): d_target.Select_Lookup => wrap_state(['implement me', description])

    export namespace stack {

        export const empty = (): d_target.Select_Lookup => wrap_state(['stack', wrap_state(['empty', null])])

        export const push = (
            stack: d_target.Select_Lookup,
            acyclic: d_target.Select_Lookup,
        ): d_target.Select_Lookup => wrap_state(['stack', wrap_state(['push', {
            'stack': stack,
            'acyclic': acyclic,
        }])])

    }

    export namespace acyclic {
        export const not_set = (): d_target.Select_Lookup => wrap_state(['acyclic', wrap_state(['not set', null])])

        export const siblings = (): d_target.Select_Lookup => wrap_state(['acyclic', wrap_state(['siblings', null])])

        export const resolved_dictionary = (
            dictionary_selection: d_target.Select_Value
        ): d_target.Select_Lookup => wrap_state(['acyclic', wrap_state(['resolved dictionary', dictionary_selection])])
    }

    export namespace cyclic {
        export const not_set = (): d_target.Select_Lookup => wrap_state(['cyclic', wrap_state(['not set', null])])

        export const siblings = (): d_target.Select_Lookup => wrap_state(['cyclic', wrap_state(['siblings', null])])
    }

    export const from_parameter = (
        name: string
    ): d_target.Select_Lookup => wrap_state(['from parameter', name])


}