
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/unmarshall"

import * as i_out from "./data/unresolved"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Imports_ {
    
    export type I = i_in.Value
    
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
    
    export type I = i_in.Value
    
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
    
    export type I = i_in.Value
    
    export type O = i_out.Module_Set
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_Set_ = (
    context: Module_Set_.I,
    abort: _pi.Abort<Module_Set_.E>,
) => Module_Set_.O

export namespace Module_Reference_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Module_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_Reference_ = (
    context: Module_Reference_.I,
    abort: _pi.Abort<Module_Reference_.E>,
) => Module_Reference_.O

export namespace Value_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: _pi.Abort<Value_.E>,
) => Value_.O

export { 
    Imports_ as Imports, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Module_Reference_ as Module_Reference, 
    Value_ as Value, 
}
