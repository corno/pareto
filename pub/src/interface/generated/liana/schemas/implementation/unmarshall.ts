
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/unmarshall"

import * as i_out from "./data/unresolved"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

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

export namespace Temp_Type_Node_Reference_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Temp_Type_Node_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Temp_Type_Node_Reference_ = (
    context: Temp_Type_Node_Reference_.I,
    abort: _pi.Abort<Temp_Type_Node_Reference_.E>,
) => Temp_Type_Node_Reference_.O

export namespace Expression_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Expression
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Expression_ = (
    context: Expression_.I,
    abort: _pi.Abort<Expression_.E>,
) => Expression_.O

export namespace Selection_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Selection_ = (
    context: Selection_.I,
    abort: _pi.Abort<Selection_.E>,
) => Selection_.O

export namespace Lookup_Selection_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Lookup_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Lookup_Selection_ = (
    context: Lookup_Selection_.I,
    abort: _pi.Abort<Lookup_Selection_.E>,
) => Lookup_Selection_.O

export { 
    Module_Set_ as Module_Set, 
    Module_ as Module, 
    Temp_Type_Node_Reference_ as Temp_Type_Node_Reference, 
    Expression_ as Expression, 
    Selection_ as Selection, 
    Lookup_Selection_ as Lookup_Selection, 
}
