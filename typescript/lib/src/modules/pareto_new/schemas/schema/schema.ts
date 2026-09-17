import * as p_ from 'pareto-core/schema'

// types

namespace Schema_Reference_ {
    
    export type sibling = string
    
    export namespace external {
        
        export type package_ = string
        
        export type module_ = string
        
        export type schema = string
    }
    
    export type external = {
        readonly 'package': external.package_
        readonly 'module': external.module_
        readonly 'schema': external.schema
    }
}

type Schema_Reference_ = 
    | readonly ['sibling', Schema_Reference_.sibling]
    | readonly ['external', Schema_Reference_.external]

namespace Value_ {
    
    export type boolean_ = null
    
    export namespace component {
        
        export namespace type_location {
            
            export namespace this_schema {
                
                export type type_ = string
            }
            
            export type this_schema = {
                readonly 'type': this_schema.type_
            }
            
            export namespace import_ {
                
                export type schema = string
                
                export type type_ = string
            }
            
            export type import_ = {
                readonly 'schema': import_.schema
                readonly 'type': import_.type_
            }
        }
        
        export type type_location = 
            | readonly ['this schema', type_location.this_schema]
            | readonly ['import', type_location.import_]
    }
    
    export type component = {
        readonly 'type location': component.type_location
    }
    
    export type dictionary = Value_
    
    export namespace group {
        
        export namespace properties {
            
            export type D = Value_
        }
        
        export type properties = p_.Dictionary<
            properties.D
        >
    }
    
    export type group = {
        readonly 'properties': group.properties
    }
    
    export type list = Value_
    
    export type nothing = null
    
    export namespace number_ {
        
        export type approximation = null
        
        export namespace exact {
            
            export type integer = null
            
            export type natural = null
        }
        
        export type exact = 
            | readonly ['integer', exact.integer]
            | readonly ['natural', exact.natural]
    }
    
    export type number_ = 
        | readonly ['approximation', number_.approximation]
        | readonly ['exact', number_.exact]
    
    export type optional = Value_
    
    export namespace reference {
        
        export namespace type_location {
            
            export namespace this_schema {
                
                export type type_ = string
            }
            
            export type this_schema = {
                readonly 'type': this_schema.type_
            }
            
            export namespace import_ {
                
                export type schema = string
                
                export type type_ = string
            }
            
            export type import_ = {
                readonly 'schema': import_.schema
                readonly 'type': import_.type_
            }
        }
        
        export type type_location = 
            | readonly ['this schema', type_location.this_schema]
            | readonly ['import', type_location.import_]
        
        export namespace subselection {
            
            export namespace L {
                
                export type dictionary = null
                
                export namespace group {
                    
                    export type property = string
                }
                
                export type group = {
                    readonly 'property': group.property
                }
                
                export type list = null
                
                export type optional = null
                
                export namespace state {
                    
                    export type option = string
                }
                
                export type state = {
                    readonly 'option': state.option
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
        
        export type cyclic = boolean
    }
    
    export type reference = {
        readonly 'type location': reference.type_location
        readonly 'subselection': reference.subselection
        readonly 'cyclic': reference.cyclic
    }
    
    export namespace state {
        
        export namespace options {
            
            export type D = Value_
        }
        
        export type options = p_.Dictionary<
            options.D
        >
    }
    
    export type state = {
        readonly 'options': state.options
    }
    
    export type text = null
}

type Value_ = 
    | readonly ['boolean', Value_.boolean_]
    | readonly ['component', Value_.component]
    | readonly ['dictionary', Value_.dictionary]
    | readonly ['group', Value_.group]
    | readonly ['list', Value_.list]
    | readonly ['nothing', Value_.nothing]
    | readonly ['number', Value_.number_]
    | readonly ['optional', Value_.optional]
    | readonly ['reference', Value_.reference]
    | readonly ['state', Value_.state]
    | readonly ['text', Value_.text]

namespace Schema_ {
    
    export namespace imports {
        
        export type D = Schema_Reference_
    }
    
    export type imports = p_.Dictionary<
        imports.D
    >
    
    export namespace types {
        
        export namespace D {
            
            export type root = Value_
        }
        
        export type D = {
            readonly 'root': D.root
        }
    }
    
    export type types = p_.Dictionary<
        types.D
    >
}

type Schema_ = {
    readonly 'imports': Schema_.imports
    readonly 'types': Schema_.types
}

// exported root types
export { 
    type Schema_Reference_ as Schema_Reference, 
    type Value_ as Value, 
    type Schema_ as Schema, 
}
