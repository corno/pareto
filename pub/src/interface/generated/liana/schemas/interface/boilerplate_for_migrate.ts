
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

export namespace Imports_ {
    
    export type I = i_in.Imports
    
    export type O = i_out.Imports
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
) => Imports_.O

export namespace Value_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    context: Value_.I,
) => Value_.O

export namespace Module_Reference_ {
    
    export type I = i_in.Module_Reference
    
    export type O = i_out.Module_Reference
    
    export namespace P {
        
    }
    
}

export type Module_Reference_ = (
    context: Module_Reference_.I,
) => Module_Reference_.O

export { 
    Package_Set_ as Package_Set, 
    Package_ as Package, 
    Imports_ as Imports, 
    Value_ as Value, 
    Module_Reference_ as Module_Reference, 
}
