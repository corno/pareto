
import * as _pi from "pareto-core/dist/interface"

import * as i_in from "./data/resolved"

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

export namespace Temp_Type_Node_Reference_ {
    
    export type I = i_in.Temp_Type_Node_Reference
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Temp_Type_Node_Reference_ = (
    context: Temp_Type_Node_Reference_.I,
) => Temp_Type_Node_Reference_.O

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
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Temp_Type_Node_Reference_ as Temp_Type_Node_Reference, 
    Selection_ as Selection, 
    Expression_ as Expression, 
}
