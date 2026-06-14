
import * as p_i from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/resolve"

import * as i_resolved from "../../../data/resolved"

import * as i_unresolved from "../../../data/unresolved"

export namespace Package_ {
    
    export type I = i_unresolved.Package
    
    export type O = i_resolved.Package
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Package_ = (
    context: Package_.I,
    abort: p_i.Abort<Package_.E>,
    lookups: symbol,
    parameters: symbol,
) => Package_.O

export namespace Package_Set_ {
    
    export type I = i_unresolved.Package_Set
    
    export type O = i_resolved.Package_Set
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Package_Set_ = (
    context: Package_Set_.I,
    abort: p_i.Abort<Package_Set_.E>,
    lookups: symbol,
    parameters: symbol,
) => Package_Set_.O

export namespace Imports_ {
    
    export type I = i_unresolved.Imports
    
    export type O = i_resolved.Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
    abort: p_i.Abort<Imports_.E>,
    lookups: symbol,
    parameters: symbol,
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
    abort: p_i.Abort<Value_.E>,
    lookups: symbol,
    parameters: symbol,
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
    abort: p_i.Abort<Module_Reference_.E>,
    lookups: symbol,
    parameters: symbol,
) => Module_Reference_.O

export { 
    Package_ as Package, 
    Package_Set_ as Package_Set, 
    Imports_ as Imports, 
    Value_ as Value, 
    Module_Reference_ as Module_Reference, 
}
