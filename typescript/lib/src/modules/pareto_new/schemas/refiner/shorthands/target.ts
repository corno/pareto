import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../schema.js"
import type * as s_schema_reference from "../../schema_reference/schema.js"

export * as schema_reference from "../../schema_reference/shorthands/target.js"

export const root = (
    development_mode: boolean,
    source_schema: s_out.Root.source_schema,
    error_schema: s_out.Root.error_schema,
    parameters_schema: s_out.Root.parameters_schema,
    dependencies_dererializers: p_.Normal_Dictionary<s_out.Root.dependencies.deserializers.D>,
    dependencies_refiners: p_.Normal_Dictionary<s_out.Root.dependencies.refiners.D>,
    declarations: p_.Normal_Dictionary<s_out.Root.declarations.D>,
    implementations: p_.Normal_Dictionary<s_out.Root.implementations.D>,
): s_out.Root => ({
    'development mode': development_mode,
    'source schema': source_schema,
    'error schema': error_schema,
    'parameters schema': parameters_schema,
    'dependencies': {
        'deserializers': p_.dictionary(dependencies_dererializers),
        'refiners': p_.dictionary(dependencies_refiners),
    },
    'declarations': p_.dictionary(declarations),
    'implementations': p_.dictionary(implementations),
})

export namespace dependency {
    export namespace deserializer {

        export const cousin = (
            schema: string,
        ): s_out.Root.dependencies.deserializers.D => ['cousin', {
            'schema': schema,
        }]

        export const external = (
            pkg: string,
            module: string,
            schema: string,
        ): s_out.Root.dependencies.deserializers.D => ['external', {
            'package': pkg,
            'module': module,
            'schema': schema,
        }]

        export const this_schema = (
        ): s_out.Root.dependencies.deserializers.D => ['this schema', null]
    }
    export namespace refiner {

        export const cousin = (
            schema: string,
            refiner: string,
        ): s_out.Root.dependencies.refiners.D => ['cousin', {
            'schema': schema,
            'refiner': refiner,
        }]

        export const external = (
            pkg: string,
            module: string,
            schema: string,
            refiner: string,
        ): s_out.Root.dependencies.refiners.D => ['external', {
            'package': pkg,
            'module': module,
            'schema': schema,
            'refiner': refiner,
        }]

        export const sibling = (
            refiner: string,
        ): s_out.Root.dependencies.refiners.D => ['sibling', {
            'refiner': refiner,
        }]
    }
}

export namespace declaration {

    export const production = (
        source: s_out.Root.declarations.D.source.iterator,
        error: s_out.Root.declarations.D.error,
        parameters: s_out.Root.declarations.D.parameters,
    ): s_out.Root.declarations.D => ({
        'source': ['iterator', source],
        'error': error,
        'parameters': parameters,
    })
    export const refiner = (
        source: s_out.Root.declarations.D.source.value,
        error: s_out.Root.declarations.D.error,
        parameters: s_out.Root.declarations.D.parameters,
    ): s_out.Root.declarations.D => ({
        'source': ['value', source],
        'error': error,
        'parameters': parameters,
    })

}

export const implementation = (
    temp_has_error: boolean,
    temp_has_parameters: boolean,
    expression: s_out.Expression,
): s_out.Root.implementations.D => ({
    'temp has error': temp_has_error,
    'temp has parameters': temp_has_parameters,
    'expression': expression,
})
export namespace expr {

    export const abort = (
        expression: s_out.Expression,
    ): s_out.Expression => ['abort', expression]

    export const change_context = (
        select: s_out.Expression.change_context.select,
        callback: s_out.Expression.change_context.callback,
    ): s_out.Expression => ['change context', {
        'select': select,
        'callback': callback,
    }]

    export namespace convert {

        export namespace component {

            export const transform = (
                select: s_out.Expression.convert.select,
                scope: s_out.Expression.convert.type_.component.transform.scope,
                error: null | 'pass through' | s_out.Expression,
                arguments_: null | 'pass through' | s_out.Expression,
            ): s_out.Expression => ['convert', {
                'select': select,
                'type': ['component', ['transform', {
                    'scope': scope,
                    'error': error === null
                        ? ['omit', null]
                        : error === 'pass through'
                            ? ['pass through', null]
                            : ['handle', error],
                    'arguments': arguments_ === null
                        ? ['omit', null]
                        : arguments_ === 'pass through'
                            ? ['pass through', null]
                            : ['initialize', arguments_],
                }]]
            }]

            export namespace transform_ {

                export const external = (
                    refiner: string,
                    function_: string
                ): s_out.Expression.convert.type_.component.transform.scope => ['external', {
                    'refiner': refiner,
                    'function': function_,
                }]

                export const local = (
                    function_: string
                ): s_out.Expression.convert.type_.component.transform.scope => ['local', {
                    'function': function_,
                }]
            }
        }

        export namespace dictionary {

            export const map = (
                select: s_out.Expression.convert.select,
                on_entry: s_out.Expression.convert.type_.dictionary.map.on_entry,
            ): s_out.Expression => ['convert', {
                'select': select,
                'type': ['dictionary', ['map', {
                    'on entry': on_entry,
                }]]
            }]
        }
        export namespace group {

        }
        export namespace list {

            export const map = (
                select: s_out.Expression.convert.select,
                on_item: s_out.Expression.convert.type_.list.map.on_item,
            ): s_out.Expression => ['convert', {
                'select': select,
                'type': ['list', ['map', {
                    'on item': on_item,
                }]]
            }]
        }
        export namespace optional {

