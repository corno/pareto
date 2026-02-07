
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/resolve"

import * as i_resolved from "./data/resolved"

import * as i_unresolved from "./data/unresolved"

export namespace Package_Set_ {
    
    export type I = i_unresolved.Package_Set
    
    export type O = i_resolved.Package_Set
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Package_Set_ = (
    context: Package_Set_.I,
    abort: _pi.Abort<Package_Set_.E>,
    lookups: null,
    parameters: null,
) => Package_Set_.O

export namespace Package_ {
    
    export type I = i_unresolved.Package
    
    export type O = i_resolved.Package
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Package_ = (
    context: Package_.I,
    abort: _pi.Abort<Package_.E>,
    lookups: null,
    parameters: null,
) => Package_.O

export namespace Temp_Value_Type_Specification_ {
    
    export type I = i_unresolved.Temp_Value_Type_Specification
    
    export type O = i_resolved.Temp_Value_Type_Specification
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Temp_Value_Type_Specification_ = (
    context: Temp_Value_Type_Specification_.I,
    abort: _pi.Abort<Temp_Value_Type_Specification_.E>,
    lookups: null,
    parameters: null,
) => Temp_Value_Type_Specification_.O

export namespace Assign_ {
    
    export type I = i_unresolved.Assign
    
    export type O = i_resolved.Assign
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Assign_ = (
    context: Assign_.I,
    abort: _pi.Abort<Assign_.E>,
    lookups: null,
    parameters: null,
) => Assign_.O

export namespace Select_Value_ {
    
    export type I = i_unresolved.Select_Value
    
    export type O = i_resolved.Select_Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Select_Value_ = (
    context: Select_Value_.I,
    abort: _pi.Abort<Select_Value_.E>,
    lookups: null,
    parameters: null,
) => Select_Value_.O

export namespace Select_Lookup_ {
    
    export type I = i_unresolved.Select_Lookup
    
    export type O = i_resolved.Select_Lookup
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Select_Lookup_ = (
    context: Select_Lookup_.I,
    abort: _pi.Abort<Select_Lookup_.E>,
    lookups: null,
    parameters: null,
) => Select_Lookup_.O

export { 
    Package_Set_ as Package_Set, 
    Package_ as Package, 
    Temp_Value_Type_Specification_ as Temp_Value_Type_Specification, 
    Assign_ as Assign, 
    Select_Value_ as Select_Value, 
    Select_Lookup_ as Select_Lookup, 
}
