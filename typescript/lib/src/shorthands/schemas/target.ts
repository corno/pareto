import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../../modules/pareto_new/interface/schemas/schema.js"

export const root = (
    schemas: s_out.Root['schemas'],
): s_out.Root => ({
    'schemas': p_.dictionary(schemas),
})

export const schema = (
    imports: p_.Normal_Dictionary<s_out.Root.schemas_D.imports_D>,
    types: p_.Normal_Dictionary<s_out.Root.schemas_D.types_D>,
): s_out.Root.schemas_D => ({
    'imports': p_.dictionary(imports),
    'types': p_.dictionary(types),
})

export const type = (
    value: s_out.Value,
): s_out.Root.schemas_D.types_D => ({
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
        properties: p_.Normal_Dictionary<s_out.Value>
    ): s_out.Value => {
        return ['group', p_.dictionary(properties)]
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
        sub_selection: p_.Normal_List<s_out.Value.reference.sub_selection_L>,
        cyclic?: 'cyclic' | 'acyclic'
    ): s_out.Value => {
        return ['reference', {
            'type location': ['this schema', {
                'type': type
            }],
            'sub selection': p_.list(sub_selection),
            'cyclic': cyclic === undefined
                ? false
                : cyclic === 'cyclic' ? true : false,
        }]
    }

    export const reference_to_external = (
        schema: string,
        type: string,
        sub_selection: p_.Normal_List<s_out.Value.reference.sub_selection_L>,
        cyclic?: 'cyclic' | 'acyclic'
    ): s_out.Value => {
        return ['reference', {
            'type location': ['import', {
                'schema': schema,
                'type': type,
            }],
            'sub selection': p_.list(sub_selection),
            'cyclic': cyclic === undefined
                ? false
                : cyclic === 'cyclic' ? true : false,
        }]
    }

    export const state = (
        states: p_.Normal_Dictionary<s_out.Value>
    ): s_out.Value => {
        return ['state', {
            'options': p_.dictionary(states)
        }]
    }

    export const text = (): s_out.Value => {
        return ['text', null]
    }

}