    
    import * as _pi from 'pareto-core/dist/interface'
    
    import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"
    
    import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"
    
    import * as i_out from "./data"
    
    export namespace Directory_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Directory
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Directory_ = (
        context: Directory_.I,
        abort: _pi.Abort<Directory_.E>,
        parameters: {
            readonly 'document resource identifier': Directory_.P.document_resource_identifier
            readonly 'tab size': Directory_.P.tab_size
        },
    ) => Directory_.O
    
    export namespace Block_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Block
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Block_ = (
        context: Block_.I,
        abort: _pi.Abort<Block_.E>,
        parameters: {
            readonly 'document resource identifier': Block_.P.document_resource_identifier
            readonly 'tab size': Block_.P.tab_size
        },
    ) => Block_.O
    
    export namespace Statements_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Statements
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Statements_ = (
        context: Statements_.I,
        abort: _pi.Abort<Statements_.E>,
        parameters: {
            readonly 'document resource identifier': Statements_.P.document_resource_identifier
            readonly 'tab size': Statements_.P.tab_size
        },
    ) => Statements_.O
    
    export namespace Type_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Type
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Type_ = (
        context: Type_.I,
        abort: _pi.Abort<Type_.E>,
        parameters: {
            readonly 'document resource identifier': Type_.P.document_resource_identifier
            readonly 'tab size': Type_.P.tab_size
        },
    ) => Type_.O
    
    export namespace Function_Parameters_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Function_Parameters
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Function_Parameters_ = (
        context: Function_Parameters_.I,
        abort: _pi.Abort<Function_Parameters_.E>,
        parameters: {
            readonly 'document resource identifier': Function_Parameters_.P.document_resource_identifier
            readonly 'tab size': Function_Parameters_.P.tab_size
        },
    ) => Function_Parameters_.O
    
    export namespace Expression_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Expression
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Expression_ = (
        context: Expression_.I,
        abort: _pi.Abort<Expression_.E>,
        parameters: {
            readonly 'document resource identifier': Expression_.P.document_resource_identifier
            readonly 'tab size': Expression_.P.tab_size
        },
    ) => Expression_.O
    
    export namespace String_Literal_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.String_Literal
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type String_Literal_ = (
        context: String_Literal_.I,
        abort: _pi.Abort<String_Literal_.E>,
        parameters: {
            readonly 'document resource identifier': String_Literal_.P.document_resource_identifier
            readonly 'tab size': String_Literal_.P.tab_size
        },
    ) => String_Literal_.O
    
    export namespace Identifier_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Identifier
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Identifier_ = (
        context: Identifier_.I,
        abort: _pi.Abort<Identifier_.E>,
        parameters: {
            readonly 'document resource identifier': Identifier_.P.document_resource_identifier
            readonly 'tab size': Identifier_.P.tab_size
        },
    ) => Identifier_.O
    
    export { 
        Directory_ as Directory, 
        Block_ as Block, 
        Statements_ as Statements, 
        Type_ as Type, 
        Function_Parameters_ as Function_Parameters, 
        Expression_ as Expression, 
        String_Literal_ as String_Literal, 
        Identifier_ as Identifier, 
    }
