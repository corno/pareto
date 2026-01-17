
import * as _pi from "pareto-core-interface"

import * as i_out from "./data/unresolved"

import * as i_in from "./data/resolved"

export namespace Type_Reference_ {
    
    export type I = i_in.Type_Reference
    
    export type O = i_out.Type_Reference
    
    export namespace P {
        
    }
    
}

export type Type_Reference_ = (
    $$_: Type_Reference_.I,
) => Type_Reference_.O

export namespace Module_ {
    
    export type I = i_in.Module
    
    export type O = i_out.Module
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    $$_: Module_.I,
) => Module_.O

export namespace Module_Set_ {
    
    export type I = i_in.Module_Set
    
    export type O = i_out.Module_Set
    
    export namespace P {
        
    }
    
}

export type Module_Set_ = (
    $$_: Module_Set_.I,
) => Module_Set_.O

export namespace Type_Node_Reference_ {
    
    export type I = i_in.Type_Node_Reference
    
    export type O = i_out.Type_Node_Reference
    
    export namespace P {
        
    }
    
}

export type Type_Node_Reference_ = (
    $$_: Type_Node_Reference_.I,
) => Type_Node_Reference_.O

export namespace Expression_ {
    
    export type I = i_in.Expression
    
    export type O = i_out.Expression
    
    export namespace P {
        
    }
    
}

export type Expression_ = (
    $$_: Expression_.I,
) => Expression_.O

export namespace Selection_ {
    
    export type I = i_in.Selection
    
    export type O = i_out.Selection
    
    export namespace P {
        
    }
    
}

export type Selection_ = (
    $$_: Selection_.I,
) => Selection_.O

export { 
    Type_Reference_ as Type_Reference, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Type_Node_Reference_ as Type_Node_Reference, 
    Expression_ as Expression, 
    Selection_ as Selection, 
}
