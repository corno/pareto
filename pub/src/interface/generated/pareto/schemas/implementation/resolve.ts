
import * as _pi from "pareto-core-interface"

// import * as i_resolve from "pareto-core-internals/dist/algorithm_types/refiner/resolve"

import * as i_resolved from "./data/resolved"

import * as i_unresolved from "./data/unresolved"

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

export namespace Type_Reference_ {
    
    export type I = i_unresolved.Type_Reference
    
    export type O = i_resolved.Type_Reference
    
    export namespace P {
        
    }
    
}

export type Type_Reference_ = (
    $$_: Type_Reference_.I,
    $$_lookups: null,
    $$_p: null,
) => Type_Reference_.O

export namespace Type_Node_Reference_ {
    
    export type I = i_unresolved.Type_Node_Reference
    
    export type O = i_resolved.Type_Node_Reference
    
    export namespace P {
        
    }
    
}

export type Type_Node_Reference_ = (
    $$_: Type_Node_Reference_.I,
    $$_lookups: null,
    $$_p: null,
) => Type_Node_Reference_.O

export namespace Expression_ {
    
    export type I = i_unresolved.Expression
    
    export type O = i_resolved.Expression
    
    export namespace P {
        
    }
    
}

export type Expression_ = (
    $$_: Expression_.I,
    $$_lookups: null,
    $$_p: null,
) => Expression_.O

export namespace Selection_ {
    
    export type I = i_unresolved.Selection
    
    export type O = i_resolved.Selection
    
    export namespace P {
        
    }
    
}

export type Selection_ = (
    $$_: Selection_.I,
    $$_lookups: null,
    $$_p: null,
) => Selection_.O

export { 
    Module_Set_ as Module_Set, 
    Module_ as Module, 
    Type_Reference_ as Type_Reference, 
    Type_Node_Reference_ as Type_Node_Reference, 
    Expression_ as Expression, 
    Selection_ as Selection, 
}
