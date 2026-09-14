import * as p_ from 'pareto-core/schema'

//schemas
import * as s_schema_reference from "../schema_reference/schema.js"


export type Schema = {
    'imports': p_.Dictionary<Schema.imports_D>
    'types': p_.Dictionary<Schema.types_D>
}

export namespace Schema {

    export type types_D = {
        'root': Value
    }

    export type imports_D = s_schema_reference.Schema_Reference
}

export type Value =
    | ['boolean', null]
    | ['component', Value.component]
    | ['dictionary', Value]
    | ['group', p_.Dictionary<Value>]
    | ['list', Value]
    | ['nothing', null]
    | ['number', Value.number_]
    | ['optional', Value]
    | ['reference', Value.reference]
    | ['state', {
        'options': p_.Dictionary<Value>
    }]
    | ['text', null]

export namespace Value {

    export type component = {
        'type location':
        | ['this schema', {
            'type': string //can be circular
        }]
        | ['import', {
            'schema': string
            'type': string
        }]
    }

    export namespace number_ {

        export namespace exact {

            export type natural = null

            export type integer = null

        }

        export type exact =
            | readonly ['natural', exact.natural]
            | readonly ['integer', exact.integer]

        export type approximation = null

    }

    export type number_ =
        | readonly ['exact', number_.exact]
        | readonly ['approximation', number_.approximation]

    export type reference = {
        'type location':
        | ['this schema', {
            'type': string //cannot be circularly dependent on the type that contains this reference
        }]
        | ['import', {
            'schema': string
            'type': string
        }]
        'sub selection': p_.List<reference.sub_selection_L>
        'cyclic': boolean
    }

    export namespace reference {
        export type sub_selection_L =
            | ['dictionary', null]
            | ['group', {
                'property': string
            }]
            | ['list', null]
            | ['optional', null]
            | ['state', {
                'option': string
            }]
    }

}