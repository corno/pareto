import * as p_ from 'pareto-core/schema'

namespace Schema_Reference_ {
    
    export type sibling = string
    
    export namespace external {
        
        export type package_ = string
        
        export type module_ = string
        
        export type schema = string
    }
    
    export type external = {
        'package': external.package_,
        'module': external.module_,
        'schema': external.schema,
    }
}

type Schema_Reference_ = 
    | readonly ['sibling', Schema_Reference_.sibling]
    | readonly ['external', Schema_Reference_.external]

namespace Value_Reference_ {
    
    export type type_ = string
    
    export namespace subselection {
        
        export namespace L {
            
            export type dictionary = null
            
            export namespace group {
                
                export type property = string
            }
            
            export type group = {
                'property': group.property,
            }
            
            export type list = null
            
            export type optional = null
            
            export namespace state {
                
                export type option = string
            }
            
            export type state = {
                'option': state.option,
            }
        }
        
        export type L = 
            | readonly ['dictionary', L.dictionary]
            | readonly ['group', L.group]
            | readonly ['list', L.list]
            | readonly ['optional', L.optional]
            | readonly ['state', L.state]
    }
    
    export type subselection = p_.List<
        subselection.L
    >
}

type Value_Reference_ = {
    'type': Value_Reference_.type_,
    'subselection': Value_Reference_.subselection,
}

namespace Type_Reference_ {
    
    export type type_ = string
}

type Type_Reference_ = {
    'type': Type_Reference_.type_,
}

export {
    type Schema_Reference_ as Schema_Reference,
    type Value_Reference_ as Value_Reference,
    type Type_Reference_ as Type_Reference,
}