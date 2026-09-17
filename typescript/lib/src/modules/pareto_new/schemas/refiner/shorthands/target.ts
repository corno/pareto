import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../schema.js"
import type * as s_schema_reference from "../../schema_reference/schema.js"

export * as schema_reference from "../../schema_reference/shorthands/target.js"

export const root = (
    development_mode: boolean,
    source_schema: s_out.Root.source_schema,
    error_schema: s_out.Root.error_schema,
    parameters_schema: s_out.Root.parameters_schema,
    dependencies: p_.Normal_Dictionary<s_out.Root.dependencies.D>,
    declarations: p_.Normal_Dictionary<s_out.Root.declarations.D>,
    implementations: p_.Normal_Dictionary<s_out.Root.implementations.D>,
): s_out.Root => ({
    'development mode': development_mode,
    'source schema': source_schema,
    'error schema': error_schema,
    'parameters schema': parameters_schema,
    'dependencies': p_.dictionary(dependencies),
    'declarations': p_.dictionary(declarations),
    'implementations': p_.dictionary(implementations),
})

export namespace dependency {
    
    export const cousin = (
        schema: string,
        refiner: string,
    ): s_out.Root.dependencies.D => ['cousin', {
        'schema': schema,
        'refiner': refiner,
    }]

    export const external = (
        pkg: string,
        module: string,
        schema: string,
        refiner: string,
    ): s_out.Root.dependencies.D => ['external', {
        'package': pkg,
        'module': module,
        'schema': schema,
        'refiner': refiner,
    }]

    export const sibling = (
        refiner: string,
    ): s_out.Root.dependencies.D => ['sibling', {
        'refiner': refiner,
    }]
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

    export const implement_me = (
        remark: string,
    ): s_out.Expression => ['implement me', {
        'remark': remark,
    }]

    export namespace literal {

        export const state = (
            option: string,
            data: s_out.Expression,
        ): s_out.Expression => ['literal', ['state', {
            'option': option,
            'data': data,
        }]]

    }

    export const selection = (
        value_selection: s_out.Value_Selection,
    ): s_out.Expression => ['selection', value_selection]

}


export namespace value_selection {
    export const context_value = (
        tail: s_out.Value_Selection.context_value.tail,
    ): s_out.Value_Selection => ['context value', {
        'tail': tail
    }]

    export const call = (
        refiner: string,
        type: string,
        context: s_out.Value_Selection,
        error: null | 'pass through' |  s_out.Expression,
        parameters: null | 'pass through' | s_out.Expression,
        tail: s_out.Value_Selection.call.tail,
    ): s_out.Value_Selection => ['call', {
        'refiner': refiner,
        'type': type,
        'context': context,
        'error': error === null
            ? ['omitted', null]
            : error === 'pass through'
                ? ['pass through', null]
                : ['handler', {
                    'expression': error,
                }],
        'parameters': parameters === null
            ? ['omitted', null]
            : parameters === 'pass through'
                ? ['pass through', null]
                : ['handler', {
                    'expression': parameters,
                }],
        'tail': tail,
    }]
}
