
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/resolve"

import * as i_resolved from "./data/resolved"

import * as i_unresolved from "./data/unresolved"

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

export namespace Temp_Type_Node_Reference_ {
    
    export type I = i_unresolved.Temp_Type_Node_Reference
    
    export type O = i_resolved.Temp_Type_Node_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Temp_Type_Node_Reference_ = (
    context: Temp_Type_Node_Reference_.I,
    abort: _pi.Abort<Temp_Type_Node_Reference_.E>,
    lookups: null,
    parameters: null,
) => Temp_Type_Node_Reference_.O

export namespace Expression_ {
    
    export type I = i_unresolved.Expression
    
    export type O = i_resolved.Expression
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Expression_ = (
    context: Expression_.I,
    abort: _pi.Abort<Expression_.E>,
    lookups: null,
    parameters: null,
) => Expression_.O

export namespace Selection_ {
    
    export type I = i_unresolved.Selection
    
    export type O = i_resolved.Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Selection_ = (
    context: Selection_.I,
    abort: _pi.Abort<Selection_.E>,
    lookups: null,
    parameters: null,
) => Selection_.O

export namespace Lookup_Selection_ {
    
    export type I = i_unresolved.Lookup_Selection
    
    export type O = i_resolved.Lookup_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Lookup_Selection_ = (
    context: Lookup_Selection_.I,
    abort: _pi.Abort<Lookup_Selection_.E>,
    lookups: null,
    parameters: null,
) => Lookup_Selection_.O

export { 
    Module_Set_ as Module_Set, 
    Module_ as Module, 
    Temp_Type_Node_Reference_ as Temp_Type_Node_Reference, 
    Expression_ as Expression, 
    Selection_ as Selection, 
    Lookup_Selection_ as Lookup_Selection, 
}
