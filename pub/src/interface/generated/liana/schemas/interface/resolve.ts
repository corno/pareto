
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/resolve"

import * as i_resolved from "./data/resolved"

import * as i_unresolved from "./data/unresolved"

export namespace Module_ {
    
    export type I = i_unresolved.Module
    
    export type O = i_resolved.Module
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    context: Module_.I,
    abort: _pi.Abort<Module_.E>,
    lookups: null,
    parameters: null,
) => Module_.O

export namespace Module_Set_ {
    
    export type I = i_unresolved.Module_Set
    
    export type O = i_resolved.Module_Set
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_Set_ = (
    context: Module_Set_.I,
    abort: _pi.Abort<Module_Set_.E>,
    lookups: null,
    parameters: null,
) => Module_Set_.O

export namespace Imports_ {
    
    export type I = i_unresolved.Imports
    
    export type O = i_resolved.Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
    abort: _pi.Abort<Imports_.E>,
    lookups: null,
    parameters: null,
) => Imports_.O

export namespace Value_ {
    
    export type I = i_unresolved.Value
    
    export type O = i_resolved.Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: _pi.Abort<Value_.E>,
    lookups: null,
    parameters: null,
) => Value_.O

export namespace Module_Reference_ {
    
    export type I = i_unresolved.Module_Reference
    
    export type O = i_resolved.Module_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_Reference_ = (
    context: Module_Reference_.I,
    abort: _pi.Abort<Module_Reference_.E>,
    lookups: null,
    parameters: null,
) => Module_Reference_.O

export { 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Imports_ as Imports, 
    Value_ as Value, 
    Module_Reference_ as Module_Reference, 
}
