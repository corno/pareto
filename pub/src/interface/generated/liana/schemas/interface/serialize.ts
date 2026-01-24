
import * as _pi from "pareto-core/dist/interface"

import * as i_in from "./data/resolved"

export namespace Imports_ {
    
    export type I = i_in.Imports
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
) => Imports_.O

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

export namespace Type_Node_ {
    
    export type I = i_in.Type_Node
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Type_Node_ = (
    context: Type_Node_.I,
) => Type_Node_.O

export { 
    Imports_ as Imports, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Type_Node_ as Type_Node, 
}
