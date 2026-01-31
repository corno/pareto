
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as i_in from "./data/resolved"

export namespace Package_Set_ {
    
    export type I = i_in.Package_Set
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Package_Set_ = (
    context: Package_Set_.I,
) => Package_Set_.O

export namespace Package_ {
    
    export type I = i_in.Package
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Package_ = (
    context: Package_.I,
) => Package_.O

export namespace Temp_Type_Node_Reference_ {
    
    export type I = i_in.Temp_Type_Node_Reference
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Temp_Type_Node_Reference_ = (
    context: Temp_Type_Node_Reference_.I,
) => Temp_Type_Node_Reference_.O

export namespace Expression_ {
    
    export type I = i_in.Expression
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Expression_ = (
    context: Expression_.I,
) => Expression_.O

export namespace Selection_ {
    
    export type I = i_in.Selection
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Selection_ = (
    context: Selection_.I,
) => Selection_.O

export namespace Lookup_Selection_ {
    
    export type I = i_in.Lookup_Selection
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Lookup_Selection_ = (
    context: Lookup_Selection_.I,
) => Lookup_Selection_.O

export { 
    Package_Set_ as Package_Set, 
    Package_ as Package, 
    Temp_Type_Node_Reference_ as Temp_Type_Node_Reference, 
    Expression_ as Expression, 
    Selection_ as Selection, 
    Lookup_Selection_ as Lookup_Selection, 
}
