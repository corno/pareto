    
    import * as _pi from 'pareto-core/dist/interface'
    
    import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"
    
    import * as i_out from "./data"
    
    import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
    
    export namespace Directory_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Directory
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Directory_ = (
        context: Directory_.I,
        abort: _pi.Abort<Directory_.E>,
    ) => Directory_.O
    
    export namespace Block_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Block
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Block_ = (
        context: Block_.I,
        abort: _pi.Abort<Block_.E>,
    ) => Block_.O
    
    export namespace Statements_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Statements
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Statements_ = (
        context: Statements_.I,
        abort: _pi.Abort<Statements_.E>,
    ) => Statements_.O
    
    export namespace Type_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Type
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Type_ = (
        context: Type_.I,
        abort: _pi.Abort<Type_.E>,
    ) => Type_.O
    
    export namespace Function_Parameters_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Function_Parameters
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Function_Parameters_ = (
        context: Function_Parameters_.I,
        abort: _pi.Abort<Function_Parameters_.E>,
    ) => Function_Parameters_.O
    
    export namespace Expression_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Expression
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Expression_ = (
        context: Expression_.I,
        abort: _pi.Abort<Expression_.E>,
    ) => Expression_.O
    
    export namespace String_Literal_ {
        
        export type I = i_in.Value
        
        export type O = i_out.String_Literal
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type String_Literal_ = (
        context: String_Literal_.I,
        abort: _pi.Abort<String_Literal_.E>,
    ) => String_Literal_.O
    
    export namespace Identifier_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Identifier
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Identifier_ = (
        context: Identifier_.I,
        abort: _pi.Abort<Identifier_.E>,
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
