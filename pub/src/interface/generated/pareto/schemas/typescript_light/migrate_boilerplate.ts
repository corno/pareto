
import * as _pi from "pareto-core-interface"

import * as i_out from "./data"

import * as i_in from "./data"

export namespace String_Literal_ {
    
    export type I = i_in.String_Literal
    
    export type O = i_out.String_Literal
    
    export namespace P {
        
    }
    
}

export type String_Literal_ = (
    $$_: String_Literal_.I,
) => String_Literal_.O

export namespace Type_ {
    
    export type I = i_in.Type
    
    export type O = i_out.Type
    
    export namespace P {
        
    }
    
}

export type Type_ = (
    $$_: Type_.I,
) => Type_.O

export namespace Block_Part_ {
    
    export type I = i_in.Block_Part
    
    export type O = i_out.Block_Part
    
    export namespace P {
        
    }
    
}

export type Block_Part_ = (
    $$_: Block_Part_.I,
) => Block_Part_.O

export namespace Expression_ {
    
    export type I = i_in.Expression
    
    export type O = i_out.Expression
    
    export namespace P {
        
    }
    
}

export type Expression_ = (
    $$_: Expression_.I,
) => Expression_.O

export namespace Block_ {
    
    export type I = i_in.Block
    
    export type O = i_out.Block
    
    export namespace P {
        
    }
    
}

export type Block_ = (
    $$_: Block_.I,
) => Block_.O

export namespace Group_Part_ {
    
    export type I = i_in.Group_Part
    
    export type O = i_out.Group_Part
    
    export namespace P {
        
    }
    
}

export type Group_Part_ = (
    $$_: Group_Part_.I,
) => Group_Part_.O

export namespace Group_ {
    
    export type I = i_in.Group
    
    export type O = i_out.Group
    
    export namespace P {
        
    }
    
}

export type Group_ = (
    $$_: Group_.I,
) => Group_.O

export namespace Statements_ {
    
    export type I = i_in.Statements
    
    export type O = i_out.Statements
    
    export namespace P {
        
    }
    
}

export type Statements_ = (
    $$_: Statements_.I,
) => Statements_.O

export namespace Directory_ {
    
    export type I = i_in.Directory
    
    export type O = i_out.Directory
    
    export namespace P {
        
    }
    
}

export type Directory_ = (
    $$_: Directory_.I,
) => Directory_.O

export { 
    String_Literal_ as String_Literal, 
    Type_ as Type, 
    Block_Part_ as Block_Part, 
    Expression_ as Expression, 
    Block_ as Block, 
    Group_Part_ as Group_Part, 
    Group_ as Group, 
    Statements_ as Statements, 
    Directory_ as Directory, 
}
