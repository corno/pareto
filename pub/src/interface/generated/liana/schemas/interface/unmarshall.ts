
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "astn-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "./data/unresolved"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Package_Set_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Package_Set
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Package_Set_ = (
    context: Package_Set_.I,
    abort: _pi.Abort<Package_Set_.E>,
) => Package_Set_.O

export namespace Package_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Package
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Package_ = (
    context: Package_.I,
    abort: _pi.Abort<Package_.E>,
) => Package_.O

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

export { 
    Package_Set_ as Package_Set, 
    Package_ as Package, 
    Imports_ as Imports, 
    Value_ as Value, 
    Module_Reference_ as Module_Reference, 
}
