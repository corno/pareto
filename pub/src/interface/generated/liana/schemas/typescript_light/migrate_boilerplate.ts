
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data"

import * as i_in from "./data"

export namespace Identifier_ {
    
    export type I = i_in.Identifier
    
    export type O = i_out.Identifier
    
    export namespace P {
        
    }
    
}

export type Identifier_ = (
    context: Identifier_.I,
) => Identifier_.O

export namespace Function_Parameters_ {
    
    export type I = i_in.Function_Parameters
    
    export type O = i_out.Function_Parameters
    
    export namespace P {
        
    }
    
}

export type Function_Parameters_ = (
    context: Function_Parameters_.I,
) => Function_Parameters_.O

export namespace String_Literal_ {
    
    export type I = i_in.String_Literal
    
    export type O = i_out.String_Literal
    
    export namespace P {
        
    }
    
}

export type String_Literal_ = (
    context: String_Literal_.I,
) => String_Literal_.O

export namespace Type_ {
    
    export type I = i_in.Type
    
    export type O = i_out.Type
    
    export namespace P {
        
    }
    
}

export type Type_ = (
    context: Type_.I,
) => Type_.O

export namespace Expression_ {
    
    export type I = i_in.Expression
    
    export type O = i_out.Expression
    
    export namespace P {
        
    }
    
}

export type Expression_ = (
    context: Expression_.I,
) => Expression_.O

export namespace Statements_ {
    
    export type I = i_in.Statements
    
    export type O = i_out.Statements
    
    export namespace P {
        
    }
    
}

export type Statements_ = (
    context: Statements_.I,
) => Statements_.O

export namespace Directory_ {
    
    export type I = i_in.Directory
    
    export type O = i_out.Directory
    
    export namespace P {
        
    }
    
}

export type Directory_ = (
    context: Directory_.I,
) => Directory_.O

export namespace Block_ {
    
    export type I = i_in.Block
    
    export type O = i_out.Block
    
    export namespace P {
        
    }
    
}

export type Block_ = (
    context: Block_.I,
) => Block_.O

export { 
    Identifier_ as Identifier, 
    Function_Parameters_ as Function_Parameters, 
    String_Literal_ as String_Literal, 
    Type_ as Type, 
    Expression_ as Expression, 
    Statements_ as Statements, 
    Directory_ as Directory, 
    Block_ as Block, 
}
