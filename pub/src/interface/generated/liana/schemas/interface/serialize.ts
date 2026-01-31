
import * as _pi from "pareto-core/dist/interface"

import * as i_in from "./data/resolved"

export namespace Module_Set_ {
    
    export type I = i_in.Module_Set
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Module_Set_ = (
    context: Module_Set_.I,
) => Module_Set_.O

export namespace Module_ {
    
    export type I = i_in.Module
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    context: Module_.I,
) => Module_.O

export namespace Imports_ {
    
    export type I = i_in.Imports
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
) => Imports_.O

export namespace Value_ {
    
    export type I = i_in.Value
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    context: Value_.I,
) => Value_.O

export namespace Module_Reference_ {
    
    export type I = i_in.Module_Reference
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Module_Reference_ = (
    context: Module_Reference_.I,
) => Module_Reference_.O

export { 
    Module_Set_ as Module_Set, 
    Module_ as Module, 
    Imports_ as Imports, 
    Value_ as Value, 
    Module_Reference_ as Module_Reference, 
}
