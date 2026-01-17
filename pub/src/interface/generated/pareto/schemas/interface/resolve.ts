
import * as _pi from "pareto-core-interface"

import * as i_resolve from "pareto-core-internals/dist/algorithm_types/refiner/resolve"

import * as i_resolved from "./data/resolved"

import * as i_unresolved from "./data/unresolved"

export namespace Module_ {
    
    export type I = i_unresolved.Module
    
    export type O = i_resolved.Module
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    $$_: Module_.I,
    $$_lookups: null,
    $$_p: null,
) => Module_.O

export namespace Module_Set_ {
    
    export type I = i_unresolved.Module_Set
    
    export type O = i_resolved.Module_Set
    
    export namespace P {
        
    }
    
}

export type Module_Set_ = (
    $$_: Module_Set_.I,
    $$_lookups: null,
    $$_p: null,
) => Module_Set_.O

export namespace Imports_ {
    
    export type I = i_unresolved.Imports
    
    export type O = i_resolved.Imports
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    $$_: Imports_.I,
    $$_lookups: null,
    $$_p: null,
) => Imports_.O

export namespace Type_ {
    
    export type I = i_unresolved.Type
    
    export type O = i_resolved.Type
    
    export namespace P {
        
    }
    
}

export type Type_ = (
    $$_: Type_.I,
    $$_lookups: null,
    $$_p: null,
) => Type_.O

export { 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Imports_ as Imports, 
    Type_ as Type, 
}
