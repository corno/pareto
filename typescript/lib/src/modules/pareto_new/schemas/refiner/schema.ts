import * as p_ from 'pareto-core/schema'

// types

namespace Value_Selection_Tail_ {
    
    export type L = string
}

type Value_Selection_Tail_ = p_.List<
    Value_Selection_Tail_.L
>

namespace Value_Selection_ {
    
    export namespace context_value {
        
        export type tail = Value_Selection_Tail_
    }
    
    export type context_value = {
        readonly 'tail': context_value.tail
    }
    
    export namespace call {
        
        export type refiner = string
        
        export type type_ = string
        
        export type context = Value_Selection_
        
        export namespace error {
            
            export type omitted = null
            
            export type pass_through = null
            
            export namespace handler {
                
                export type expression = Expression_
            }
            
            export type handler = {
                readonly 'expression': handler.expression
            }
        }
        
        export type error = 
            | readonly ['omitted', error.omitted]
            | readonly ['pass through', error.pass_through]
            | readonly ['handler', error.handler]
        
        export namespace parameters {
            
            export type omitted = null
            
            export type pass_through = null
            
            export namespace handler {
                
                export type expression = Expression_
            }
            
            export type handler = {
                readonly 'expression': handler.expression
            }
        }
        
        export type parameters = 
            | readonly ['omitted', parameters.omitted]
            | readonly ['pass through', parameters.pass_through]
            | readonly ['handler', parameters.handler]
        
        export type tail = Value_Selection_Tail_
    }
    
    export type call = {
        readonly 'refiner': call.refiner
        readonly 'type': call.type_
        readonly 'context': call.context
        readonly 'error': call.error
        readonly 'parameters': call.parameters
        readonly 'tail': call.tail
    }
}

type Value_Selection_ = 
    | readonly ['context value', Value_Selection_.context_value]
    | readonly ['call', Value_Selection_.call]

namespace Expression_ {
    
    export namespace from_ {
        
        export type selection = Value_Selection_
        
        export namespace type_ {
            
            export type dictionary_map = null
        }
        
        export type type_ = 
            | readonly ['dictionary map', type_.dictionary_map]
    }
    
    export type from_ = {
        readonly 'selection': from_.selection
        readonly 'type': from_.type_
    }
    
    export namespace implement_me {
        
        export type remark = string
    }
    
    export type implement_me = {
        readonly 'remark': implement_me.remark
    }
    
    export namespace literal {
        
        export namespace state {
            
            export type option = string
            
            export type data = Expression_
        }
        
        export type state = {
            readonly 'option': state.option
            readonly 'data': state.data
        }
    }
    
    export type literal = 
        | readonly ['state', literal.state]
    
    export type selection = Value_Selection_
}

type Expression_ = 
    | readonly ['from', Expression_.from_]
    | readonly ['implement me', Expression_.implement_me]
    | readonly ['literal', Expression_.literal]
    | readonly ['selection', Expression_.selection]

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

namespace Value_Reference_ {
    
    export type type_ = string
    
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
}

type Value_Reference_ = {
    readonly 'type': Value_Reference_.type_
    readonly 'subselection': Value_Reference_.subselection
}

namespace Type_Reference_ {
    
    export type type_ = string
}

type Type_Reference_ = {
    readonly 'type': Type_Reference_.type_
}

namespace Root_ {
    
    export type development_mode = boolean
    
    export type source_schema = Schema_Reference_
    
    export namespace error_schema {
        
        export type O = Schema_Reference_
    }
    
    export type error_schema = p_.Optional_Value<
        error_schema.O
    >
    
    export namespace parameters_schema {
        
        export type O = Schema_Reference_
    }
    
    export type parameters_schema = p_.Optional_Value<
        parameters_schema.O
    >
    
    export namespace dependencies {
        
        export namespace D {
            
            export namespace sibling {
                
                export type refiner = string
            }
            
            export type sibling = {
                readonly 'refiner': sibling.refiner
            }
            
            export namespace cousin {
                
                export type schema = string
                
                export type refiner = string
            }
            
            export type cousin = {
                readonly 'schema': cousin.schema
                readonly 'refiner': cousin.refiner
            }
            
            export namespace external {
                
                export type package_ = string
                
                export type module_ = string
                
                export type schema = string
                
                export type refiner = string
            }
            
            export type external = {
                readonly 'package': external.package_
                readonly 'module': external.module_
                readonly 'schema': external.schema
                readonly 'refiner': external.refiner
            }
        }
        
        export type D = 
            | readonly ['sibling', D.sibling]
            | readonly ['cousin', D.cousin]
            | readonly ['external', D.external]
    }
    
    export type dependencies = p_.Dictionary<
        dependencies.D
    >
    
    export namespace declarations {
        
        export namespace D {
            
            export namespace source {
                
                export type value = Value_Reference_
                
                export type iterator = Value_Reference_
            }
            
            export type source = 
                | readonly ['value', source.value]
                | readonly ['iterator', source.iterator]
            
            export namespace error {
                
                export type O = Type_Reference_
            }
            
            export type error = p_.Optional_Value<
                error.O
            >
            
            export namespace parameters {
                
                export type O = Type_Reference_
            }
            
            export type parameters = p_.Optional_Value<
                parameters.O
            >
        }
        
        export type D = {
            readonly 'source': D.source
            readonly 'error': D.error
            readonly 'parameters': D.parameters
        }
    }
    
    export type declarations = p_.Dictionary<
        declarations.D
    >
    
    export namespace implementations {
        
        export namespace D {
            
            export type temp_has_error = boolean
            
            export type temp_has_parameters = boolean
            
            export type expression = Expression_
        }
        
        export type D = {
            readonly 'temp has error': D.temp_has_error
            readonly 'temp has parameters': D.temp_has_parameters
            readonly 'expression': D.expression
        }
    }
    
    export type implementations = p_.Dictionary<
        implementations.D
    >
}

type Root_ = {
    readonly 'development mode': Root_.development_mode
    readonly 'source schema': Root_.source_schema
    readonly 'error schema': Root_.error_schema
    readonly 'parameters schema': Root_.parameters_schema
    readonly 'dependencies': Root_.dependencies
    readonly 'declarations': Root_.declarations
    readonly 'implementations': Root_.implementations
}

// exported root types
export { 
    type Value_Selection_Tail_ as Value_Selection_Tail, 
    type Value_Selection_ as Value_Selection, 
    type Expression_ as Expression, 
    type Schema_Reference_ as Schema_Reference, 
    type Value_Reference_ as Value_Reference, 
    type Type_Reference_ as Type_Reference, 
    type Root_ as Root, 
}
