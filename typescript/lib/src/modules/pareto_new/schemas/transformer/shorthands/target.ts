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

    export const call = (
        scope: s_out.Expression.call.scope,
        context: s_out.Value_Selection,
        arguments_: null | 'pass through' | s_out.Expression,
    ): s_out.Expression => ['call', {
        'scope': scope,
        'context': context,
        'arguments': arguments_ === null
            ? ['omitted', null]
            : arguments_ === 'pass through'
                ? ['pass through', null]
                : ['handler', {
                    'expression': arguments_,
                }],
    }]


    export const change_context = (
        selection: s_out.Expression.change_context.selection,
        callback: s_out.Expression.change_context.callback,
    ): s_out.Expression => ['change context', {
        'selection': selection,
        'callback': callback,
    }]

    export namespace call_ {

        export const external = (
            transformer: string,
            function_: string
        ): s_out.Expression.call.scope => ['external', {
            'transformer': transformer,
            'function': function_,
        }]

        export const local = (
            function_: string
        ): s_out.Expression.call.scope => ['local', {
            'function': function_,
        }]
    }

    export namespace from {

        export namespace dictionary {

            export const map = (
                selection: s_out.Expression.from_source.selection,
                on_entry: s_out.Expression.from_source.type_.dictionary.map.on_entry,
            ): s_out.Expression => ['from source', {
                'selection': selection,
                'type': ['dictionary', ['map', {
                    'on entry': on_entry,
                }]]
            }]
        }
        export namespace group {

        }
        export namespace list {

            export const map = (
                selection: s_out.Expression.from_source.selection,
                on_item: s_out.Expression.from_source.type_.list.map.on_item,
            ): s_out.Expression => ['from source', {
                'selection': selection,
                'type': ['list', ['map', {
                    'on item': on_item,
                }]]
            }]
        }
        export namespace optional {

            export const decide = (
                selection: s_out.Expression.from_source.selection,
                temp_return_value: s_out.Expression.from_source.type_.optional.decide.temp_return_type,
                on_set: s_out.Expression.from_source.type_.optional.map.on_set,
                on_not_set: s_out.Expression.from_source.type_.optional.map.on_set,
            ): s_out.Expression => ['from source', {
                'selection': selection,
                'type': ['optional', ['decide', {
                    'temp return type': temp_return_value,
                    'on set': on_set,
                    'on not set': on_not_set,
                }]]
            }]
            export const map = (
                selection: s_out.Expression.from_source.selection,
                on_set: s_out.Expression.from_source.type_.optional.map.on_set,
            ): s_out.Expression => ['from source', {
                'selection': selection,
                'type': ['optional', ['map', {
                    'on set': on_set,
                }]]
            }]
        }
        export namespace state {

            export const decide = (
                selection: s_out.Expression.from_source.selection,
                temp_return_value: s_out.Expression.from_source.type_.optional.decide.temp_return_type,
                options: s_out.Expression.from_source.type_.state.decide.options
            ): s_out.Expression => ['from source', {
                'selection': selection,
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

    export namespace literal {

        export const false_ = (
        ): s_out.Expression => ['literal', ['boolean', ['false', null]]]

        export const true_ = (
        ): s_out.Expression => ['literal', ['boolean', ['true', null]]]

        export const dictionary = (
            dict: s_out.Expression.literal.dictionary
        ): s_out.Expression => ['literal', ['dictionary', dict]]

        export const group = (
            group: s_out.Expression.literal.group
        ): s_out.Expression => ['literal', ['group', group]]

        export const list = (
            list: s_out.Expression.literal.list
        ): s_out.Expression => ['literal', ['list', list]]

        export const nothing = (
        ): s_out.Expression => ['literal', ['nothing', null]]

        export const not_set = (
        ): s_out.Expression => ['literal', ['optional', ['not set', null]]]

        export const set = (
            value: s_out.Expression,
        ): s_out.Expression => ['literal', ['optional', ['set', value]]]

        export const state = (
            option: string,
            data: s_out.Expression,
        ): s_out.Expression => ['literal', ['state', {
            'option': option,
            'data': data,
        }]]

        export const text = (
            text: s_out.Expression.literal.text
        ): s_out.Expression => ['literal', ['text', text]]

        export const reference = (
            reference: s_out.Expression.literal.reference
        ): s_out.Expression => ['literal', ['reference', reference]]

    }

    export const selection = (
        value_selection: s_out.Value_Selection,
    ): s_out.Expression => ['selection', value_selection]

}


export namespace value_selection {
    export const call = (
        scope: s_out.Value_Selection.call.scope,
        context: s_out.Value_Selection,
        arguments_: null | 'pass through' | s_out.Expression,
        tail: s_out.Value_Selection.call.tail,
    ): s_out.Value_Selection => ['call', {
        'scope': scope,
        'context': context,
        'arguments': arguments_ === null
            ? ['omitted', null]
            : arguments_ === 'pass through'
                ? ['pass through', null]
                : ['handler', {
                    'expression': arguments_,
                }],
        'tail': tail
    }]

    export namespace call_ {

        export const external = (
            transformer: string,
            function_: string
        ): s_out.Value_Selection.call.scope => ['external', {
            'transformer': transformer,
            'function': function_,
        }]

        export const local = (
            function_: string
        ): s_out.Value_Selection.call.scope => ['local', {
            'function': function_,
        }]
    }


    export const context_value = (
        tail: s_out.Value_Selection.context_value.tail,
    ): s_out.Value_Selection => ['context value', {
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
