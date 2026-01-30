
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data/unresolved"

import * as i_in from "./data/resolved"

export namespace Module_ {
    
    export type I = i_in.Module
    
    export type O = i_out.Module
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    context: Module_.I,
) => Module_.O

export namespace Module_Set_ {
    
    export type I = i_in.Module_Set
    
    export type O = i_out.Module_Set
    
    export namespace P {
        
    }
    
}

export type Module_Set_ = (
    context: Module_Set_.I,
) => Module_Set_.O

export namespace Temp_Type_Node_Reference_ {
    
    export type I = i_in.Temp_Type_Node_Reference
    
    export type O = i_out.Temp_Type_Node_Reference
    
    export namespace P {
        
    }
    
}

export type Temp_Type_Node_Reference_ = (
    context: Temp_Type_Node_Reference_.I,
) => Temp_Type_Node_Reference_.O

export namespace Selection_ {
    
    export type I = i_in.Selection
    
    export type O = i_out.Selection
    
    export namespace P {
        
    }
    
}

export type Selection_ = (
    context: Selection_.I,
) => Selection_.O

export namespace Expression_ {
    
    export type I = i_in.Expression
    
    export type O = i_out.Expression
    
    export namespace P {
        
    }
    
}

export type Expression_ = (
    context: Expression_.I,
) => Expression_.O

export namespace Lookup_Selection_ {
    
    export type I = i_in.Lookup_Selection
    
    export type O = i_out.Lookup_Selection
    
    export namespace P {
        
    }
    
}

export type Lookup_Selection_ = (
    context: Lookup_Selection_.I,
) => Lookup_Selection_.O

export { 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Temp_Type_Node_Reference_ as Temp_Type_Node_Reference, 
    Selection_ as Selection, 
    Expression_ as Expression, 
    Lookup_Selection_ as Lookup_Selection, 
}