            export const decide = (
                select: s_out.Expression.convert.select,
                temp_return_value: s_out.Expression.convert.type_.optional.decide.temp_return_type,
                on_set: s_out.Expression.convert.type_.optional.map.on_set,
                on_not_set: s_out.Expression.convert.type_.optional.map.on_set,
            ): s_out.Expression => ['convert', {
                'select': select,
                'type': ['optional', ['decide', {
                    'temp return type': temp_return_value,
                    'on set': on_set,
                    'on not set': on_not_set,
                }]]
            }]
            export const map = (
                select: s_out.Expression.convert.select,
                on_set: s_out.Expression.convert.type_.optional.map.on_set,
            ): s_out.Expression => ['convert', {
                'select': select,
                'type': ['optional', ['map', {
                    'on set': on_set,
                }]]
            }]
        }
        export namespace state {

            export const decide = (
                select: s_out.Expression.convert.select,
                temp_return_value: s_out.Expression.convert.type_.optional.decide.temp_return_type,
                options: s_out.Expression.convert.type_.state.decide.options
            ): s_out.Expression => ['convert', {
                'select': select,
                'type': ['state', ['decide', {
                    'temp return type': temp_return_value,
                    'options': options
                }]]
            }]
        }
        export namespace text {

            export const decide = (
                select: s_out.Expression.convert.select,
                temp_return_value: s_out.Expression.convert.type_.optional.decide.temp_return_type,
                matches: s_out.Expression.convert.type_.text.decide.matches,
                no_match: s_out.Expression.convert.type_.text.decide.no_match,
            ): s_out.Expression => ['convert', {
                'select': select,
                'type': ['text', ['decide', {
                    'temp return type': temp_return_value,
                    'matches': matches,
                    'no match': no_match
                }]]
            }]
        }

    }

    export const implement_me = (
        remark: string,
    ): s_out.Expression => ['implement me', {
        'remark': remark,
    }]

    export namespace initialize {

        export const false_ = (
        ): s_out.Expression => ['initialize', ['boolean', ['false', null]]]

        export const true_ = (
        ): s_out.Expression => ['initialize', ['boolean', ['true', null]]]

        export const dictionary = (
            dict: s_out.Expression.initialize.dictionary
        ): s_out.Expression => ['initialize', ['dictionary', dict]]

        export const group = (
            group: s_out.Expression.initialize.group
        ): s_out.Expression => ['initialize', ['group', group]]

        export const list = (
            list: s_out.Expression.initialize.list
        ): s_out.Expression => ['initialize', ['list', list]]

        export const natural = (
            value: number,
        ): s_out.Expression => ['initialize', ['number', ['natural', value]]]

        export const integer = (
            value: number,
        ): s_out.Expression => ['initialize', ['number', ['integer', value]]]

        export const nothing = (
        ): s_out.Expression => ['initialize', ['nothing', null]]

        export const not_set = (
        ): s_out.Expression => ['initialize', ['optional', ['not set', null]]]

        export const set = (
            value: s_out.Expression,
        ): s_out.Expression => ['initialize', ['optional', ['set', value]]]

        export const state = (
            option: string,
            data: s_out.Expression,
        ): s_out.Expression => ['initialize', ['state', {
            'option': option,
            'data': data,
        }]]

        export const text = (
            text: s_out.Expression.initialize.text
        ): s_out.Expression => ['initialize', ['text', text]]

        export const reference = (
            reference: s_out.Expression.initialize.reference
        ): s_out.Expression => ['initialize', ['reference', reference]]

    }

    export const select = (
        value_selection: s_out.Select_Value,
    ): s_out.Expression => ['select', value_selection]

}

export namespace select {
    export const call = (
        scope: s_out.Select_Value.call.scope,
        context: s_out.Select_Value,
        error: null | 'pass through' | s_out.Expression,
        arguments_: null | 'pass through' | s_out.Expression,
        tail: s_out.Select_Value.call.tail,
    ): s_out.Select_Value => ['call', {
        'scope': scope,
        'context': context,
        'error': error === null
            ? ['omit', null]
            : error === 'pass through'
                ? ['pass through', null]
                : ['handle', {
                    'expression': error,
                }],
        'arguments': arguments_ === null
            ? ['omit', null]
            : arguments_ === 'pass through'
                ? ['pass through', null]
                : ['initialize', {
                    'expression': arguments_,
                }],
        'tail': tail
    }]

    export namespace call_ {

        export const external = (
            refiner: string,
            function_: string
        ): s_out.Select_Value.call.scope => ['external', {
            'refiner': refiner,
            'function': function_,
        }]

        export const local = (
            function_: string
        ): s_out.Select_Value.call.scope => ['local', {
            'function': function_,
        }]
    }
    export const context_value = (
        tail: s_out.Select_Value.context_value.tail,
    ): s_out.Select_Value => ['context value', {
        'tail': tail
    }]

}

export namespace vr {

    export const dictionary = (
    ): s_out.Value_Reference.subselection.L => ['dictionary', null]
    export const group = (
        property: string,
    ): s_out.Value_Reference.subselection.L => ['group', {
        'property': property
    }]
    export const list = (
    ): s_out.Value_Reference.subselection.L => ['list', null]
    export const optional = (
    ): s_out.Value_Reference.subselection.L => ['optional', null]
    export const state = (
        option: string,
    ): s_out.Value_Reference.subselection.L => ['state', {
        'option': option
    }]
}
