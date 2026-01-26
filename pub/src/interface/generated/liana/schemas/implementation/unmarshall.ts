
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/unmarshall"

import * as i_out from "./data/unresolved"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Type_Reference_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Type_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Type_Reference_ = (
    context: Type_Reference_.I,
    abort: _pi.Abort<Type_Reference_.E>,
) => Type_Reference_.O

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

export namespace Type_Node_Reference_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Type_Node_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Type_Node_Reference_ = (
    context: Type_Node_Reference_.I,
    abort: _pi.Abort<Type_Node_Reference_.E>,
) => Type_Node_Reference_.O

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

export namespace Abort_Expression_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Abort_Expression
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Abort_Expression_ = (
    context: Abort_Expression_.I,
    abort: _pi.Abort<Abort_Expression_.E>,
) => Abort_Expression_.O

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

export { 
    Type_Reference_ as Type_Reference, 
    Module_ as Module, 
    Module_Set_ as Module_Set, 
    Type_Node_Reference_ as Type_Node_Reference, 
    Expression_ as Expression, 
    Abort_Expression_ as Abort_Expression, 
    Selection_ as Selection, 
}
