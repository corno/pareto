
import * as _pi from "pareto-core/dist/interface"

import * as i_in from "./data/resolved"

export namespace Type_Reference_ {
    
    export type I = i_in.Type_Reference
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Type_Reference_ = (
    context: Type_Reference_.I,
) => Type_Reference_.O

export namespace Module_ {
    
    export type I = i_in.Module
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    context: Module_.I,
) => Module_.O

export namespace Module_Set_ {
    
    export type I = i_in.Module_Set
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Module_Set_ = (
    context: Module_Set_.I,
) => Module_Set_.O

export namespace Type_Node_Reference_ {
    
    export type I = i_in.Type_Node_Reference
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Type_Node_Reference_ = (
    context: Type_Node_Reference_.I,
) => Type_Node_Reference_.O

export namespace Abort_Expression_ {
    
    export type I = i_in.Abort_Expression
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Abort_Expression_ = (
    context: Abort_Expression_.I,
) => Abort_Expression_.O

export namespace Selection_ {
    
    export type I = i_in.Selection
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Selection_ = (
    context: Selection_.I,
) => Selection_.O

export namespace Expression_ {
    
    export type I = i_in.Expression
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Expression_ = (
    context: Expression_.I,
) => Expression_.O

export { 
    Type_Reference_ as Type_Reference, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Type_Node_Reference_ as Type_Node_Reference, 
    Abort_Expression_ as Abort_Expression, 
    Selection_ as Selection, 
    Expression_ as Expression, 
}
