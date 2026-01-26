
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data/unresolved"

export namespace Imports_ {
    
    export type I = string
    
    export type O = i_out.Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
    abort: _pi.Abort<Imports_.E>,
) => Imports_.O

export namespace Module_ {
    
    export type I = string
    
    export type O = i_out.Module
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    context: Module_.I,
    abort: _pi.Abort<Module_.E>,
) => Module_.O

export namespace Module_Set_ {
    
    export type I = string
    
    export type O = i_out.Module_Set
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_Set_ = (
    context: Module_Set_.I,
    abort: _pi.Abort<Module_Set_.E>,
) => Module_Set_.O

export namespace Type_Reference_ {
    
    export type I = string
    
    export type O = i_out.Type_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Type_Reference_ = (
    context: Type_Reference_.I,
    abort: _pi.Abort<Type_Reference_.E>,
) => Type_Reference_.O

export namespace Type_Node_ {
    
    export type I = string
    
    export type O = i_out.Type_Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Type_Node_ = (
    context: Type_Node_.I,
    abort: _pi.Abort<Type_Node_.E>,
) => Type_Node_.O

export { 
    Imports_ as Imports, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Type_Reference_ as Type_Reference, 
    Type_Node_ as Type_Node, 
}
