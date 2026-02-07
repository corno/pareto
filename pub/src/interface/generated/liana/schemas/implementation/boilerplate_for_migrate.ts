
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "./data/unresolved"

import * as i_in from "./data/resolved"

export namespace Package_Set_ {
    
    export type I = i_in.Package_Set
    
    export type O = i_out.Package_Set
    
    export namespace P {
        
    }
    
}

export type Package_Set_ = (
    context: Package_Set_.I,
) => Package_Set_.O

export namespace Package_ {
    
    export type I = i_in.Package
    
    export type O = i_out.Package
    
    export namespace P {
        
    }
    
}

export type Package_ = (
    context: Package_.I,
) => Package_.O

export namespace Temp_Value_Type_Specification_ {
    
    export type I = i_in.Temp_Value_Type_Specification
    
    export type O = i_out.Temp_Value_Type_Specification
    
    export namespace P {
        
    }
    
}

export type Temp_Value_Type_Specification_ = (
    context: Temp_Value_Type_Specification_.I,
) => Temp_Value_Type_Specification_.O

export namespace Assign_ {
    
    export type I = i_in.Assign
    
    export type O = i_out.Assign
    
    export namespace P {
        
    }
    
}

export type Assign_ = (
    context: Assign_.I,
) => Assign_.O

export namespace Select_Value_ {
    
    export type I = i_in.Select_Value
    
    export type O = i_out.Select_Value
    
    export namespace P {
        
    }
    
}

export type Select_Value_ = (
    context: Select_Value_.I,
) => Select_Value_.O

export namespace Select_Lookup_ {
    
    export type I = i_in.Select_Lookup
    
    export type O = i_out.Select_Lookup
    
    export namespace P {
        
    }
    
}

export type Select_Lookup_ = (
    context: Select_Lookup_.I,
) => Select_Lookup_.O

export { 
    Package_Set_ as Package_Set, 
    Package_ as Package, 
    Temp_Value_Type_Specification_ as Temp_Value_Type_Specification, 
    Assign_ as Assign, 
    Select_Value_ as Select_Value, 
    Select_Lookup_ as Select_Lookup, 
}
