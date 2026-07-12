import * as p_ from 'pareto-core/interface/data'


export type Root = {
    'schemas': p_.Dictionary<Root.schemas_D>
}

export namespace Root {

    export type schemas_D = {
        'imports': p_.Dictionary<schemas_D.imports_D>
        'types': p_.Dictionary<schemas_D.types_D>
    }

    export namespace schemas_D {

        export type types_D = {
            'root': Value
        }

        export type imports_D =
            | ['module', {
                'module': string
                'type': string
            }]
            | ['external', {
                'path': string
                'type': string
            }]
    }
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