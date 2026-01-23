
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data/unresolved"

import * as i_in from "./data/resolved"

export namespace Imports_ {
    
    export type I = i_in.Imports
    
    export type O = i_out.Imports
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
) => Imports_.O

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

export namespace Type_ {
    
    export type I = i_in.Type
    
    export type O = i_out.Type
    
    export namespace P {
        
    }
    
}

export type Type_ = (
    context: Type_.I,
) => Type_.O

export { 
    Imports_ as Imports, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Type_ as Type, 
}
