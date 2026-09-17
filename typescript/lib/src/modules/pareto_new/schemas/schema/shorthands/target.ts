import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../schema.js"

export * as schema_reference from "../../schema_reference/shorthands/target.js"


export const schema = (
    imports: p_.Normal_Dictionary<s_out.Schema.imports.D>,
    types: p_.Normal_Dictionary<s_out.Schema.types.D>,
): s_out.Schema => ({
    'imports': p_.dictionary(imports),
    'types': p_.dictionary(types),
})

export const type = (
    value: s_out.Value,
): s_out.Schema.types.D => ({
    'root': value,
})

export namespace v {

    export const boolean = (): s_out.Value => {
        return ['boolean', null]
    }

    export const component_sibling = (
        type: string,
    ): s_out.Value => {
        return ['component', {
            'type location': ['this schema', {
                'type': type
            }]
        }]
    }

    export const component_imported = (
        schema: string,
        type: string,
    ): s_out.Value => {
        return ['component', {
            'type location': ['import', {
                'schema': schema,
                'type': type,
            }],
        }]
    }

    export const dictionary = (
        type: s_out.Value
    ): s_out.Value => {
        return ['dictionary', type]
    }

    export const group = (
        properties: s_out.Value.group.properties
    ): s_out.Value => {
        return ['group', {
            'properties': properties
        }]
    }

    export const list = (
        type: s_out.Value
    ): s_out.Value => {
        return ['list', type]
    }

    export const nothing = (): s_out.Value => {
        return ['nothing', null]
    }

    export const number_approximation = (): s_out.Value => {
        return ['number', ['approximation', null]]
    }

    export const integer = (): s_out.Value => {
        return ['number', ['exact', ['integer', null]]]
    }

    export const natural = (): s_out.Value => {
        return ['number', ['exact', ['natural', null]]]
    }

    export const optional = (
        type: s_out.Value
    ): s_out.Value => {
        return ['optional', type]
    }

    export const reference_to_local = (
        type: string,
        sub_selection: p_.Normal_List<s_out.Value.reference.subselection.L>,
        cyclic?: 'cyclic' | 'acyclic'
    ): s_out.Value => {
        return ['reference', {
            'type location': ['this schema', {
                'type': type
            }],
            'subselection': p_.list(sub_selection),
            'cyclic': cyclic === undefined
                ? false
                : cyclic === 'cyclic' ? true : false,
        }]
    }

    export const reference_to_external = (
        schema: string,
        type: string,
        sub_selection: p_.Normal_List<s_out.Value.reference.subselection.L>,
        cyclic?: 'cyclic' | 'acyclic'
    ): s_out.Value => {
        return ['reference', {
            'type location': ['import', {
                'schema': schema,
                'type': type,
            }],
            'subselection': p_.list(sub_selection),
            'cyclic': cyclic === undefined
                ? false
                : cyclic === 'cyclic' ? true : false,
        }]
    }

    export const state = (
        options: s_out.Value.state.options
    ): s_out.Value => {
        return ['state', {
            'options': p_.dictionary(options)
        }]
    }

    export const text = (): s_out.Value => {
        return ['text', null]
    }

}

export namespace sub {
    export const dictionary = (): s_out.Value.reference.subselection.L => ['dictionary', null]

    export const list = (): s_out.Value.reference.subselection.L => {
        return ['list', null]
    }
    export const state = (name: string): s_out.Value.reference.subselection.L => {
        return ['state', {
            'option': name
        }]
    }
    export const group = (
        name: string,
    ): s_out.Value.reference.subselection.L => {
        return ['group', {
            'property': name
        }]
    }
    export const optional = (): s_out.Value.reference.subselection.L => ['optional', null]
}