import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../schema.js"
import type * as s_schema_reference from "../../schema_reference/schema.js"

export * as schema_reference from "../../schema_reference/shorthands/target.js"

export const root = (
    development_mode: boolean,
    target_schema: s_out.Root.target_schema,
    parameters_schema: s_out.Root.parameters_schema,
    dependencies_serializers: p_.Normal_Dictionary<s_out.Root.dependencies.serializers.D>,
    dependencies_transformers: p_.Normal_Dictionary<s_out.Root.dependencies.transformers.D>,
    declarations: p_.Normal_Dictionary<s_out.Root.declarations.D>,
    implementations: p_.Normal_Dictionary<s_out.Root.implementations.D>,
): s_out.Root => ({
    'development mode': development_mode,
    'target schema': target_schema,
    'parameters schema': parameters_schema,
    'dependencies': {
        'serializers': p_.dictionary(dependencies_serializers),
        'transformers': p_.dictionary(dependencies_transformers),
    },
    'declarations': p_.dictionary(declarations),
    'implementations': p_.dictionary(implementations),
})

export namespace dependency {
    export namespace serializer {

        export const cousin = (
            schema: string,
        ): s_out.Root.dependencies.serializers.D => ['cousin', {
            'schema': schema,
        }]

        export const external = (
            pkg: string,
            module: string,
            schema: string,
        ): s_out.Root.dependencies.serializers.D => ['external', {
            'package': pkg,
            'module': module,
            'schema': schema,
        }]

        export const this_schema = (
        ): s_out.Root.dependencies.serializers.D => ['this schema', null]
    }
    export namespace transformer {

        export const cousin = (
            schema: string,
            transformer: string,
        ): s_out.Root.dependencies.transformers.D => ['cousin', {
            'schema': schema,
            'transformer': transformer,
        }]

        export const external = (
            pkg: string,
            module: string,
            schema: string,
            transformer: string,
        ): s_out.Root.dependencies.transformers.D => ['external', {
            'package': pkg,
            'module': module,
            'schema': schema,
            'transformer': transformer,
        }]

        export const sibling = (
            transformer: string,
        ): s_out.Root.dependencies.transformers.D => ['sibling', {
            'transformer': transformer,
        }]
    }
}

export const declaration = (
    target: s_out.Root.declarations.D.target,
    parameters: s_out.Root.declarations.D.parameters,
): s_out.Root.declarations.D => ({
    'target': target,
    'parameters': parameters,
})

export const implementation = (
    temp_has_parameters: boolean,
    expression: s_out.Expression,
): s_out.Root.implementations.D => ({
    'temp has parameters': temp_has_parameters,
    'expression': expression,
})

export namespace expr {


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
                select: s_out.Select_Value,
                scope: s_out.Expression.convert.type_.component.transform.scope,
                arguments_: null | 'pass through' | s_out.Expression,
            ): s_out.Expression => ['convert', {
                'select': select,
                'type': ['component', ['transform', {
                    'scope': scope,
                    'arguments': arguments_ === null
                        ? ['omit', null]
                        : arguments_ === 'pass through'
                            ? ['pass through', null]
                            : ['initialize', {
                                'expression': arguments_,
                            }],
                }]]
            }]
            export namespace transform_ {

                export const external = (
                    transformer: string,
                    function_: string
                ): s_out.Expression.convert.type_.component.transform.scope => ['external', {
                    'transformer': transformer,
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


            export const serialize = (
                scope: s_out.Expression.initialize.text.serialize.scope,
                context: s_out.Expression,
                arguments_: null | 'pass through' | s_out.Expression,
            ): s_out.Expression => ['initialize', ['text', ['serialize', {
                'context': context,
                'scope': scope,
                'arguments': arguments_ === null
                    ? ['omit', null]
                    : arguments_ === 'pass through'
                        ? ['pass through', null]
                        : ['initialize', arguments_],
            }]]]
            export namespace serialize_ {

                export const external = (
                    serializer: string,
                    function_: string
                ): s_out.Expression.initialize.text.serialize.scope => ['external', {
                    'serializer': serializer,
                    'function': function_,
                }]

                export const local = (
                    function_: string
                ): s_out.Expression.initialize.text.serialize.scope => ['local', {
                    'function': function_,
                }]
            }

        export const text_literal = (
            text: string
        ): s_out.Expression => ['initialize', ['text', ['literal', text]]]

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
        arguments_: null | 'pass through' | s_out.Expression,
        tail: s_out.Select_Value.call.tail,
    ): s_out.Select_Value => ['call', {
        'scope': scope,
        'context': context,
        'arguments': arguments_ === null
            ? ['omit', null]
            : arguments_ === 'pass through'
                ? ['pass through', null]
                : ['initialize', arguments_],
        'tail': tail
    }]

    export namespace call_ {

        export const external = (
            transformer: string,
            function_: string
        ): s_out.Select_Value.call.scope => ['external', {
            'transformer': transformer,
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
