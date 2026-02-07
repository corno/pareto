
import * as _pi from 'pareto-core/dist/interface'

import * as i_in from "./data/resolved"

import * as i_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

export namespace Package_Set_ {
    
    export type I = i_in.Package_Set
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Package_Set_ = (
    context: Package_Set_.I,
) => Package_Set_.O

export namespace Package_ {
    
    export type I = i_in.Package
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Package_ = (
    context: Package_.I,
) => Package_.O

export namespace Temp_Value_Type_Specification_ {
    
    export type I = i_in.Temp_Value_Type_Specification
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Temp_Value_Type_Specification_ = (
    context: Temp_Value_Type_Specification_.I,
) => Temp_Value_Type_Specification_.O

export namespace Expression_ {
    
    export type I = i_in.Expression
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Expression_ = (
    context: Expression_.I,
) => Expression_.O

export namespace Value_Selection_ {
    
    export type I = i_in.Value_Selection
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Value_Selection_ = (
    context: Value_Selection_.I,
) => Value_Selection_.O

export namespace Lookup_Selection_ {
    
    export type I = i_in.Lookup_Selection
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Lookup_Selection_ = (
    context: Lookup_Selection_.I,
) => Lookup_Selection_.O

export { 
    Package_Set_ as Package_Set, 
    Package_ as Package, 
    Temp_Value_Type_Specification_ as Temp_Value_Type_Specification, 
    Expression_ as Expression, 
    Value_Selection_ as Value_Selection, 
    Lookup_Selection_ as Lookup_Selection, 
}
