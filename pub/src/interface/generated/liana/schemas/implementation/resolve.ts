
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/resolve"

import * as i_resolved from "./data/resolved"

import * as i_unresolved from "./data/unresolved"

export namespace Abort_Expression_ {
    
    export type I = i_unresolved.Abort_Expression
    
    export type O = i_resolved.Abort_Expression
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Abort_Expression_ = (
    context: Abort_Expression_.I,
    abort: _pi.Abort<Abort_Expression_.E>,
    lookups: null,
    parameters: null,
) => Abort_Expression_.O

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

export namespace Type_Reference_ {
    
    export type I = i_unresolved.Type_Reference
    
    export type O = i_resolved.Type_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Type_Reference_ = (
    context: Type_Reference_.I,
    abort: _pi.Abort<Type_Reference_.E>,
    lookups: null,
    parameters: null,
) => Type_Reference_.O

export namespace Type_Node_Reference_ {
    
    export type I = i_unresolved.Type_Node_Reference
    
    export type O = i_resolved.Type_Node_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Type_Node_Reference_ = (
    context: Type_Node_Reference_.I,
    abort: _pi.Abort<Type_Node_Reference_.E>,
    lookups: null,
    parameters: null,
) => Type_Node_Reference_.O

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

export { 
    Abort_Expression_ as Abort_Expression, 
    Module_Set_ as Module_Set, 
    Module_ as Module, 
    Type_Reference_ as Type_Reference, 
    Type_Node_Reference_ as Type_Node_Reference, 
    Expression_ as Expression, 
    Selection_ as Selection, 
}
